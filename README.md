# 🎯 AI Interview Preparation App

An intelligent interview question generator powered by AI to help you prepare for job interviews.

## ✨ Features

- 🤖 **AI-Powered Questions**: Generates relevant interview questions using Hugging Face AI
- 🎨 **Modern UI**: Clean and responsive React interface
- 🚀 **Fast & Free**: Uses free Hugging Face API (no credit card required!)
- 💡 **Smart Fallback**: Always works even if API is slow - provides instant fallback questions
- 🔄 **Real-time Generation**: Get questions instantly for any job role

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS3
- Axios

### Backend
- Node.js
- Express.js
- Hugging Face API (Mistral-7B-Instruct model)
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   cd "C:\Users\shiva\Desktop\MIni project"
   ```

2. **Install Server Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Start the Server**
   ```bash
   cd ../server
   npm start
   ```
   Server will run on: http://localhost:5000

5. **Start the Client** (in a new terminal)
   ```bash
   cd client
   npm start
   ```
   Client will run on: http://localhost:3000

## 📝 How to Use

1. Open http://localhost:3000 in your browser
2. Enter a job role (e.g., "Frontend Developer", "Data Scientist", "Product Manager")
3. Click "Generate Questions"
4. Get 5 AI-generated interview questions instantly!

## 🔑 API Configuration (Optional)

The app works **without any API key** using Hugging Face's free tier!

If you want faster responses, you can optionally add a Hugging Face token:

1. Go to https://huggingface.co/settings/tokens
2. Create a free account
3. Generate a token
4. Add to `server/.env`:
   ```
   HF_TOKEN=your_token_here
   PORT=5000
   ```

## 🎨 Features

- **Mix of Questions**: HR, behavioral, and technical questions
- **Role-Specific**: Questions tailored to your job role
- **Instant Fallback**: Always get questions even if AI is slow
- **No API Key Required**: Works out of the box!

## 📦 Project Structure

```
MIni project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   └── App.js
│   └── package.json
├── server/                # Express backend
│   ├── index.js          # Main server file
│   ├── .env              # Environment variables
│   └── package.json
└── README.md
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use:
- Kill the process or use a different port
- The app will prompt you to use another port

### Questions Not Generating
- Check if both server and client are running
- Server logs will show "✅ Server running at http://localhost:5000"
- Even if API fails, fallback questions will be provided

### CORS Errors
- Make sure server is running on port 5000
- CORS is already configured in the server

## 🎯 Example Job Roles

Try these job roles:
- Frontend Developer
- Backend Developer
- Full Stack Developer
- Data Scientist
- Product Manager
- DevOps Engineer
- UI/UX Designer
- Software Engineer

## 📄 License

MIT License - Feel free to use this project!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 👨‍💻 Author

Built with ❤️ for interview preparation

---

**Note**: This app uses Hugging Face's free API. No credit card or payment required! 🎉
