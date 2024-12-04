// src/components/Payment.js
import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [balance, setBalance] = useState(500);

  const addMoney = (amount) => {
    setBalance(balance + amount);
    alert(`Successfully added ₹${amount} to wallet`);
  };

  const handlePaymentSelection = (method) => {
    console.log(`Selected payment method: ${method}`);
  };

  return (
    <section id="payment" className="payment-section">
      <div className="payment-container">
        <h2>Payment Options</h2>
        <div className="wallet-card">
          <div className="wallet-balance">
            <h3>Auto Wala Wallet</h3>
            <div className="balance">
              <span className="currency">₹</span>
              <span className="amount">{balance}</span>
            </div>
            <button className="add-money-btn" onClick={() => addMoney(100)}>Add Money</button>
          </div>
        </div>
        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          <div className="payment-options">
            {['wallet', 'upi', 'card', 'cash'].map(method => (
              <div key={method} className="payment-option">
                <input type="radio" name="payment" id={method} onChange={() => handlePaymentSelection(method)} />
                <label htmlFor={method}>
                  <i className={`fas fa-${method === 'wallet' ? 'wallet' : method === 'upi' ? 'mobile-alt' : method === 'card' ? 'credit-card' : 'money-bill-wave'}`}></i>
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;