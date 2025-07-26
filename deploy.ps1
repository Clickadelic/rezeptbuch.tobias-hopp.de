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

# Check if package.json exists and build assets
if (Test-Path "package.json") {
    Write-Host "📦 Installing npm dependencies..." -ForegroundColor Blue
    npm install --production=false
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️ npm install failed, continuing anyway..." -ForegroundColor Yellow
    }
    
    Write-Host "🔨 Building production assets..." -ForegroundColor Blue
    npm run build
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to build assets" -ForegroundColor Red
        git checkout $currentBranch
        exit 1
    }
    
    # Commit built assets if any changes
    $buildStatus = git status --porcelain
    if ($buildStatus) {
        Write-Host "📦 Committing built assets..." -ForegroundColor Blue
        git add .
        git commit -m "Build assets for deployment: $Message"
    }
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
