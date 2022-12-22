#!/bin/bash
sudo systemctl stop helpcenter

datestamp=$(date +"%Y%m%d_%H%M%S")

rm -rf /app/backup_helpcenter*
mv /app/helpcenter /app/backup_helpcenter_$datestamp
mkdir -p /app/helpcenter
tar -xzf /home/ubuntu/deploy/.jenkins/helpcenter.tar.gz -C /app/helpcenter/
find /app/helpcenter/ -type d -exec chmod 755 {} \;
find /app/helpcenter/ -type f -exec chmod 644 {} \;
cd /app/helpcenter/

yarn
yarn build

sudo systemctl start helpcenter
sudo sleep 10