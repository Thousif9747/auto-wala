// src/components/Rewards.js
import React from 'react';
import './Rewards.css';

const Rewards = () => {
  return (
    <section id="rewards" className="rewards-section">
      <div className="rewards-container">
        <div className="rewards-header">
          <h2>Auto Wala Rewards</h2>
          <div className="points-card">
            <div className="points-info">
              <i className="fas fa-coins"></i>
              <div className="points-text">
                <h3>Your Points</h3>
                <span className="points-balance">2,500</span>
              </div>
            </div>
            <button className="redeem-btn">Redeem Points</button>
          </div>
        </div>
        <div className="rewards-grid">
          <div className="reward-card">
            <div className="reward-badge">HOT DEAL</div>
            <img src="reward-ride.png" alt="Free Ride" />
            <h3>Free Auto Ride</h3>
            <p>Get one free ride up to ₹100</p>
            <div className="points-required">
              <i className="fas fa-coins"></i>
              <span>1000 points</span>
            </div>
            <button className="claim-btn">Claim Reward</button>
          </div>
        </div>
        <div className="referral-section">
          <h3>Refer & Earn</h3>
          <div className="referral-card">
            <div className="referral-info">
              <i className="fas fa-gift"></i>
              <div>
                <h4>Invite Friends</h4>
                <p>Get 500 points for each referral</p>
              </div>
            </div>
            <div className="referral-code">
              <input type="text" value="JOHN500" readOnly aria-label="Referral code" placeholder="Your referral code" />
              <button className="copy-btn" title="Copy referral code">
                <i className="fas fa-copy"></i>
                <span className="sr-only">Copy referral code</span>
              </button>
            </div>
            <div className="share-buttons">
              <button className="share-btn whatsapp" title="Share on WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </button>
              <button className="share-btn telegram" title="Share on Telegram">
                <i className="fab fa-telegram"></i>
              </button>
              <button className="share-btn facebook" title="Share on Facebook">
                <i className="fab fa-facebook"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;