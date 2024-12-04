
// src/components/DriverPortal.js
import React from 'react';
import './DriverPortal.css';

const DriverPortal = () => {
  return (
    <section id="driver-portal" className="driver-portal">
      <div className="portal-container">
        <div className="dashboard-header">
          <div className="driver-profile">
            <img src="driver-photo.jpg" alt="Driver Photo" className="driver-photo" />
            <div className="driver-info">
              <h2>Driver Dashboard</h2>
              <div className="driver-status online">
                <span className="status-dot"></span>
                Online
              </div>
            </div>
          </div>
          <div className="earnings-summary">
            <div className="earning-card">
              <h3>Today's Earnings</h3>
              <span className="amount">₹1,250</span>
            </div>
            <div className="earning-card">
              <h3>Total Rides</h3>
              <span className="amount">8</span>
            </div>
            <div className="earning-card">
              <h3>Rating</h3>
              <span className="amount">4.8 ★</span>
            </div>
          </div>
        </div>
        <div className="active-bookings">
          <h3>Current Booking</h3>
          <div className="booking-card">
            <div className="passenger-info">
              <img src="user-avatar.jpg" alt="Passenger" />
              <div className="passenger-details">
                <h4>THOUHID</h4>
                <span className="phone">+91 8074953890</span>
              </div>
            </div>
            <div className="ride-route">
              <div className="location pickup">
                <i className="fas fa-map-marker-alt"></i>
                <span>Railway road</span>
              </div>
              <div className="route-line"></div>
              <div className="location dropoff">
                <i className="fas fa-map-marker-alt"></i>
                <span>Melapur Cross</span>
              </div>
            </div>
            <div className="action-buttons">
              <button className="start-ride">Start Ride</button>
              <button className="cancel-ride">Cancel</button>
            </div>
          </div>
        </div>
        <div className="performance-analytics">
          <h3>Performance Overview</h3>
          <div className="analytics-grid">
            <div className="analytics-card">
              <canvas id="earningsChart"></canvas>
            </div>
            <div className="analytics-card">
              <canvas id="ridesChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverPortal;
