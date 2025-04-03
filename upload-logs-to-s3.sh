#!/bin/bash

# Directory where logs are mounted from the container
LOG_DIR="./Backend/logs"

# S3 bucket name
S3_BUCKET="teledata-log-bucket"

# File to store the last run timestamp
LAST_RUN_FILE="./last_run_timestamp.txt"

echo "Starting upload at $(date)"

# Check if log directory exists
if [ ! -d "$LOG_DIR" ]; then
  echo "Error: Log directory $LOG_DIR not found"
  exit 1
fi

# Get the last run timestamp (or set to epoch if file doesn't exist)
if [ -f "$LAST_RUN_FILE" ]; then
  LAST_RUN=$(cat "$LAST_RUN_FILE")
else
  LAST_RUN=0  # Default to epoch (1970-01-01) if no previous run
fi

# Current timestamp for this run (in seconds since epoch)
CURRENT_TIME=$(date +%s)

# Flag to track if any files are processed
ANY_FILES_FOUND=false

# Loop through all log files in the directory
for LOG_FILE in "$LOG_DIR"/*.log; do
  if [ -f "$LOG_FILE" ]; then
    # Get the file's last modification time
    FILE_MOD_TIME=$(stat -c %Y "$LOG_FILE")

    # Check if the file is newer than the last run
    if [ "$FILE_MOD_TIME" -gt "$LAST_RUN" ]; then
      # Get file size in bytes
      FILE_SIZE=$(stat -c %s "$LOG_FILE")

      # Skip if file size is 0 KB
      if [ "$FILE_SIZE" -eq 0 ]; then
        echo "Skipping $LOG_FILE - file is 0 KB"
        continue
      fi

      ANY_FILES_FOUND=true
      # Use the original filename without adding a timestamp
      BASENAME=$(basename "$LOG_FILE")
      S3_KEY="logs/$BASENAME"

      # Upload to S3
      echo "Uploading $LOG_FILE to s3://$S3_BUCKET/$S3_KEY"
      aws s3 cp "$LOG_FILE" "s3://$S3_BUCKET/$S3_KEY"
      if [ $? -eq 0 ]; then
        echo "Successfully uploaded $LOG_FILE to s3://$S3_BUCKET/$S3_KEY"
        # Force remove the file after upload to save space
        rm -f "$LOG_FILE"
        if [ $? -eq 0 ]; then
          echo "Deleted $LOG_FILE from local storage"
        else
          echo "Failed to delete $LOG_FILE"
        fi
      else
        echo "Failed to upload $LOG_FILE"
      fi
    else
      echo "Skipping $LOG_FILE - not modified since last run"
    fi
  fi
done

# If no new files were found, log it
if [ "$ANY_FILES_FOUND" = false ]; then
  echo "No new log files found in $LOG_DIR"
fi

# Update the last run timestamp
echo "$CURRENT_TIME" > "$LAST_RUN_FILE"

echo "Finished upload at $(date)"