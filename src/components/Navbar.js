// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from "../assets/SCR Network CORE LOGO.png";
import phoneIcon from "../assets/phone-icon.png"; // Import the phone icon

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="IT Services Logo" className="logo-image" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Client Area</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="info-bar">
        <div className="info-text">Your very own IT department, Anytime, Anywhere</div>
        <div className="info-phone">
          <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
          <a href="tel:+1234567890" className="phone-number">(731) 213-2130</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
