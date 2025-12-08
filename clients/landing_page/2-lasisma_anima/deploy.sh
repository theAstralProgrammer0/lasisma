#!/bin/bash
npm run build
lftp -e "open -u $FTP_USER,$FTP_PASS $FTP_HOST; mirror -R dist/ public_html/; bye"

