import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(name, email, password);
      navigate("/");
    } catch (error) {
      console.error("Registration failed", error);
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
            {t("Sign Up")}
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t("Name")}
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
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
            {t("Sign Up")}
          </Button>
        </form>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="body2">
            {t("Or sign up with social media")}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
            <IconButton
              color="primary"
              onClick={() => {
                window.location.href = "http://localhost:3000/auth/google"; // This should be pointing to your backend
              }}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 2, textAlign: "center" }}>
          {t("Already have an account?")}{" "}
          <a href="/login" style={{ color: "#185a9d" }}>
            {t("Sign in")}
          </a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
