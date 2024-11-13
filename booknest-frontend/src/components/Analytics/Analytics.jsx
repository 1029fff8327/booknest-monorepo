import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { BookingContext } from "../../context/BookingContext";
import moment from "moment";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateData = (labels, dataPoints) => ({
  labels: labels,
  datasets: [
    {
      label: "Number of Bookings",
      data: dataPoints,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
});

const Analytics = () => {
  const { t } = useTranslation();
  const { bookings } = useContext(BookingContext);
  const [period, setPeriod] = useState("day");
  const [data, setData] = useState(generateData([], []));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (bookings.length > 0) {
      updateChartData(period);
    }
  }, [bookings, period]);

  const updateChartData = (selectedPeriod) => {
    let labels = [];
    let dataPoints = [];

    if (selectedPeriod === "day") {
      labels = Array.from({ length: 24 }, (_, i) => `${i}:00-${i + 1}:00`);
      dataPoints = labels.map((label) => {
        const [startHour, endHour] = label
          .split("-")
          .map((time) => parseInt(time.split(":")[0], 10));
        return bookings.filter((booking) => {
          const bookingHour = moment(booking.time, "HH:mm").hour();
          const bookingDate = moment(booking.date).format("YYYY-MM-DD");
          const currentDate = moment().format("YYYY-MM-DD");

          return (
            bookingDate === currentDate &&
            bookingHour >= startHour &&
            bookingHour < endHour
          );
        }).length;
      });
    } else if (selectedPeriod === "week") {
      labels = [
        t("Monday"),
        t("Tuesday"),
        t("Wednesday"),
        t("Thursday"),
        t("Friday"),
        t("Saturday"),
        t("Sunday"),
      ];
      dataPoints = labels.map((label, index) => {
        return bookings.filter((booking) => {
          return moment(booking.date).day() === index + 1;
        }).length;
      });
    } else if (selectedPeriod === "month") {
      labels = ["1-7", "8-14", "15-21", "22-28", "29-31"];
      dataPoints = labels.map((label, index) => {
        const [startDay, endDay] = label
          .split("-")
          .map((day) => parseInt(day, 10));
        return bookings.filter((booking) => {
          const bookingDay = moment(booking.date).date();
          return bookingDay >= startDay && bookingDay <= endDay;
        }).length;
      });
    }

    if (dataPoints.every((point) => point === 0)) {
      setData(generateData([], []));
    } else {
      setData(generateData(labels, dataPoints));
    }
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleGenerateReport = () => {
    console.log("Report generated");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("Booking Analytics")}
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="period-select-label">{t("Period")}</InputLabel>
        <Select
          labelId="period-select-label"
          id="period-select"
          value={period}
          label={t("Period")}
          onChange={handlePeriodChange}
        >
          <MenuItem value="day">{t("Day")}</MenuItem>
          <MenuItem value="week">{t("Week")}</MenuItem>
          <MenuItem value="month">{t("Month")}</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t("Number of Bookings")}
              </Typography>
              <Bar
                data={data}
                options={{
                  scales: {
                    x: {
                      ticks: {
                        callback: function (value, index, values) {
                          return index % 2 === 0
                            ? this.getLabelForValue(value)
                            : "";
                        },
                        maxRotation: 0,
                        minRotation: 0,
                      },
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgray",
                },
              }}
              onClick={handleGenerateReport}
            >
              {t("Generate Report")}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={t("Report generated successfully.")}
      />
    </Container>
  );
};

export default Analytics;
