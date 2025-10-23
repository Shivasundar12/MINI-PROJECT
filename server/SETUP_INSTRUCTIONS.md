# Server Setup Instructions

## Quick Fix for the 500 Error

The error is happening because the `.env` file doesn't have the `GEMINI_API_KEY` configured.

### Step 1: Update your `.env` file

Open the file `c:\Users\shiva\Desktop\MIni project\server\.env` and add this line:

```
GEMINI_API_KEY=AIzaSyC28NT7c9zZE04azcKqslXj5Y6TcT04Ysw
PORT=5000
```

### Step 2: Restart the server

1. Stop the current server (Ctrl+C in the terminal)
2. Run: `npm start`

### Step 3: Test the application

1. Make sure the client is running on http://localhost:3000
2. Enter a job role (e.g., "Frontend Developer")
3. Click "Generate Questions"

The questions should now generate successfully! ✅

## What was fixed:

- ✅ CORS error resolved
- ✅ Migrated from Cohere to Google Gemini API
- ✅ Added proper error handling and logging
- ✅ API key validation
