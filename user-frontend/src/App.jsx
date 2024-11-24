import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BookingCreate from "./components/BookingCreate";
import CustomerReviews from "./pages/CustomerReviews";
import HomePage from "./pages/HomePage";
import MasterReviews from "./pages/MasterReviews";
import MastersPage from "./pages/MastersPage";
import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/booking" element={<BookingCreate />} />
        <Route path="/masters/:masterId/reviews" element={<MasterReviews />} />
      </Routes>
    </Router>
  );
};

export default App;
