#!/usr/bin/env bash
# Unified deploy script for production server
# - Installs PHP dependencies
# - Optimizes Laravel caches
# - Runs DB migrations
# - Builds frontend assets with Vite
#
# Usage (on server post-receive hook):
#   WORK_TREE="/home/www/sites/rezeptbuch.tobias-hopp.de" \
#   GIT_DIR="/home/www/repos/rezeptbuch.tobias-hopp.de.git" \
#   BRANCH="production" \
#   bash scripts/deploy.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

# --- Node setup (optional) ----------------------------------------------------
# If using nvm, load it and try to use Node 18+ if available.
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$HOME/.nvm/nvm.sh"
  nvm use 18 >/dev/null 2>&1 || true
fi

# --- PHP dependencies ---------------------------------------------------------
if command -v composer >/dev/null 2>&1; then
  composer install --no-interaction --prefer-dist --optimize-autoloader
else
  if [ -f composer.phar ]; then
    php composer.phar install --no-interaction --prefer-dist --optimize-autoloader
  else
    echo "Composer not found; skipping composer install" >&2
  fi
fi

# --- Laravel optimize & migrate ----------------------------------------------
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true
php artisan migrate --force || true

# --- Frontend build -----------------------------------------------------------
if command -v npm >/dev/null 2>&1; then
  npm ci || npm install
  npm run build
elif command -v yarn >/dev/null 2>&1; then
  yarn install --frozen-lockfile || yarn install
  yarn build
else
  echo "No npm/yarn found; skipping asset build" >&2
fi

echo "Deploy script finished successfully."
