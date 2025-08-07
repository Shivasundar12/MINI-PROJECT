import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>InterviewPrep AI</h1>
      <nav>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
