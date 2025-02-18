import "../css/CustomerReviews.css";

import React, { useEffect, useState } from "react";
import { createReview, fetchReviews } from "../services/review.service";

import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import ReviewForm from "../components/ReviewForm";
import { useNavigate } from "react-router-dom";
import { useSettingContext } from "../services/SettingService";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { settings } = useSettingContext();

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  const handleReviewAdded = (newReview) => {
    createReview(newReview).then((createdReview) => {
      setReviews((prevReviews) => [...prevReviews, createdReview]);
    });
  };

  return (
    <div
      style={{
        backgroundColor: settings.backgroundColor || "#f9f9f9",
        color: settings.primaryColor || "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="customer-reviews-fullscreen"
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: settings.primaryColor || "#000",
          color: "#fff",
          "&:hover": { backgroundColor: "#333" },
          marginBottom: "20px",
        }}
        onClick={() => navigate("/")}
      >
        На главную
      </Button>

      <h2>{settings.siteName || "Название сайта"} — Отзывы</h2>

      <ReviewForm onReviewAdded={handleReviewAdded} />

      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
            <Rating value={review.rating} readOnly />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
