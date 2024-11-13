import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BookingContext } from "../../context/BookingContext";
import DayBookingsModal from "./DayBookingsModal";
import styled from "@mui/material/styles/styled";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const CalendarContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

const CalendarHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1200px",
  marginBottom: theme.spacing(1),
}));

const DaysGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  flexGrow: 1,
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: theme.spacing(0.5),
  alignItems: "center",
}));

const DayBox = styled(Box)(({ theme, isBooked }) => ({
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isBooked ? theme.palette.action.hover : "transparent",
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
}));

const DayText = styled(Typography)(({ theme, isWeekend }) => ({
  color: isWeekend ? theme.palette.error.main : theme.palette.text.primary,
}));

const MonthCalendar = () => {
  const { t } = useTranslation(); // Используем useTranslation для переводов
  const { bookings } = useContext(BookingContext);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const emptyDays = Array.from(
    { length: (firstDayOfMonth + 6) % 7 },
    () => null
  );
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const days = [...emptyDays, ...daysArray];

  return (
    <CalendarContainer>
      <CalendarHeader>
        <IconButton onClick={handlePrevMonth}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h4" align="center">
          {new Date(currentYear, currentMonth).toLocaleString("ru", {
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <IconButton onClick={handleNextMonth}>
          <ArrowForwardIosIcon />
        </IconButton>
      </CalendarHeader>
      <DaysGrid>
        {daysOfWeek.map((day, index) => (
          <Typography
            key={index}
            align="center"
            variant="body2"
            sx={{ fontWeight: "bold" }}
          >
            {t(day)}
          </Typography>
        ))}
        {days.map((day, index) => (
          <DayBox
            key={index}
            isBooked={bookings.some((booking) => {
              const bookingDate = new Date(booking.date);
              return (
                bookingDate.getFullYear() === currentYear &&
                bookingDate.getMonth() === currentMonth &&
                bookingDate.getDate() === day
              );
            })}
            onClick={() => day && handleDayClick(day)}
          >
            <DayText
              variant="body2"
              isWeekend={index % 7 === 5 || index % 7 === 6}
            >
              {day}
            </DayText>
          </DayBox>
        ))}
      </DaysGrid>
      {selectedDate && (
        <DayBookingsModal
          selectedDate={selectedDate}
          bookings={bookings.filter((booking) => {
            const bookingDate = new Date(booking.date);
            return (
              bookingDate.getFullYear() === selectedDate.getFullYear() &&
              bookingDate.getMonth() === selectedDate.getMonth() &&
              bookingDate.getDate() === selectedDate.getDate()
            );
          })}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </CalendarContainer>
  );
};

export default MonthCalendar;
