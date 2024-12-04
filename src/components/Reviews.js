// src/components/Reviews.js
import React from 'react';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'Thousif',
            rating: 5,
            text: 'Great service! Driver was on time and very professional.',
            type: 'Regular Customer',
            image: 'user1.jpg'
        },
        // Add more reviews as needed
    ];

    return (
        <section id="reviews" className="reviews">
            <div className="reviews-container">
                <h2>Customer Reviews</h2>
                <div className="reviews-slider">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="rating">{'★'.repeat(review.rating)}</div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer">
                                <div className="reviewer-info">
                                    <h4>{review.name}</h4>
                                    <p>{review.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;