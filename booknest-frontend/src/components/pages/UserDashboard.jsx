import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import axios from "../../utils/axios";
import { useTranslation } from "react-i18next";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "service", headerName: "Service", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "time", headerName: "Time", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const UserDashboard = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const [preferences, setPreferences] = useState({
    preferredService: "",
    preferredTime: "",
  });

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("/user/bookings");
      setBookings(response.data);
    };

    const fetchPreferences = async () => {
      const response = await axios.get("/user/preferences");
      setPreferences(response.data);
    };

    fetchBookings();
    fetchPreferences();
  }, []);

  const handleSavePreferences = async () => {
    try {
      await axios.post("/user/preferences", preferences);
      alert(t("Preferences saved successfully."));
    } catch (error) {
      console.error("Error saving preferences:", error);
      alert(t("Failed to save preferences."));
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("User Dashboard")}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t("My Bookings")}
            </Typography>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={bookings}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t("Preferences")}
            </Typography>
            <Box>
              <TextField
                fullWidth
                label={t("Preferred Service")}
                value={preferences.preferredService}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    preferredService: e.target.value,
                  })
                }
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label={t("Preferred Time")}
                value={preferences.preferredTime}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    preferredTime: e.target.value,
                  })
                }
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSavePreferences}
              >
                {t("Save Preferences")}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
