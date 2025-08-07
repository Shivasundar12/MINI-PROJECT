import React, { useState } from 'react';
import '../styles/InterviewForm.css';

const InterviewForm = () => {
  const [jobRole, setJobRole] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQuestions([]);

    try {
      const response = await fetch('http://localhost:5000/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobRole }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }

      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="interview-container" id="interview">
      <h2>Interview Question Generator</h2>
      <form onSubmit={handleSubmit} className="interview-form">
        <input
          type="text"
          placeholder="Enter Job Role (e.g. Frontend Developer)"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          required
        />
        <button type="submit">Generate Questions</button>
      </form>

      {loading && <p className="loading">⚙️ Generating questions...</p>}

      {questions.length > 0 && (
        <div className="questions-list animate-slideIn">
          <h3>AI-Generated Questions:</h3>
          <ul>
            {questions.map((q, index) => (
              <li key={index} className="question-item">
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InterviewForm;
