import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../styles/Login.css";

const Login = ({ setUser }) => {
  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const user = jwtDecode(token);
    console.log("User Info:", user);

    setUser(user); // store logged-in user
    window.location.href = "/home"; // redirect to landing page
  };

  const handleError = () => {
    console.log("Login Failed");
    alert("Google Login Failed. Please try again.");
  };

  return (
    <div className="login-container">
      <h2>Login to InterviewPrep AI</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default Login;
