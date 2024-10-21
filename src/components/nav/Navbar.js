import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/SCR Network CORE LOGO.png";
import phoneIcon from "../../assets/phone-icon.png";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="IT Services Logo" className="homepage-link" />
          </a>
        </div>
        <button className="hamburger-menu" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/clients" onClick={closeMenu}>Client Area</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>
      <div className="info-bar">
        <div className="info-text">Your very own IT department!</div>
        <div className="info-phone">

          <a href="https://www.facebook.com/scrnetwork.SCR" target="_blank" rel="noopener noreferrer"> <FaFacebookF className="social-icon" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn className="social-icon" /></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> <FaGoogle className="social-icon" /> </a>
          <p className="phone-number">(731) 213-2255</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
