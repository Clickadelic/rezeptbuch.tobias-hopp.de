# Deployment Guide for rezeptbuch.tobias-hopp.de

## Overview

This Laravel application is set up with automatic deployment to your webspace using Git hooks.

## Setup Summary

- **Local repository**: `C:\Users\Clickadelic\dev-station\tobias-hopp.de\rezeptbuch.tobias-hopp.de`
- **Production server**: `webgo:/home/www/repos/rezeptbuch.tobias-hopp.de.git`
- **Web directory**: `/home/www/subdomains/rezeptbuch.tobias-hopp.de`
- **Live URL**: https://rezeptbuch.tobias-hopp.de

## Git Branches

- **master**: Your main development branch
- **production**: Branch used for production deployments

## Git Remotes

- **origin**: Your GitHub repository (`git@github.com:Clickadelic/rezeptbuch.tobias-hopp.de.git`)
- **production**: Your webspace repository (`webgo:/home/www/repos/rezeptbuch.tobias-hopp.de.git`)

## Deployment Workflow

### Method 1: Using the deployment script (Recommended)

```powershell
# Make sure you're in the project directory
cd "C:\Users\Clickadelic\dev-station\tobias-hopp.de\rezeptbuch.tobias-hopp.de"

# Run the deployment script
.\deploy.ps1
```

### Method 2: Manual deployment

```powershell
# 1. Switch to production branch
git checkout production

# 2. Merge your changes from master
git merge master

# 3. Push to production server
git push production production

# 4. Switch back to master
git checkout master
```

## Post-Receive Hook

The server has a post-receive hook that automatically:

1. Checks out the production branch
2. Updates the files in `/home/www/subdomains/rezeptbuch.tobias-hopp.de`

## Troubleshooting

### If deployment fails

1. Check SSH connection: `ssh webgo "pwd"`
2. Verify hook permissions: `ssh webgo "ls -la /home/www/repos/rezeptbuch.tobias-hopp.de.git/hooks/post-receive"`
3. Test hook manually: `ssh webgo "cd /home/www/repos/rezeptbuch.tobias-hopp.de.git && ./hooks/post-receive"`

### Laravel-specific considerations

After deployment, you might need to run Laravel commands on the server:

```bash
# Connect to your server
ssh webgo

# Navigate to your app directory
cd /home/www/subdomains/rezeptbuch.tobias-hopp.de

# Run Laravel commands if needed
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Environment Setup

Make sure your `.env` file is properly configured on the production server at `/home/www/subdomains/rezeptbuch.tobias-hopp.de/.env`

## Development Workflow

1. Make changes locally on the `master` branch
2. Test your changes locally
3. Commit your changes: `git commit -m "Your changes"`
4. Push to GitHub: `git push origin master` (optional)
5. Deploy to production: `.\deploy.ps1`

That's it! Your changes will be automatically deployed to https://rezeptbuch.tobias-hopp.de
