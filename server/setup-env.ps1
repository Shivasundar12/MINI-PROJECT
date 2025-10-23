# Setup script for .env file
$envContent = @"
GEMINI_API_KEY=AIzaSyC28NT7c9zZE04azcKqslXj5Y6TcT04Ysw
PORT=5000
"@

$envContent | Out-File -FilePath ".env" -Encoding utf8 -NoNewline
Write-Host "✅ .env file created successfully!" -ForegroundColor Green
Write-Host "You can now run: npm start" -ForegroundColor Cyan
