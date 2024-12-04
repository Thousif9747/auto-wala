// src/components/DriverPartner.js
import React from 'react';
import './DriverPartner.css';

const DriverPartner = () => {
  return (
    <section id="driver-partner" className="driver-partner">
      <div className="partner-container">
        <div className="partner-content">
          <h2>Become a Driver Partner</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-money-bill-wave"></i>
              <h3>Earn More</h3>
              <p>Flexible working hours with competitive earnings</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-user-shield"></i>
              <h3>Insurance Coverage</h3>
              <p>Comprehensive insurance for peace of mind</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-chart-line"></i>
              <h3>Growth Opportunities</h3>
              <p>Regular incentives and performance rewards</p>
            </div>
          </div>
          <button className="partner-btn">Join as Driver</button>
        </div>
      </div>
    </section>
  );
};

export default DriverPartner;