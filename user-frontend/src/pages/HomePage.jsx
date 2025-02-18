import "../css/HomePage.css";

import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import MastersIcon from "@mui/icons-material/Person";
import React from "react";
import ReviewsIcon from "@mui/icons-material/Comment";
import { useSettingContext } from "../services/SettingService";

const HomePage = () => {
  const { settings } = useSettingContext();

  return (
    <Box
      sx={{
        backgroundColor: settings.backgroundColor || "#f9f9f9",
        minHeight: "100vh",
        p: 5,
        textAlign: "center",
        color: settings.primaryColor || "#000",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Добро пожаловать!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Вы на сайте: <strong>{settings.siteName || "MySite"}</strong>
      </Typography>

      <nav className="home-nav">
        <Link to="/reviews" className="home-card">
          <ReviewsIcon className="home-icon" />
          <span className="home-card-text">Отзывы</span>
        </Link>
        <Link to="/masters" className="home-card">
          <MastersIcon className="home-icon" />
          <span className="home-card-text">Мастера</span>
        </Link>
      </nav>
    </Box>
  );
};

export default HomePage;
