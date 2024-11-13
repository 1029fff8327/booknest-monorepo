import React, { useContext, useEffect, useState } from "react";

import { BookingContext } from "../../context/BookingContext";
import axios from "../../utils/axios";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BookingDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const { fetchBookingById } = useContext(BookingContext);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const bookingData = await fetchBookingById(id);
        setBooking(bookingData);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>{t("Loading...")}</div>;
  }

  return (
    <div>
      <h1>{t("Booking Details")}</h1>
      <p>
        {t("Name")}: {booking.name}
      </p>
      <p>
        {t("Email")}: {booking.email}
      </p>
      <p>
        {t("Service")}: {booking.service}
      </p>
      <p>
        {t("Date")}: {booking.date}
      </p>
      <p>
        {t("Time")}: {booking.time}
      </p>
    </div>
  );
};

export default BookingDetails;
