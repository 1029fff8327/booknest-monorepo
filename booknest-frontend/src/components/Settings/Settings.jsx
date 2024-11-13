import "../../styles/Settings.css";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import ColorPicker from "../Common/ColorPicker";
import DateFormatSelect from "../Common/DateFormatSelect";
import Notifications from "../Common/Notifications";
import WorkingHours from "../Common/WorkingHours"; // Убедитесь, что импорт правильный
import axios from "../../utils/axios";
import { useSettingContext } from "../../context/SettingContext";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  const { settings, saveSettings, loading } = useSettingContext();
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");
  const [widgetTitle, setWidgetTitle] = useState("");
  const [enableNotifications, setEnableNotifications] = useState(false);
  const [enableBookingHistory, setEnableBookingHistory] = useState(false);
  const [logo, setLogo] = useState(null);
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [workingHours, setWorkingHours] = useState({
    start: "09:00",
    end: "17:00",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/settings");
        const {
          primaryColor,
          secondaryColor,
          widgetTitle,
          enableNotifications,
          enableBookingHistory,
          logo,
          dateFormat,
          workingHours,
        } = response.data;

        // Убедимся, что значения корректны
        setPrimaryColor(primaryColor || "#000000");
        setSecondaryColor(secondaryColor || "#ffffff");
        setWidgetTitle(widgetTitle || "");
        setEnableNotifications(enableNotifications || false);
        setEnableBookingHistory(enableBookingHistory || false);
        setLogo(logo || null);

        // Убедимся, что dateFormat содержит одно из допустимых значений
        const validDateFormats = ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"];
        setDateFormat(
          validDateFormats.includes(dateFormat) ? dateFormat : "DD/MM/YYYY"
        );

        // Установим стандартные рабочие часы, если данные отсутствуют
        setWorkingHours(workingHours || { start: "09:00", end: "17:00" });
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  const handleSaveSettings = async () => {
    try {
      const settings = {
        primaryColor,
        secondaryColor,
        widgetTitle,
        enableNotifications,
        enableBookingHistory,
        logo,
        dateFormat,
        workingHours,
      };

      // Дополнительная проверка перед отправкой данных
      if (!["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"].includes(dateFormat)) {
        throw new Error("Invalid date format");
      }

      await axios.post("/settings", settings);
      saveSettings(settings); // Сохранение настроек в контексте
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("Settings")}
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          "& .MuiFormControlLabel-root": { m: 1, width: "25ch" },
          "& .MuiGrid-item": { marginBottom: 2 },
          maxWidth: "600px",
        }}
        noValidate
        autoComplete="off"
      >
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <ColorPicker
                label="Primary Color"
                color={primaryColor}
                onChange={setPrimaryColor}
              />
            </Grid>
            <Grid item>
              <ColorPicker
                label="Secondary Color"
                color={secondaryColor}
                onChange={setSecondaryColor}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">{t("Widget Title")}</Typography>
              <Typography variant="body2">
                {t("Enter the title for your widget.")}
              </Typography>
              <TextField
                required
                label={t("Widget Title")}
                value={widgetTitle}
                onChange={(e) => setWidgetTitle(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item>
              <DateFormatSelect
                dateFormat={dateFormat}
                onDateFormatChange={setDateFormat}
              />
            </Grid>
            <Grid item>
              <WorkingHours
                workingHours={workingHours}
                onWorkingHoursChange={setWorkingHours}
              />
            </Grid>
            <Grid item>
              <Notifications
                enableNotifications={enableNotifications}
                onEnableNotificationsChange={setEnableNotifications}
                enableBookingHistory={enableBookingHistory}
                onEnableBookingHistoryChange={setEnableBookingHistory}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkgray",
                  },
                }}
                onClick={handleSaveSettings}
              >
                {t("Save Settings")}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={t("Settings saved successfully.")}
      />
    </Container>
  );
};

export default Settings;
