import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", mobile: "" });
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    if (!formData.mobile) return alert("Enter mobile number");
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
    
    const confirmation = await signInWithPhoneNumber(auth, `+91${formData.mobile}`, window.recaptchaVerifier);
    setVerificationId(confirmation);
    setIsOtpSent(true);
    alert("OTP sent!");
  };

  const verifyOtp = async () => {
    try {
      await verificationId.confirm(otp);
      alert("OTP Verified! Proceeding to signup...");
      registerUser();
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected, login with your personal info</p>
        <Link to="/login"><button className="auth-btn">Sign In</button></Link>
      </div>

      <div className="auth-right">
        <h2>Create Account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          
          {isOtpSent ? (
            <>
              <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
              <button className="auth-btn" onClick={verifyOtp}>Verify OTP</button>
            </>
          ) : (
            <button className="auth-btn" onClick={sendOtp}>Send OTP</button>
          )}
        </form>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignUp;
