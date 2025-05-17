import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import OTPLogin from "./pages/OTPLogin";
import "./firebaseConfig"; // ✅ Ensure this file exists inside `src/`
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-login" element={<OTPLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
      </Routes>
    </>
  );
}

export default App;
