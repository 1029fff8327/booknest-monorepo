import "../css/CustomerReviews.css";

import React, { useEffect, useState } from "react";
import { createReview, fetchReviews } from "../services/review.service";

import Rating from "@mui/material/Rating"; // Импорт компонента для звездочек
import ReviewForm from "../components/ReviewForm";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  const handleReviewAdded = (newReview) => {
    createReview(newReview).then((createdReview) => {
      setReviews((prevReviews) => [...prevReviews, createdReview]);
    });
  };

  return (
    <div className="customer-reviews-fullscreen">
      <ReviewForm onReviewAdded={handleReviewAdded} />
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
            <Rating value={review.rating} readOnly />{" "}
            {/* Звезды вместо текста */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
