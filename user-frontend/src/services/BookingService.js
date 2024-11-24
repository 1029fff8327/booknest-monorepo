import axios from "../utils/axios";

export const createBooking = async (newBooking) => {
  try {
    const response = await axios.post("/bookings/Create", newBooking);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании бронирования:", error);
    throw error;
  }
};
