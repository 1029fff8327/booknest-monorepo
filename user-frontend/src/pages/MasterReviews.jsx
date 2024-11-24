import {
  Box,
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

import ReviewForm from "../components/ReviewForm";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";

const MasterReviews = () => {
  const { masterId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [master, setMaster] = useState(null);

  useEffect(() => {
    const fetchMasterAndReviews = async () => {
      try {
        // Получаем данные мастера
        const masterResponse = await axios.get(`/masters/${masterId}`);
        setMaster(masterResponse.data);

        // Получаем отзывы, связанные с мастером
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
      // Добавляем отзыв для конкретного мастера
      const response = await createReviewForMaster(masterId, newReview);
      setReviews((prevReviews) => [...prevReviews, response]);
    } catch (error) {
      console.error("Ошибка при добавлении отзыва:", error);
    }
  };

  if (!master) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5">Загрузка...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Отзывы о {master.name}
      </Typography>
      <ReviewForm onReviewAdded={handleReviewAdded} />{" "}
      {/* Форма для добавления отзыва */}
      <List>
        {reviews.map((review) => (
          <React.Fragment key={review.id}>
            <ListItem>
              <Box>
                <Typography variant="h6">{review.name}</Typography>
                <Typography variant="body2">{review.comment}</Typography>
                <Typography variant="body2">
                  <Rating value={review.rating} readOnly />{" "}
                  {/* Рейтинг со звездами */}
                </Typography>
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
