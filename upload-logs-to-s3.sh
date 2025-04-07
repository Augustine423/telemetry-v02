#!/bin/bash

# Configuration (overridable via environment variables)
LOG_DIR="${LOG_DIR:-/home/ubuntu/telemetry-v02/Backend/logs}"
S3_BUCKET="${S3_BUCKET:-teledata-log-bucket}"
LAST_RUN_FILE="${LAST_RUN_FILE:-/home/ubuntu/telemetry-v02/last_run_timestamp.txt}"
LOG_OUTPUT="${LOG_OUTPUT:-/home/ubuntu/telemetry-v02/upload-logs-to-s3.log}"

# Redirect output to a log file
exec > >(tee -a "$LOG_OUTPUT") 2>&1

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Starting log upload process"

# Validate environment
[[ ! -d "$LOG_DIR" ]] && { log "Error: Log directory $LOG_DIR not found"; exit 1; }
command -v aws >/dev/null 2>&1 || { log "Error: AWS CLI not installed"; exit 1; }

# Get last run timestamp
LAST_RUN=$( [[ -f "$LAST_RUN_FILE" ]] && cat "$LAST_RUN_FILE" || echo 0 )
CURRENT_TIME=$(date +%s)
ANY_FILES_FOUND=false

# Process logs
shopt -s nullglob
for LOG_FILE in "$LOG_DIR"/*.log; do
    if [[ -f "$LOG_FILE" ]]; then
        FILE_MOD_TIME=$(stat -c %Y "$LOG_FILE" 2>/dev/null || stat -f %m "$LOG_FILE")
        FILE_SIZE=$(stat -c %s "$LOG_FILE" 2>/dev/null || stat -f %z "$LOG_FILE")

        if [[ "$FILE_MOD_TIME" -gt "$LAST_RUN" && "$FILE_SIZE" -gt 0 ]]; then
            ANY_FILES_FOUND=true
            S3_KEY="logs/$(basename "$LOG_FILE")"
            log "Uploading $LOG_FILE to s3://$S3_BUCKET/$S3_KEY"
            if aws s3 cp "$LOG_FILE" "s3://$S3_BUCKET/$S3_KEY" --quiet; then
                log "Uploaded $LOG_FILE successfully"
                rm -f "$LOG_FILE" && log "Deleted $LOG_FILE" || log "Failed to delete $LOG_FILE"
            else
                log "Failed to upload $LOG_FILE"
            fi
        else
            log "Skipping $LOG_FILE (old or empty)"
        fi
    fi
done

[[ "$ANY_FILES_FOUND" = false ]] && log "No new log files found"
echo "$CURRENT_TIME" > "$LAST_RUN_FILE" && log "Updated timestamp" || log "Failed to update timestamp"
log "Finished log upload process"