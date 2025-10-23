import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [interviewsOpen, setInterviewsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">InterviewPrep</span>
        </div>
        
        <div className="nav-links">
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setInterviewsOpen(true)}
            onMouseLeave={() => setInterviewsOpen(false)}
          >
            <a href="#interviews" className="nav-link">
              Interviews <span className="dropdown-arrow">▼</span>
            </a>
            {interviewsOpen && (
              <div className="dropdown-menu">
                <a href="#practice" className="dropdown-item">Practice Interview</a>
                <a href="#mock" className="dropdown-item">Mock Interview</a>
                <a href="#technical" className="dropdown-item">Technical Round</a>
                <a href="#hr" className="dropdown-item">HR Round</a>
              </div>
            )}
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setResumeOpen(true)}
            onMouseLeave={() => setResumeOpen(false)}
          >
            <a href="#resume" className="nav-link">
              Resume <span className="dropdown-arrow">▼</span>
            </a>
            {resumeOpen && (
              <div className="dropdown-menu">
                <a href="#builder" className="dropdown-item">Resume Builder</a>
                <a href="#review" className="dropdown-item">Resume Review</a>
                <a href="#templates" className="dropdown-item">Templates</a>
              </div>
            )}
          </div>

          <a href="#jobs" className="nav-link">Jobs</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
