param(
  [Parameter(Mandatory=$true)]
  [string]$RepoUrl
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

if (-not (Test-Path .git)) {
  git init
  git add .
  git commit -m "feat: initial personal CV website"
}

git branch -M main

$hasOrigin = git remote | Select-String -Pattern "^origin$" -Quiet
if ($hasOrigin) {
  git remote set-url origin $RepoUrl
} else {
  git remote add origin $RepoUrl
}

git push -u origin main
Write-Host "Push completed. Now go to GitHub Settings -> Pages -> Source: GitHub Actions"
