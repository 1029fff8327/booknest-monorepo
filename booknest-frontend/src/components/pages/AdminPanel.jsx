import { Container, Grid } from "@mui/material";

import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Analytics from "../Analytics/Analytics";
import React from "react";

const AdminPanel = () => (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AdminDashboard />
      </Grid>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
    </Grid>
  </Container>
);

export default AdminPanel;
