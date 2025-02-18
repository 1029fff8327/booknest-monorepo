// components/BookingCreate.jsx

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
import { useLocation, useNavigate } from "react-router-dom";

import BookingConflictDialog from "./BookingConflictDialog";
import { createBooking } from "../services/BookingService";
import { useSettingContext } from "../services/SettingService";
import { useTranslation } from "react-i18next";

const CreateBooking = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const master = location.state?.master || {};
  const { settings } = useSettingContext();

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

      // Сбрасываем поля
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
    <Box
      sx={{
        backgroundColor: settings.backgroundColor || "#f9f9f9",
        color: settings.primaryColor || "#000",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Box sx={{ mb: 3 }}>
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

      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            backgroundColor: settings.secondaryColor || "#fff",
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
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
              fullWidth
              sx={{
                backgroundColor: settings.primaryColor || "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
              onClick={handleCreateBooking}
            >
              {t("Create Booking")}
            </Button>
          </Box>
        </Paper>
      </Container>

      {conflictDialogOpen && (
        <BookingConflictDialog
          open={conflictDialogOpen}
          onClose={handleCloseDialog}
          message={conflictMessage}
        />
      )}
    </Box>
  );
};

export default CreateBooking;
