import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const OTPLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
      setConfirmation(confirmationResult);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-blue-900">Login with OTP</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="mt-4">
          {!confirmation ? (
            <>
              <input type="text" placeholder="Enter Phone Number" className="w-full p-2 border rounded mt-2"
                value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <button className="w-full bg-blue-900 text-white p-2 mt-4 rounded" onClick={sendOTP}>Send OTP</button>
            </>
          ) : (
            <>
              <input type="text" placeholder="Enter OTP" className="w-full p-2 border rounded mt-2"
                value={otp} onChange={(e) => setOtp(e.target.value)} required />
              <button className="w-full bg-green-600 text-white p-2 mt-4 rounded" onClick={verifyOTP}>Verify OTP</button>
            </>
          )}
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default OTPLogin;
