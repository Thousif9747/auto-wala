// src/components/DownloadApp.js
import React from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <section id="download" className="download-app">
      <div className="download-container">
        <div className="download-content">
          <h2>Download Our Mobile App</h2>
          <p>Book rides faster with our mobile app</p>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <i className="fab fa-google-play"></i>
              <span>
                Get it on
                <strong>Google Play</strong>
              </span>
            </a>
            <a href="#" className="app-button">
              <i className="fab fa-apple"></i>
              <span>
                Download on
                <strong>App Store</strong>
              </span>
            </a>
          </div>
        </div>
        <div className="app-preview">
          <img src="app-preview.png" alt="Mobile App Preview" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;