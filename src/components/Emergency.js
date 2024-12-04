// src/components/Emergency.js
import React from 'react';
import './Emergency.css';

const Emergency = () => {
  const handleSOS = () => {
    alert('Emergency services have been notified. Stay calm, help is on the way.');
  };

  const handleHelpline = () => {
    window.location.href = 'tel:1800-123-4567';
  };

  return (
    <section id="emergency" className="emergency-section">
      <div className="emergency-container">
        <h2>Emergency Contacts</h2>
        <div className="emergency-buttons">
          <button className="sos-btn" onClick={handleSOS}>
            <i className="fas fa-exclamation-triangle"></i>
            SOS
          </button>
          <button className="helpline-btn" onClick={handleHelpline}>
            <i className="fas fa-phone"></i>
            24/7 Helpline
          </button>
        </div>
        <div className="emergency-contacts">
          <div className="contact-card">
            <i className="fas fa-ambulance"></i>
            <h3>Ambulance</h3>
            <p>108</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-police-box"></i>
            <h3>Police</h3>
            <p>100</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-user-shield"></i>
            <h3>Customer Support</h3>
            <p>1800-123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;