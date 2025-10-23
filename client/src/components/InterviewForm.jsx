import React, { useState } from 'react';
import '../styles/InterviewForm.css';

const InterviewForm = () => {
  const [jobRole, setJobRole] = useState('');
  const [searchPosition, setSearchPosition] = useState('');
  const [categorizedQuestions, setCategorizedQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const handleStartPractice = async () => {
    if (!jobRole) {
      alert('Please enter a job role');
      return;
    }
    setLoading(true);
    setCategorizedQuestions(null);
    setShowQuestions(false);

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
      setCategorizedQuestions(data.categorizedQuestions || null);
      setShowQuestions(true);
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#2196F3';
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '✓';
      case 'medium': return '⚡';
      case 'hard': return '🔥';
      default: return '•';
    }
  };

  return (
    <div className="modern-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Ready to Ace Your Next Interview?</h1>
          <p className="hero-subtitle">
            AI mock interviews with personalized practice and real-time analytics - everything on <span className="brand-name">InterviewPrep</span>
          </p>
          
          <div className="practice-form">
            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Job Role</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Frontend Developer, Data Scientist"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  list="job-suggestions"
                />
                <datalist id="job-suggestions">
                  <option value="Frontend Developer" />
                  <option value="Backend Developer" />
                  <option value="Full Stack Developer" />
                  <option value="Data Scientist" />
                  <option value="Product Manager" />
                  <option value="UI/UX Designer" />
                  <option value="DevOps Engineer" />
                  <option value="Software Engineer" />
                  <option value="Machine Learning Engineer" />
                  <option value="Cloud Architect" />
                  <option value="Business Analyst" />
                  <option value="QA Engineer" />
                </datalist>
              </div>
              
              <div className="input-group">
                <label className="input-label">Position (Optional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Senior, Junior, Lead"
                  value={searchPosition}
                  onChange={(e) => setSearchPosition(e.target.value)}
                />
              </div>
              
              <button className="start-practice-btn" onClick={handleStartPractice} disabled={loading}>
                {loading ? 'Loading...' : 'START PRACTICE'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      {loading && (
        <div className="loading-section">
          <div className="loading-spinner"></div>
          <p className="loading-text">Generating your personalized interview questions...</p>
        </div>
      )}

      {showQuestions && categorizedQuestions && (
        <div className="categorized-questions animate-slideIn">
          {/* Technical Questions */}
          <div className="category-section">
            <h3 className="category-title">💻 Technical Questions</h3>
            
            {['easy', 'medium', 'hard'].map((difficulty) => (
              <div key={`tech-${difficulty}`} className="difficulty-section">
                <h4 className="difficulty-header" style={{ color: getDifficultyColor(difficulty) }}>
                  <span className="difficulty-icon">{getDifficultyIcon(difficulty)}</span>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
                </h4>
                <ul className="questions-list">
                  {categorizedQuestions.technical[difficulty].map((question, index) => (
                    <li key={index} className="question-item">
                      <span className="question-number">{index + 1}.</span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* HR Questions */}
          <div className="category-section">
            <h3 className="category-title">👥 HR / Behavioral Questions</h3>
            
            {['easy', 'medium', 'hard'].map((difficulty) => (
              <div key={`hr-${difficulty}`} className="difficulty-section">
                <h4 className="difficulty-header" style={{ color: getDifficultyColor(difficulty) }}>
                  <span className="difficulty-icon">{getDifficultyIcon(difficulty)}</span>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
                </h4>
                <ul className="questions-list">
                  {categorizedQuestions.hr[difficulty].map((question, index) => (
                    <li key={index} className="question-item">
                      <span className="question-number">{index + 1}.</span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewForm;
