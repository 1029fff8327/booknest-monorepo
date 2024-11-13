import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 5, borderRadius: 2 }}>
        <Box
          sx={{
            background: "linear-gradient(to right, #43cea2, #185a9d)",
            padding: 2,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#185a9d" }}>
            {t("Login")}
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t("Email")}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={t("Password")}
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {t("Login")}
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: 2, textAlign: "center" }}>
          {t("Don't have an account?")}{" "}
          <a href="/register" style={{ color: "#185a9d" }}>
            {t("Sign Up")}
          </a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
