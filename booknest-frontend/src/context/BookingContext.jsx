import React, { createContext, useEffect, useState } from "react";

import axios from "../utils/axios";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("/bookings/Get-all");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const createBooking = async (newBooking) => {
    const existingBooking = bookings.find(
      (booking) =>
        booking.date === newBooking.date && booking.time === newBooking.time
    );

    if (existingBooking) {
      throw new Error("This time slot is already booked.");
    } else {
      try {
        const response = await axios.post("/bookings/Create", newBooking);
        setBookings([...bookings, response.data]);
      } catch (error) {
        console.error("Error creating booking:", error);
        throw error; // Прокидываем ошибку дальше
      }
    }
  };

  const updateBooking = async (id, updatedBooking) => {
    try {
      const response = await axios.put(
        `/bookings/Update-by-id/${id}`,
        updatedBooking
      );
      setBookings(
        bookings.map((booking) => (booking.id === id ? response.data : booking))
      );
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`/bookings/Delete-by-id/${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const fetchBookingById = async (id) => {
    try {
      const response = await axios.get(`/bookings/Get-by-id?${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching booking by ID:", error);
      throw error;
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        loading,
        fetchBookings,
        createBooking,
        updateBooking,
        deleteBooking,
        fetchBookingById,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
