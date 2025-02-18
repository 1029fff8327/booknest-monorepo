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
  Card,
  CardContent,
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

const generateBarData = (labels, dataPoints) => ({
  labels,
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

  // Период: "day" | "week" | "month"
  const [period, setPeriod] = useState("day");

  // Данные для графика (labels, datasets)
  const [chartData, setChartData] = useState(generateBarData([], []));

  // Для показа уведомления после "Generate Report"
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (bookings.length > 0) {
      updateChartData(period);
    } else {
      // Если бронирований нет — сбрасываем
      setChartData(generateBarData([], []));
    }
  }, [bookings, period]);

  const updateChartData = (selectedPeriod) => {
    let labels = [];
    let dataPoints = [];

    if (selectedPeriod === "day") {
      // 24 часа
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
      dataPoints = labels.map((_, index) => {
        return bookings.filter((booking) => {
          // Monday = day()===1, Tuesday=2, ...
          return moment(booking.date).day() === index + 1;
        }).length;
      });
    } else if (selectedPeriod === "month") {
      labels = ["1-7", "8-14", "15-21", "22-28", "29-31"];
      dataPoints = labels.map((range) => {
        const [startDay, endDay] = range
          .split("-")
          .map((num) => parseInt(num, 10));
        return bookings.filter((booking) => {
          const bookingDay = moment(booking.date).date();
          return bookingDay >= startDay && bookingDay <= endDay;
        }).length;
      });
    }
    setChartData(generateBarData(labels, dataPoints));
  };

  // Итоги для карточек
  const totalBookings = bookings.length; // всего за всё время
  const totalPeriodBookings =
    chartData.datasets[0]?.data.reduce((acc, val) => acc + val, 0) || 0; // сумма столбиков
  const totalTodayBookings = bookings.filter((booking) =>
    moment(booking.date).isSame(moment(), "day")
  ).length;

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
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        {t("Booking Analytics")}
      </Typography>

      {/* Карточки со сводкой */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#f5f5f5" }}>
            <CardContent sx={{ p: 1 }}>
              <Typography variant="subtitle1">
                {t("Total Bookings (Overall)")}
              </Typography>
              {/* Чёрные цифры */}
              <Typography variant="h5" sx={{ color: "black" }}>
                {totalBookings}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#f5f5f5" }}>
            <CardContent sx={{ p: 1 }}>
              <Typography variant="subtitle1">
                {t("Total Bookings (Selected Period)")}
              </Typography>
              <Typography variant="h5" sx={{ color: "black" }}>
                {totalPeriodBookings}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#f5f5f5" }}>
            <CardContent sx={{ p: 1 }}>
              <Typography variant="subtitle1">
                {t("Total Bookings (Today)")}
              </Typography>
              <Typography variant="h5" sx={{ color: "black" }}>
                {totalTodayBookings}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Выбор периода */}
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

      {/* График */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t("Number of Bookings")}
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      ticks: {
                        autoSkip: false,
                        maxRotation: 50,
                        minRotation: 0,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      // Шаг 1, только целые
                      ticks: {
                        stepSize: 1,
                        // Если числа большие, можно убрать, но для мелких показателей ок
                      },
                    },
                  },
                }}
              />
            </Box>
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

      {/* Уведомление при генерации отчёта */}
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
