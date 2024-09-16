import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/SCR Network CORE LOGO.png";
import phoneIcon from "../../assets/phone-icon.png";
import { Link } from 'react-router-dom';

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
            <img src={logo} alt="IT Services Logo" className="logo-image" />
          </a>
        </div>
        <button className="hamburger-menu" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/client_area" onClick={closeMenu}>Client Area</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className="info-bar">
        <div className="info-text">Your very own IT department, Anytime, Anywhere</div>
        <div className="info-phone">
          <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
          <a href="tel:+1234567890" className="phone-number">(731) 213-2255</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;