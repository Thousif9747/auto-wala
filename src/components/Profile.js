// src/components/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="user-profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-info">
              <h2>THOUHID</h2>
              <p>Member since: January 2024</p>
              <div className="user-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-count">(4.8)</span>
              </div>
            </div>
          </div>
          <div className="profile-stats">
            <div className="stat-item">
              <i className="fas fa-route"></i>
              <h3>Total Rides</h3>
              <p>48</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-wallet"></i>
              <h3>Saved</h3>
              <p>₹2,450</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-medal"></i>
              <h3>Status</h3>
              <p>Gold Member</p>
            </div>
          </div>
        </div>
        <div className="ride-history">
          <h3>Recent Rides</h3>
          <div className="history-list">
            <div className="ride-entry">
              <div className="ride-date">
                <span className="date">15</span>
                <span className="month">Mar</span>
              </div>
              <div className="ride-details">
                <div className="route">
                  <span className="from">melapur cross</span>
                  <i className="fas fa-arrow-right"></i>
                  <span className="to">Railway Station</span>
                </div>
                <div className="ride-meta">
                  <span><i className="fas fa-clock"></i> 20 mins</span>
                  <span><i className="fas fa-rupee-sign"></i> 150</span>
                  <span className="status completed">Completed</span>
                </div>
              </div>
              <button className="view-details">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;