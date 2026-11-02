#!/bin/sh
set -e

cd /app

# node_modules is a named volume that survives image rebuilds, so it can drift
# from package-lock.json. Re-sync whenever the lock file's hash differs from the
# stamp stored inside the volume.
lock_hash=$(sha256sum package-lock.json | cut -d' ' -f1)
stamp=node_modules/.package-lock.sha256

if [ ! -f "$stamp" ] || [ "$(cat "$stamp")" != "$lock_hash" ]; then
  echo "package-lock.json changed; running npm ci..."
  if npm ci --no-audit --no-fund; then
    echo "$lock_hash" > "$stamp"
  elif [ -d node_modules/.bin ]; then
    echo "npm ci failed; continuing with existing node_modules" >&2
  else
    echo "npm ci failed and node_modules is empty; cannot start" >&2
    exit 1
  fi
fi

exec "$@"
