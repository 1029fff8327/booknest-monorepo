import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "../../utils/axios";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CustomerReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false); // Состояние для Snackbar

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleAddReview = async () => {
    try {
      const newReview = { name, rating, comment };
      const response = await axios.post("/reviews", newReview);
      setReviews([...reviews, response.data]);
      setOpenSnackbar(true); // Показываем Snackbar после успешного добавления отзыва
      setName("");
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Закрываем Snackbar
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("Customer Reviews")}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t("Leave a Review")}
              </Typography>
              <TextField
                label={t("Your Name")}
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Rating
                name="rating"
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                sx={{ mb: 2 }}
              />
              <TextField
                label={t("Your Review")}
                fullWidth
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkgray",
                  },
                }}
                onClick={handleAddReview}
              >
                {t("Submit Review")}
              </Button>
            </Paper>
          </Grid>
          {reviews.map((review) => (
            <Grid item xs={12} key={review.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{review.name}</Typography>
                  <Rating name="read-only" value={review.rating} readOnly />
                  <Typography variant="body1">{review.comment}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={t("Review added successfully.")}
      />
    </Container>
  );
};

export default CustomerReviews;
