# Update .env file for Hugging Face API
$envContent = @"
HF_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PORT=5000
"@

$envContent | Out-File -FilePath ".env" -Encoding utf8 -NoNewline
Write-Host "✅ .env file updated for Hugging Face API!" -ForegroundColor Green
Write-Host "Note: HF_TOKEN is optional - the app works without it too!" -ForegroundColor Cyan
Write-Host "You can now run: npm start" -ForegroundColor Cyan
