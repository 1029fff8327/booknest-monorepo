// pages/MastersPage.jsx

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useSettingContext } from "../services/SettingService";

function MastersPage() {
  const navigate = useNavigate();
  const [masters, setMasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { settings } = useSettingContext();

  useEffect(() => {
    const fetchMasters = async () => {
      try {
        const response = await axios.get("/masters");
        setMasters(response.data);
      } catch (error) {
        console.error("Ошибка при получении мастеров:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMasters();
  }, []);

  const handleBookingClick = (master) => {
    navigate("/booking", { state: { master } });
  };

  const handleReviewsClick = (master) => {
    navigate(`/masters/${master.id}/reviews`);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: settings.backgroundColor || "#f9f9f9",
        color: settings.primaryColor || "#000",
        p: 3,
        minHeight: "100vh",
      }}
    >
      {/* Кнопка "На главную" */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: settings.primaryColor || "#000",
          color: "#fff",
          mb: 2,
          "&:hover": { backgroundColor: "#333" },
        }}
        onClick={() => navigate("/")}
      >
        На главную
      </Button>

      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Наши Мастера
      </Typography>

      {masters.length === 0 ? (
        <Typography variant="h6" textAlign="center">
          Мастера отсутствуют
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {masters.map((master) => (
            <Grid item xs={12} sm={6} md={3} key={master.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {master.photo ? (
                  <CardMedia
                    component="img"
                    height="300"
                    image={master.photo}
                    alt={master.name}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f0f0f0",
                      color: "#555",
                      fontSize: "48px",
                      fontWeight: "bold",
                    }}
                  >
                    {master.name ? master.name[0].toUpperCase() : "?"}
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {master.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 1 }}
                  >
                    {master.description || "Описание отсутствует"}
                  </Typography>
                  {master.phone && (
                    <Typography variant="body2" color="textSecondary">
                      <strong>Телефон:</strong> {master.phone}
                    </Typography>
                  )}
                  {master.email && (
                    <Typography variant="body2" color="textSecondary">
                      <strong>Email:</strong> {master.email}
                    </Typography>
                  )}
                  {master.services && master.services.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontWeight: "bold" }}
                      >
                        Услуги:
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {master.services.join(", ")}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
                <Box
                  sx={{
                    p: 2,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: settings.primaryColor || "#000",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                    onClick={() => handleBookingClick(master)}
                  >
                    Записаться
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: settings.primaryColor || "#000",
                      color: settings.primaryColor || "#000",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                        borderColor: "#333",
                      },
                    }}
                    onClick={() => handleReviewsClick(master)}
                  >
                    Отзывы
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default MastersPage;
