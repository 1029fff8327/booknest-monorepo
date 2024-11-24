import "../css/HomePage.css";

import { Link } from "react-router-dom";
import MastersIcon from "@mui/icons-material/Person"; // Иконка для Мастеров
import React from "react";
import ReviewsIcon from "@mui/icons-material/Comment"; // Иконка для Отзывов

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Добро пожаловать!</h1>
      <p>Выберите, куда вы хотите перейти:</p>
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
    </div>
  );
};

export default HomePage;
