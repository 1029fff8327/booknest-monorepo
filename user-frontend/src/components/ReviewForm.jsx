import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ReviewForm = ({ onReviewAdded }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewAdded({ name, rating, comment });
    setName("");
    setRating(0);
    setComment("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "800px",
        margin: "0 auto 20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Оставить отзыв
      </Typography>
      <TextField
        id="name"
        label="Ваше имя"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
      />
      <Box display="flex" alignItems="center" gap="10px">
        <Typography>Рейтинг:</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
      </Box>
      <TextField
        id="comment"
        label="Комментарий"
        variant="outlined"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        Отправить отзыв
      </Button>
    </Box>
  );
};

export default ReviewForm;
