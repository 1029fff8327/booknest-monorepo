import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { createBooking } from "../services/BookingService";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateBooking = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const master = location.state?.master || {};

  // Начальные значения теперь пустые строки
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [conflictDialogOpen, setConflictDialogOpen] = useState(false);
  const [conflictMessage, setConflictMessage] = useState("");

  const handleCreateBooking = async () => {
    try {
      const newBooking = {
        name,
        email,
        service,
        masterName: master.name,
        date,
        time,
      };

      await createBooking(newBooking);

      // Сброс полей формы после успешного создания
      setName("");
      setEmail("");
      setService("");
      setDate("");
      setTime("");
    } catch (error) {
      setConflictMessage(
        t("Ошибка при создании бронирования. Попробуйте снова.")
      );
      setConflictDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setConflictDialogOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          {t("Create a Booking with")} {master.name}
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
            "& .MuiButton-root": { mt: 3 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            label={t("Name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            label={t("Email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            select
            label={t("Select a Service")}
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
            label={t("Date")}
            type="date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            required
            label={t("Time")}
            type="time"
            InputLabelProps={{ shrink: true }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCreateBooking}
          >
            {t("Create Booking")}
          </Button>
        </Box>
      </Paper>
      {conflictDialogOpen && (
        // eslint-disable-next-line react/jsx-no-undef
        <BookingConflictDialog
          open={conflictDialogOpen}
          onClose={handleCloseDialog}
          message={conflictMessage}
        />
      )}
    </Container>
  );
};

export default CreateBooking;
