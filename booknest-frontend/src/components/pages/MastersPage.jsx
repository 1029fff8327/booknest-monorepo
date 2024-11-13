import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { getMasters } from "../../context/MasterContext";
import { useNavigate } from "react-router-dom";

function MastersPage() {
  const navigate = useNavigate();
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    const fetchMasters = async () => {
      try {
        const data = await getMasters();
        setMasters(data);
      } catch (error) {
        console.error("Ошибка при получении мастеров:", error);
      }
    };
    fetchMasters();
  }, []);

  const handleBookingClick = (master) => {
    navigate("/booking", { state: { master } });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Страница Мастеров
      </Typography>
      <Grid container spacing={3}>
        {masters.map((master) => (
          <Grid item xs={12} sm={6} md={4} key={master.id}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={master.photo}
                alt={master.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {master.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
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
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  onClick={() => handleBookingClick(master)}
                >
                  Записаться
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MastersPage;
