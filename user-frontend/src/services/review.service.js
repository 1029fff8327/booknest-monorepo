import axios from "axios";

const API_URL = "http://localhost:3000/reviews";

export const fetchReviews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createReview = async (review) => {
  const response = await axios.post(API_URL, review); // Создаёт отзыв без masterId
  return response.data;
};

export const fetchReviewsByMasterId = async (masterId) => {
  const response = await axios.get(`${API_URL}/master/${masterId}`);
  return response.data;
};

export const createReviewForMaster = async (masterId, review) => {
  const response = await axios.post(`${API_URL}`, { ...review, masterId });
  return response.data;
};
