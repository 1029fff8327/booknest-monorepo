import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";

import BookingConflictDialog from "../Booking/BookingConflictDialog";
import { BookingContext } from "../../context/BookingContext";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BookingPage = () => {
  const { t } = useTranslation();
  const { bookings, createBooking } = useContext(BookingContext);
  const location = useLocation();
  const master = location.state?.master || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [conflictDialogOpen, setConflictDialogOpen] = useState(false);
  const [conflictMessage, setConflictMessage] = useState("");

  const handleBooking = async () => {
    const existingBooking = bookings.find(
      (booking) => booking.date === date && booking.time === time
    );

    if (existingBooking) {
      setConflictMessage(
        t(
          "Выбранное вами время уже забронировано. Пожалуйста, выберите другое время."
        )
      );
      setConflictDialogOpen(true);
    } else {
      try {
        await createBooking({
          name,
          email,
          service,
          masterName: master.name,
          date,
          time,
        });
        setOpenSnackbar(true);
        setName("");
        setEmail("");
        setService("");
        setDate("");
        setTime("");
      } catch (error) {
        console.error("Ошибка при создании бронирования:", error);
        alert(t("Booking failed."));
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseDialog = () => {
    setConflictDialogOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          {t("Записаться к")} {master.name}
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            label={t("Имя")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            label={t("Email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            select
            label={t("Выберите услугу")}
            value={service}
            onChange={(e) => setService(e.target.value)}
            fullWidth
            margin="normal"
          >
            {master.services?.map((serviceOption, index) => (
              <MenuItem key={index} value={serviceOption}>
                {serviceOption}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            label={t("Дата")}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            label={t("Время")}
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            fullWidth
            margin="normal"
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
            fullWidth
            onClick={handleBooking}
          >
            {t("Записаться")}
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={t("Бронирование успешно.")}
      />

      <BookingConflictDialog
        open={conflictDialogOpen}
        onClose={handleCloseDialog}
        message={conflictMessage}
      />
    </Container>
  );
};

export default BookingPage;
