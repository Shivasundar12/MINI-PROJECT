import React from "react";
import { Link } from "react-router-dom";  // for routing
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">InterviewPrep AI</h1>
      <nav>
        <Link to="/">Home</Link>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <Link to="/login" className="login-btn">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
