# Warp Guide: rezeptbuch.tobias-hopp.de

This repository contains a Laravel application for “Toby's Rezeptbuch”.

## Codebase
- Framework: Laravel (PHP 8.3 compatible)
- Frontend: Vite + Node 20
- Entry point: `public/index.php` (subdomain points to `/public`).

## Local development (quick reference)
- PHP ≥ 8.3 with Composer
- Node ≥ 20
- Commands:
  - `composer install`
  - `cp .env.example .env && php artisan key:generate`
  - `npm ci && npm run dev`
  - `php artisan serve`

## Deployment overview (GitHub Actions over SSH)
- Branch: `Prod`
- Domain: https://rezeptbuch.tobias-hopp.de
- Server path (docroot points to `public`): `/home/www/subdomains/rezeptbuch.tobias-hopp.de`
- SSH host: provided via `DEPLOY_HOST` secret (GitHub runners cannot use your local `ssh webgo` alias)
- Shared deploy key in CI: `DEPLOY_SSH_PRIVATE_KEY` (same private key for all apps)

### What the workflow does
1) Builds assets with Node/Vite.
2) Uploads the project to the server via SSH using a tar stream (excludes `.env`, `vendor`, `node_modules`, etc.).
3) Runs server-side Composer install, migrations, and caches; links storage.

### Required repo secrets
- `DEPLOY_HOST` – server hostname or IP
- `DEPLOY_USER` – SSH user on the server
- `DEPLOY_PATH` – `/home/www/subdomains/rezeptbuch.tobias-hopp.de`
- `DEPLOY_PORT` – optional, defaults to 22
- `DEPLOY_SSH_PRIVATE_KEY_B64` – base64 of the shared `web_deploy_key` private key (unencrypted OpenSSH)

Create the base64 value (PowerShell):
```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("$HOME\.ssh\web_deploy_key")) | Set-Clipboard
```
Paste clipboard into the secret. Remove any old `DEPLOY_SSH_PRIVATE_KEY` secrets to avoid confusion.

## Notes
- Keep `.env` only on the server; the workflow excludes it from upload.
- Host key verification is added via `ssh-keyscan` for convenience; you can harden it later by pinning a fingerprint.
