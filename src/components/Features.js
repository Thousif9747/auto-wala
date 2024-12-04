// src/components/Features.js

import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Safe Rides</h3>
          <p>Verified drivers and real-time tracking</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-tags"></i>
          <h3>Best Prices</h3>
          <p>Competitive rates and no hidden charges</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>Round the clock customer service</p>
        </div>
      </div>
    </section>
  );
};

export default Features;