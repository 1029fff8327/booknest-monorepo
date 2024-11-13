// src/components/FeedbackForm.jsx

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import axios from "../../utils/axios";
import { useTranslation } from "react-i18next";

const FeedbackForm = () => {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/feedback", { feedback });
      alert(t("Feedback submitted successfully."));
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert(t("Failed to submit feedback."));
    }
  };

  return (
    <Box>
      <Typography variant="h6">{t("Submit Feedback")}</Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder={t("Enter your feedback")}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {t("Submit")}
      </Button>
    </Box>
  );
};

export default FeedbackForm;
