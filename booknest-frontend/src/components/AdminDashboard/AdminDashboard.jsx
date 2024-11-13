import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import BookingTable from "../Booking/BookingTable";
import React from "react";
import { useTranslation } from "react-i18next";

const AdminDashboard = () => {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth={false}
      sx={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
    >
      <Typography variant="h4" gutterBottom>
        {t("Панель управления")}
      </Typography>
      <Box sx={{ flexGrow: 1, paddingLeft: 2, paddingRight: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, overflowX: "auto" }}>
              <Typography variant="h6" gutterBottom>
                {t("Бронирования")}
              </Typography>
              <BookingTable />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
