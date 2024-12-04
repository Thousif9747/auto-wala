// src/components/Header.js
import React from 'react';
import './Header.css'; // Create a separate CSS file for styles
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <div className="auto-logo">
            <div className="auto-rickshaw"></div>
            <div className="wheel front"></div>
            <div className="wheel back"></div>
          </div>
          <div className="logo">Auto Wala</div>
        </div>
        <ul className="nav-links">
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/profile'}><li>Profile</li></Link>
          <Link to={'/features'}><li>Features</li></Link>
          <Link to={'/driver'}><li>Driver</li></Link>
          <Link to={'contacts'}><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;