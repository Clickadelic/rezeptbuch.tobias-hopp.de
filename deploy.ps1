#!/usr/bin/env pwsh
# Deployment script for rezeptbuch.tobias-hopp.de
# Usage: .\deploy.ps1 [commit-message]

param(
    [string]$Message = "Deploy to production"
)

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Save current branch
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $currentBranch" -ForegroundColor Yellow

# Check if working directory is clean
$status = git status --porcelain
if ($status) {
    Write-Host "❌ Working directory is not clean. Please commit your changes first." -ForegroundColor Red
    git status
    exit 1
}

# Switch to production branch
Write-Host "Switching to production branch..." -ForegroundColor Blue
git checkout production

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to switch to production branch" -ForegroundColor Red
    exit 1
}

# Merge changes from master
Write-Host "Merging changes from master..." -ForegroundColor Blue
git merge master -m "Merge master into production: $Message"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to merge changes from master" -ForegroundColor Red
    git checkout $currentBranch
    exit 1
}

# Build assets locally
Write-Host "📦 Installing npm dependencies..." -ForegroundColor Blue
npm ci

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install npm dependencies" -ForegroundColor Red
    git checkout $currentBranch
    exit 1
}

Write-Host "🔨 Building production assets..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to build assets" -ForegroundColor Red
    git checkout $currentBranch
    exit 1
}

# Commit built assets if any changes
Write-Host "📦 Checking for built asset changes..." -ForegroundColor Blue
git add public/build -f

# Check if there are staged changes
$stagedChanges = git diff --cached --name-only
if ($stagedChanges) {
    Write-Host "📦 Committing built assets..." -ForegroundColor Blue
    git commit -m "Build assets for deployment: $Message"
} else {
    Write-Host "📦 No build changes detected" -ForegroundColor Green
}

# Push to production remote
Write-Host "📤 Pushing to production server..." -ForegroundColor Blue
git push production production

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push to production" -ForegroundColor Red
    git checkout $currentBranch
    exit 1
}

# Push production branch to origin as well
Write-Host "📤 Pushing production branch to origin..." -ForegroundColor Blue
git push origin production

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ Failed to push to origin, but production deployment was successful" -ForegroundColor Yellow
}

# Switch back to original branch
Write-Host "🔄 Switching back to $currentBranch..." -ForegroundColor Blue
git checkout $currentBranch

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your Laravel app is now live at: https://rezeptbuch.tobias-hopp.de" -ForegroundColor Cyan
