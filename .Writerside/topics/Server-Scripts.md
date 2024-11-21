# Server Scripts

## Immich Backup

**Description:** Back up the entire Immich library and Postgres database weekly.

**Type:** Cron Job

**Schedule:** Weekly at 3AM on Sunday

**Runs as:** `root`

**Important Locations:**

 - Script: `/bin/immich-backup.sh`
 - Crontab: `/var/spool/cron/crontabs/root`
 - Input directory: `/home/space/immich-app/library/library`
 - Output directory: `/media/serverhdd/Backup/Immich`
 - Output files: `immich-library-$DATE.tar.gz` and `immich_postgres-db-dump-$DATE.sql.gz`

## Immich Updater

**Description:** Update Immich server to the latest version

**Type:** Manual

**Runs as:** `sudo`

**Important Locations:**

- Script: `/home/space/immich-app/update-script.sh`

## Immich broken photo repair

**Description:** Fix "Error loading image" on new photos uploaded to Immich

**Type:** Manual

**Runs as:** `sudo`

**Important Locations:**

 - Script: `/home/space/immich-app/fix-broken-images.sh`

## Docker pruning

**Description:** Prune Docker of any unused objects.

**Type:** Manual

**Runs as:** `sudo`

**Important Locations:**

 - Script: `/home/space/prune-docker.sh`

## Snap cleaner

**Description:** Clean up old snaps that are no longer needed

**Type:** Manual

**Runs as:** `sudo`

**Important Locations:**

 - Script: `/home/space/rm-old-snaps.sh`