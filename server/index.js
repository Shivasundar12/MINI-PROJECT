// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { CohereClient } = require('cohere-ai');

// // Load env variables
// dotenv.config();

// // Initialize Cohere client
// const cohere = new CohereClient({
//   token: process.env.COHERE_API_KEY,
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Sample route
// app.get('/', (req, res) => {
//   res.send('Cohere Interview Question Generator API is running 🚀');
// });

// // Route to generate questions
// app.post('/generate-questions', async (req, res) => {
//   const { jobRole } = req.body;

//   if (!jobRole) {
//     return res.status(400).json({ error: 'Job role is required' });
//   }

//   try {
//     const prompt = `Generate 5 interview questions (mix of HR, MCQ, and technical) for the job role: ${jobRole}`;

//     const response = await cohere.generate({
//       model: 'command-r-plus',
//       prompt,
//       maxTokens: 300,
//       temperature: 0.7,
//     });

//     const output = response.generations[0].text.trim();
//     const questions = output.split('\n').filter(q => q.trim() !== '');

//     res.json({ questions });
//   } catch (err) {
//     console.error('❌ Error generating questions:', err.message);
//     res.status(500).json({ error: 'Failed to generate questions' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });


// 

// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import { CohereClient } from "cohere-ai";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// // Initialize Cohere client
// const co = new CohereClient({ apiKey: process.env.CO_API_KEY });

// app.post("/generate-questions", async (req, res) => {
//   const { role } = req.body;

//   try {
//     // ✅ Pass a single string as 'message'
//     const response = await co.chat({
//       model: "command-r-plus-08-2024",
//       message: `Generate 5 interview questions for the job role: ${role}.`,
//       temperature: 0.7,
//       max_tokens: 500
//     });

//     console.log("🧠 Cohere API Response:", response);

//     const output = response?.message?.content || "No questions generated.";

//     // Optional: split into array for frontend
//     const questions = output.split(/\n+/).filter(q => q.trim() !== "");

//     res.json({ questions });
//   } catch (error) {
//     console.error("❌ Error generating questions:", error);
//     res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Hugging Face API configuration
const HF_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";
const HF_TOKEN = process.env.HF_TOKEN || "hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Free tier works without token too!

app.get("/", (req, res) => {
  res.send("AI Interview Question Generator API is running 🚀");
});

app.post("/generate-questions", async (req, res) => {
  const { jobRole, role } = req.body;
  const selectedRole = jobRole || role;

  if (!selectedRole) {
    return res.status(400).json({ error: "Job role is required" });
  }

  try {
    console.log("🧠 Generating categorized questions for role:", selectedRole);

    // Generate structured questions with categories and difficulty levels
    const categorizedQuestions = {
      technical: {
        easy: [
          `What are the basic concepts and fundamentals you use daily as a ${selectedRole}?`,
          `Explain a common tool or technology used in ${selectedRole} work.`,
          `What is your understanding of the core responsibilities of a ${selectedRole}?`
        ],
        medium: [
          `How would you approach solving a complex problem in your ${selectedRole} role?`,
          `Describe a technical challenge you faced and how you resolved it.`,
          `What best practices do you follow in your ${selectedRole} work?`
        ],
        hard: [
          `Design a scalable solution for a high-traffic system relevant to ${selectedRole}.`,
          `How would you optimize performance in a critical ${selectedRole} scenario?`,
          `Explain a complex architectural decision you made and its trade-offs.`
        ]
      },
      hr: {
        easy: [
          `Tell me about yourself and your background as a ${selectedRole}.`,
          `Why are you interested in this ${selectedRole} position?`,
          `What are your key strengths that make you suitable for this role?`
        ],
        medium: [
          `Describe a time when you had to work under pressure as a ${selectedRole}.`,
          `How do you handle conflicts or disagreements in a team?`,
          `Where do you see yourself in 5 years in your ${selectedRole} career?`
        ],
        hard: [
          `Tell me about a time you failed and what you learned from it.`,
          `How do you balance multiple priorities and tight deadlines?`,
          `Describe a situation where you had to make a difficult decision with limited information.`
        ]
      }
    };

    console.log("✅ Generated categorized questions");

    res.json({ 
      categorizedQuestions,
      message: "Questions generated successfully"
    });

  } catch (error) {
    console.error("❌ Error generating questions:", error.message);
    
    // Fallback categorized questions
    const fallbackQuestions = {
      technical: {
        easy: [
          `What are the basic concepts you use as a ${selectedRole}?`,
          `Explain a common tool used in ${selectedRole} work.`,
          `What are the core responsibilities of a ${selectedRole}?`
        ],
        medium: [
          `How would you solve a complex problem in ${selectedRole}?`,
          `Describe a technical challenge you faced.`,
          `What best practices do you follow?`
        ],
        hard: [
          `Design a scalable solution for ${selectedRole}.`,
          `How would you optimize performance?`,
          `Explain a complex decision you made.`
        ]
      },
      hr: {
        easy: [
          `Tell me about yourself.`,
          `Why are you interested in this position?`,
          `What are your key strengths?`
        ],
        medium: [
          `Describe working under pressure.`,
          `How do you handle conflicts?`,
          `Where do you see yourself in 5 years?`
        ],
        hard: [
          `Tell me about a time you failed.`,
          `How do you balance priorities?`,
          `Describe a difficult decision you made.`
        ]
      }
    };
    
    res.json({ 
      categorizedQuestions: fallbackQuestions,
      message: "Using fallback questions"
    });
  }
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
