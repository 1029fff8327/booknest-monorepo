import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";

const MasterList = ({ masters, onEdit, onDelete }) => {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {masters.map((master) => (
        <Grid item xs={12} sm={6} md={4} key={master.id}>
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            {master.photo ? (
              <CardMedia
                component="img"
                height="300"
                image={master.photo}
                alt={master.name}
              />
            ) : (
              <Box
                sx={{
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f0f0f0",
                  color: "#aaa",
                }}
              >
                <Typography variant="h6">{master.name}</Typography>
              </Box>
            )}
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {master.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                {master.description}
              </Typography>
              {master.phone && (
                <Typography variant="body2" color="textSecondary">
                  <strong>Телефон:</strong> {master.phone}
                </Typography>
              )}
              {master.email && (
                <Typography variant="body2" color="textSecondary">
                  <strong>Email:</strong> {master.email}
                </Typography>
              )}
              {master.services && master.services.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Услуги:
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {master.services.join(", ")}
                  </Typography>
                </Box>
              )}
            </CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                onClick={() => onEdit(master)}
              >
                Редактировать
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => onDelete(master.id)}
              >
                Удалить
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MasterList;
