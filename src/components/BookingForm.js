// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    time: '',
    passengers: '1'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button');
    button.disabled = true;
    button.textContent = 'Booking...';
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Booking confirmed!\nPickup: ${formData.pickup}\nDestination: ${formData.destination}\nTime: ${formData.time}\nPassengers: ${formData.passengers}`);
      setFormData({
        pickup: '',
        destination: '',
        time: '',
        passengers: '1'
      });
    } catch (error) {
      alert('Booking failed. Please try again.');
    } finally {
      button.disabled = false;
      button.textContent = 'Book Auto';
    }
  };

  return (
    <section className="booking-form">
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickup">Pickup Location</label>
          <input
            type="text"
            id="pickup"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Pickup Time</label>
          <input
            type="datetime-local"
            id="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Number of Passengers</label>
          <select
            id="passengers"
            value={formData.passengers}
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button type="submit">Book Auto</button>
      </form>
    </section>
  );
};

export default BookingForm;