import {
  Box,
  Container,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { BookingContext } from "../../context/BookingContext";
import { DataGrid } from "@mui/x-data-grid";
import MonthCalendar from "../time/MonthCalendar";
import { useTranslation } from "react-i18next";

const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1.5 },
  { field: "masterName", headerName: "Имя мастера", flex: 1 },
  { field: "service", headerName: "Service", flex: 1.5 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "time", headerName: "Time", flex: 0.5 },
];

const BookingHistory = () => {
  const { t } = useTranslation();
  const { bookings, fetchBookings } = useContext(BookingContext);
  const [filter, setFilter] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const filteredRows = bookings.filter(
    (row) =>
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.email.toLowerCase().includes(filter.toLowerCase()) ||
      row.masterName?.toLowerCase().includes(filter.toLowerCase()) ||
      row.service?.toLowerCase().includes(filter.toLowerCase()) ||
      row.date.includes(filter) ||
      row.time.includes(filter)
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("Booking Management")}
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Booking Tabs"
        sx={{ mb: 2 }}
      >
        <Tab label={t("Booking History")} />
        <Tab label={t("Calendar")} />
      </Tabs>

      {tabIndex === 0 && (
        <>
          <Box sx={{ mb: 2 }}>
            <TextField
              label={t("Search")}
              variant="outlined"
              fullWidth
              value={filter}
              onChange={handleFilterChange}
            />
          </Box>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={filteredRows}
              columns={columns.map((col) => ({
                ...col,
                headerName: t(col.headerName),
              }))}
              pageSize={5}
              rowsPerPageOptions={[5]}
              autoHeight
              sx={{ width: "100%" }}
            />
          </div>
        </>
      )}

      {tabIndex === 1 && (
        <Box sx={{ mt: 3 }}>
          <MonthCalendar />
        </Box>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default BookingHistory;
