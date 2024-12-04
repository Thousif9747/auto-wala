// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>7288066502</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>support@autowala.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>MELAPUR, HINDUPUR, ANDHRA PRADESH,INDIA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;