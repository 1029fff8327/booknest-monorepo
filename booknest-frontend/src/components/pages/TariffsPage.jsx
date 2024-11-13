import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const tariffs = [
  { period: "1 месяц", price: "399 руб." },
  { period: "6 месяцев", price: "1499 сом." },
  { period: "1 год", price: "2999 руб." },
];

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(2),
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.background.paper,
}));

const TariffsPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        {t("Tariffs")}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        {t("Choose the most suitable plan:")}
      </Typography>
      <Grid container spacing={4}>
        {tariffs.map((tariff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">{tariff.period}</Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {tariff.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 2,
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "darkgray",
                    },
                  }}
                  fullWidth
                >
                  {t("Purchase")}
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TariffsPage;
