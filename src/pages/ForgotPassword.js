import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Reset Password</h2>
        <p>Enter your email to receive a password reset link</p>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="auth-btn" onClick={handleResetPassword}>Send Reset Link</button>
        <Link to="/login" className="back-link">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
