import React, { useEffect } from "react";

import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/dashboard");
    } else {
      console.error("Token not found in the URL.");
      navigate("/login");
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
