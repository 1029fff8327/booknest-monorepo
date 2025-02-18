import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BookingCreate from "./components/BookingCreate";
import CustomerReviews from "./pages/CustomerReviews";
import HomePage from "./pages/HomePage";
import MasterReviews from "./pages/MasterReviews";
import MastersPage from "./pages/MastersPage";
import React from "react";
import { SettingProvider } from "./services/SettingService";
import SiteTitle from "./components/SiteTitle"; // Подключаем компонент

// Подключаем страницы:

const App = () => {
  return (
    <SettingProvider>
      <Router>
        <SiteTitle />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<CustomerReviews />} />
          <Route path="/masters" element={<MastersPage />} />
          <Route path="/booking" element={<BookingCreate />} />
          <Route
            path="/masters/:masterId/reviews"
            element={<MasterReviews />}
          />
        </Routes>
      </Router>
    </SettingProvider>
  );
};

export default App;
