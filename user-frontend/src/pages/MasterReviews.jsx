// pages/MasterReviews.jsx

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  createReviewForMaster,
  fetchReviewsByMasterId,
} from "../services/review.service";
import { useNavigate, useParams } from "react-router-dom";

import ReviewForm from "../components/ReviewForm";
import axios from "../utils/axios";
import { useSettingContext } from "../services/SettingService";

const MasterReviews = () => {
  const { masterId } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [master, setMaster] = useState(null);
  const { settings } = useSettingContext();

  useEffect(() => {
    const fetchMasterAndReviews = async () => {
      try {
        const masterResponse = await axios.get(`/masters/${masterId}`);
        setMaster(masterResponse.data);

        const reviewsResponse = await fetchReviewsByMasterId(masterId);
        setReviews(reviewsResponse);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchMasterAndReviews();
  }, [masterId]);

  const handleReviewAdded = async (newReview) => {
    try {
      const response = await createReviewForMaster(masterId, newReview);
      setReviews((prevReviews) => [...prevReviews, response]);
    } catch (error) {
      console.error("Ошибка при добавлении отзыва:", error);
    }
  };

  if (!master) {
    return (
      <Box
        sx={{
          backgroundColor: settings.backgroundColor || "#f9f9f9",
          color: settings.primaryColor || "#000",
          minHeight: "100vh",
          p: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Загрузка...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: settings.backgroundColor || "#f9f9f9",
        color: settings.primaryColor || "#000",
        minHeight: "100vh",
        p: 3,
      }}
    >
      {/* Верхняя панель с кнопкой "Вернуться к мастерам" */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: settings.primaryColor || "#000",
            color: "#fff",
            "&:hover": { backgroundColor: "#333" },
          }}
          onClick={() => navigate("/masters")}
        >
          Вернуться к мастерам
        </Button>
      </Box>

      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Отзывы о{" "}
        <span style={{ color: settings.primaryColor || "#000" }}>
          {master.name}
        </span>
      </Typography>

      {/* Форма добавления отзыва */}
      <ReviewForm onReviewAdded={handleReviewAdded} />

      {/* Список отзывов */}
      <List sx={{ mt: 3 }}>
        {reviews.map((review) => (
          <React.Fragment key={review.id}>
            <ListItem>
              <Box sx={{ width: "100%", textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {review.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {review.comment}
                </Typography>
                <Rating value={review.rating} readOnly sx={{ mt: 1 }} />
              </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default MasterReviews;
