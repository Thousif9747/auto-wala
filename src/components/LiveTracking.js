// src/components/LiveTracking.js
import React, { useEffect } from 'react';
import './LiveTracking.css';

const LiveTracking = () => {
    useEffect(() => {
        const statusItems = document.querySelectorAll('.status-item');
        let currentStatus = 0;

        const interval = setInterval(() => {
            statusItems.forEach(item => item.classList.remove('active'));
            statusItems[currentStatus].classList.add('active');
            currentStatus = (currentStatus + 1) % statusItems.length;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="live-tracking" className="tracking-section">
            <div className="tracking-container">
                <h2>Live Tracking</h2>
                <div className="tracking-interface">
                    <div className="tracking-map" id="tracking-map"></div>
                    <div className="tracking-info">
                        <div className="driver-details">
                            <img src="driver-avatar.png" alt="Driver" className="driver-avatar" />
                            <div className="driver-info">
                                <h3>Your Driver</h3>
                                <p>S.FAKRUDDIN</p>
                                <p>Auto: AP 23 AW 9747</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="trip-status">
                            <div className="status-item active">
                                <i className="fas fa-check-circle"></i>
                                <span>Driver Assigned</span>
                            </div>
                            <div className="status-item">
                                <i className="fas fa-car"></i>
                                <span>On the Way</span>
                            </div>
                            <div className="status-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Reached Destination</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveTracking;