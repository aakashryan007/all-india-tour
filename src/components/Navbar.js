import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Auth context for user state
import allIndiaTourLogo from "../assets/all-india-tour-logo.png";
import Auth from "./Auth"; // ✅ Import modal for login/signup
import "../styles/Navbar.css"; // ✅ Import CSS for smooth transitions

const Navbar = () => {
  const { user, logout } = useAuth(); // ✅ Get user state & logout function
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Navbar with Transparent Glass Effect */}
      <nav className="navbar">
        {/* Left: Hamburger + Logo */}
        <div className="navbar-left">
          {/* Hamburger Menu */}
          <button onClick={() => setMobileMenuOpen(true)} className="hamburger-menu">
            ☰
          </button>

          {/* Logo */}
          <Link to="/" className="logo-container">
            <img src={allIndiaTourLogo} alt="All India Tour" className="logo" />
            <span className="logo-text">All India Tour</span>
          </Link>
        </div>

        {/* ✅ Navbar Links & Small Search Bar (Moved to Right) */}
        <div className="navbar-right">
          {/* Small Universal Search Bar */}
          <input
            type="text"
            className="small-search-bar"
            placeholder="Search..."
          />

          {/* Navbar Links */}
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/destinations" className="nav-link">Destinations</Link>
          <Link to="/blogs" className="nav-link">Blogs</Link>

          {/* ✅ Authentication Buttons */}
          <div className="auth-section">
            {user ? (
              <div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="profile-btn">
                  {user.displayName || "Profile"} ▼
                </button>

                {/* Profile Dropdown */}
                {menuOpen && (
                  <div className="profile-dropdown">
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <button onClick={logout} className="dropdown-item logout-btn">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => setShowAuth(true)} className="auth-btn">Signup/Login</button>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Hamburger Menu Popup */}
      {mobileMenuOpen && (
        <div className="hamburger-popup">
          <div className="close-menu">
            <button onClick={() => setMobileMenuOpen(false)}>✖</button>
          </div>
          <Link to="/travel-for-life" className="menu-item">Travel for Life</Link>
          <Link to="/hotels" className="menu-item">Hotels</Link>
          <Link to="/restaurants" className="menu-item">Restaurants</Link>
          <Link to="/about" className="menu-item">About Us</Link>
          <Link to="/contact" className="menu-item">Contact Us</Link>
          <Link to="/faqs" className="menu-item">FAQs</Link>
          <Link to="/privacy-policy" className="menu-item">Privacy Policy</Link>
          <Link to="/terms-of-use" className="menu-item">Terms of Use</Link>

          {/* ✅ Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-x-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      )}

      {/* ✅ Signup/Login Modal */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
