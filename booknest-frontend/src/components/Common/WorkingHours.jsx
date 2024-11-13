import { Box, TextField, Typography } from "@mui/material";

import React from "react";
import { useTranslation } from "react-i18next";

const WorkingHours = ({ workingHours, onWorkingHoursChange }) => {
  const { t } = useTranslation();

  console.log("Rendering WorkingHours with:", workingHours);

  return (
    <Box>
      <Typography variant="h6">{t("Working Hours")}</Typography>
      <Typography variant="body2">
        {t("Specify the working hours of your business.")}
      </Typography>
      <TextField
        label={t("Start Time")}
        type="time"
        value={workingHours.start}
        onChange={(e) =>
          onWorkingHoursChange({ ...workingHours, start: e.target.value })
        }
        InputLabelProps={{ shrink: true }}
        inputProps={{ step: 300 }}
        fullWidth
      />
      <TextField
        label={t("End Time")}
        type="time"
        value={workingHours.end}
        onChange={(e) =>
          onWorkingHoursChange({ ...workingHours, end: e.target.value })
        }
        InputLabelProps={{ shrink: true }}
        inputProps={{ step: 300 }}
        fullWidth
      />
    </Box>
  );
};

export default WorkingHours;
