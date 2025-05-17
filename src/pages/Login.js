import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import logo from "../assets/all-india-tour-logo.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", mobile: "" });
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
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
      alert("Login Successful!");
      navigate("/");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-right">
        {/* Logo at the Top */}
        <img src={logo} className="auth-logo" alt="Logo" />


        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        {/* Forgot Password Link */}
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <button className="auth-btn" onClick={loginWithEmail}>Login</button>

        {/* Divider with "OR" */}
        <div className="divider"><span>OR</span></div>

        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <button className="auth-btn secondary" onClick={sendOtp}>Send OTP</button>
        
        {isOtpSent && (
          <>
            <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
            <button className="auth-btn" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
