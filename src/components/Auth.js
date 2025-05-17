import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebaseConfig"; // Firebase Auth Import
import "../styles/Auth.css";

const Auth = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [step, setStep] = useState(1); // Forgot Password Flow Step

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  // Function to send OTP
  const sendOTP = async () => {
    try {
      // Ensure phone number is in correct format
      if (!phone.startsWith("+")) {
        alert("Enter phone number in E.164 format (e.g., +91XXXXXXXXXX)");
        return;
      }
  
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
  
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setVerificationId(confirmation);
      setStep(2);
      alert("OTP Sent!");
    } catch (error) {
      alert("Error sending OTP: " + error.message);
    }
  };
  

  // Function to verify OTP
  const verifyOTP = async () => {
    try {
      if (!verificationId) return alert("Request OTP first!");
      await verificationId.confirm(otp);
      setStep(3); // Move to Password Reset Step
      alert("OTP Verified! Now set a new password.");
    } catch (error) {
      alert("Invalid OTP: " + error.message);
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-content">
        {/* Close Button */}
        <button className="close-auth-btn" onClick={onClose}>✖</button>

        {/* Welcome Message */}
        <h2>Welcome to All India Tour</h2>
        <p className="slogan">Explore. Experience. Enjoy.</p>

        {/* Conditional Titles */}
        <h3>
          {showForgotPassword
            ? step === 1
              ? "Forgot Password"
              : step === 2
              ? "Enter OTP"
              : "Reset Password"
            : isSignup
            ? "Sign Up"
            : "Login"}
        </h3>

        {/* Google Login (Not in Forgot Password) */}
        {!showForgotPassword && (
          <>
            <button className="google-btn">Continue with Google</button>
            <div className="divider">
              <span>OR</span>
            </div>
          </>
        )}

        {/* Forgot Password Steps */}
        {showForgotPassword ? (
          <>
            {step === 1 && (
              <>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button className="submit-btn" onClick={sendOTP}>Send OTP</button>
                <div id="recaptcha-container"></div>
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button className="submit-btn" onClick={verifyOTP}>Verify OTP</button>
              </>
            )}

            {step === 3 && (
              <>
                <input
                  type="password"
                  placeholder="Create New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input type="password" placeholder="Confirm New Password" />
                <button className="submit-btn" onClick={() => setShowForgotPassword(false)}>
                  Reset Password
                </button>
              </>
            )}

            <p className="toggle-auth" onClick={() => setShowForgotPassword(false)}>
              Back to Login
            </p>
          </>
        ) : (
          <>
            {/* Signup Form */}
            {isSignup ? (
              <>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email or Mobile Number" />
                <input type="password" placeholder="Create Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="submit-btn">Sign Up</button>
              </>
            ) : (
              <>
                {/* Login Form */}
                <input type="text" placeholder="Email or Mobile Number" />
                <input type="password" placeholder="Password" />
                <button className="submit-btn">Login</button>

                {/* Forgot Password Link */}
                <p className="forgot-password" onClick={() => setShowForgotPassword(true)}>
                  Forgot Password?
                </p>
              </>
            )}

            {/* Toggle Signup/Login */}
            <p className="toggle-auth" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Already have an account? Login" : "New here? Sign Up"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
