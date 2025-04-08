name: Deploy to EC2

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Deploy to EC2
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          EC2_INSTANCE_IP: ${{ secrets.EC2_INSTANCE_IP }}
        run: |
          echo "$SSH_PRIVATE_KEY" > private_key.pem
          chmod 600 private_key.pem
          ssh -i private_key.pem -o StrictHostKeyChecking=no ubuntu@$EC2_INSTANCE_IP << EOF
            echo "Connected to EC2"

            # Install Git
            if ! command -v git >/dev/null 2>&1; then
              echo "Installing Git..."
              sudo apt-get update -y
              sudo apt-get install -y git
            fi

            # Install Docker
            if ! command -v docker >/dev/null 2>&1; then
              echo "Installing Docker..."
              sudo apt-get install -y docker.io
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo usermod -aG docker ubuntu
            fi

            # Install Docker Compose
            if ! command -v docker-compose >/dev/null 2>&1; then
              echo "Installing Docker Compose..."
              sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-\$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose
              sudo chmod +x /usr/local/bin/docker-compose
            fi

            # Install AWS CLI
            if ! command -v aws >/dev/null 2>&1; then
              echo "Installing AWS CLI..."
              sudo apt-get install -y awscli
            fi

            # Clone or update the repo
            if [ -d "/home/ubuntu/telemetry-v02" ]; then
              echo "Updating existing repo..."
              cd /home/ubuntu/telemetry-v02
              git pull origin main
            else
              echo "Cloning repo..."
              git clone https://github.com/Augustine423/telemetry-v02.git /home/ubuntu/telemetry-v02
              cd /home/ubuntu/telemetry-v02
            fi

            # Write docker-compose.yaml
            echo "Writing docker-compose.yaml..."
            cat > docker-compose.yaml << INNER_EOF
            version: "3.8"
            services:
              frontend:
                build:
                  context: ./Frontend
                  dockerfile: Dockerfile
                ports:
                  - "80:80"
                depends_on:
                  - backend
                networks:
                  - drone-network
              backend:
                build:
                  context: ./Backend
                  dockerfile: Dockerfile
                ports:
                  - "8080:8080"
                  - "14552-14559:14552-14559/udp"
                  - "15000-15009:15000-15009/udp"
                volumes:
                  - ./Backend/logs:/app/logs
                networks:
                  - drone-network
            networks:
              drone-network:
                driver: bridge
            INNER_EOF

            # Create logs directory
            mkdir -p Backend/logs
            echo "Logs directory created"

            # Build with timeout
            echo "Building services..."
            timeout 20m docker-compose build --progress=plain || { echo "Build timed out or failed"; exit 1; }

            # Deploy
            echo "Deploying..."
            docker-compose up -d

            # Write upload-logs-to-s3.sh
            echo "Writing upload-logs-to-s3.sh..."
            cat > upload-logs-to-s3.sh << INNER_EOF
            #!/bin/bash

            # Configuration (overridable via environment variables)
            LOG_DIR="\${LOG_DIR:-/home/ubuntu/telemetry-v02/Backend/logs}"
            S3_BUCKET="\${S3_BUCKET:-teledata-log-bucket}"
            LAST_RUN_FILE="\${LAST_RUN_FILE:-/home/ubuntu/telemetry-v02/last_run_timestamp.txt}"
            LOG_OUTPUT="\${LOG_OUTPUT:-/home/ubuntu/telemetry-v02/upload-logs-to-s3.log}"

            # Redirect output to a log file
            exec > >(tee -a "\$LOG_OUTPUT") 2>&1

            log() {
                echo "[$(date '+%Y-%m-%d %H:%M:%S')] \$1"
            }

            log "Starting log upload process"

            # Validate environment
            [[ ! -d "\$LOG_DIR" ]] && { log "Error: Log directory \$LOG_DIR not found"; exit 1; }
            command -v aws >/dev/null 2>&1 || { log "Error: AWS CLI not installed"; exit 1; }

            # Get last run timestamp
            LAST_RUN=\$( [[ -f "\$LAST_RUN_FILE" ]] && cat "\$LAST_RUN_FILE" || echo 0 )
            CURRENT_TIME=\$(date +%s)
            ANY_FILES_FOUND=false

            # Process logs
            shopt -s nullglob
            for LOG_FILE in "\$LOG_DIR"/*.log; do
                if [[ -f "\$LOG_FILE" ]]; then
                    FILE_MOD_TIME=\$(stat -c %Y "\$LOG_FILE" 2>/dev/null || stat -f %m "\$LOG_FILE")
                    FILE_SIZE=\$(stat -c %s "\$LOG_FILE" 2>/dev/null || stat -f %z "\$LOG_FILE")

                    if [[ "\$FILE_MOD_TIME" -gt "\$LAST_RUN" && "\$FILE_SIZE" -gt 0 ]]; then
                        ANY_FILES_FOUND=true
                        S3_KEY="logs/\$(basename "\$LOG_FILE")"
                        log "Uploading \$LOG_FILE to s3://\$S3_BUCKET/\$S3_KEY"
                        if aws s3 cp "\$LOG_FILE" "s3://\$S3_BUCKET/\$S3_KEY" --quiet; then
                            log "Uploaded \$LOG_FILE successfully"
                            rm -f "\$LOG_FILE" && log "Deleted \$LOG_FILE" || log "Failed to delete \$LOG_FILE"
                        else
                            log "Failed to upload \$LOG_FILE"
                        fi
                    else
                        log "Skipping \$LOG_FILE (old or empty)"
                    fi
                fi
            done

            [[ "\$ANY_FILES_FOUND" = false ]] && log "No new log files found"
            echo "\$CURRENT_TIME" > "\$LAST_RUN_FILE" && log "Updated timestamp" || log "Failed to update timestamp"
            log "Finished log upload process"
            INNER_EOF

            # Make script executable
            chmod +x upload-logs-to-s3.sh
            echo "upload-logs-to-s3.sh created"

            # Set up crontab
            echo "Setting up crontab..."
            (crontab -l 2>/dev/null || true; echo "*/5 * * * * /home/ubuntu/telemetry-v02/upload-logs-to-s3.sh") | crontab -
            echo "Crontab set to run every 5 minutes"

            # Show running containers
            echo "Running containers:"
            docker ps
          EOF
          rm -f private_key.pem