import React, { createContext, useContext, useState } from "react";

import { BookingContext } from "../../context/BookingContext";
import axios from "../../utils/axios";

export const UpdateDeleteBookingContext = createContext();

export const UpdateDeleteBookingProvider = ({ children }) => {
  const { bookings, setBookings } = useContext(BookingContext);
  const [loading, setLoading] = useState(false);

  const updateBooking = async (id, updatedBooking) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `/bookings/Update-by-id${id}`,
        updatedBooking
      );
      setBookings(
        bookings.map((booking) => (booking.id === id ? response.data : booking))
      );
    } catch (error) {
      console.error("Error updating booking:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/bookings/Delete-by-id${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UpdateDeleteBookingContext.Provider
      value={{
        updateBooking,
        deleteBooking,
        loading,
      }}
    >
      {children}
    </UpdateDeleteBookingContext.Provider>
  );
};
