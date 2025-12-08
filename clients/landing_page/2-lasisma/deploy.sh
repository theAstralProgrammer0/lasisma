#!/bin/bash

# 1. Load environment variables from .env file (if it exists)
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# 2. Build the project
npm run build

# 3. Deploy
# We use -c for "command".
# We use quotes around variables in case your password has special characters.
lftp -c "set ftp:ssl-allow no; open -u \"$FTP_USER\",\"$FTP_PASS\" \"$FTP_HOST\"; mirror -R dist/ public_html/"
