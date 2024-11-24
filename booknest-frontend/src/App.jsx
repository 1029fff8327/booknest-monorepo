import {
  AppBar,
  Box,
  CssBaseline,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import React, { useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AccountSettings from "./components/Settings/AccountSettings";
import AddMasterPage from "./components/pages/AddMasterPage";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Analytics from "./components/Analytics/Analytics";
import BookIcon from "@mui/icons-material/Book";
import Booking from "./components/pages/BookingPage";
import BookingHistory from "./components/BookingHistory/BookingHistory";
import { BookingProvider } from "./context/BookingContext";
import Documentation from "./components/Documentation/Documentation";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import LoginPage from "./components/Auth/LoginPage";
import OAuthCallback from "./components/Auth/OAuthCallback.tsx";
import RegisterPage from "./components/Auth/RegisterPage";
import { SettingProvider } from "./context/SettingContext";
import Settings from "./components/Settings/Settings";
import SettingsMenu from "./components/Settings/SettingsMenu";
import ShopSettings from "./components/ShopSettings/ShopSettings";
import Sidebar from "./components/Sidebar/Sidebar";
import TariffsPage from "./components/pages/TariffsPage";
import UserDashboard from "./components/pages/UserDashboard";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#616161",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  color: theme.palette.mode === "dark" ? "#fff" : "#fafafa",
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <StyledAppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Title variant="h6" noWrap sx={{ flexGrow: 1 }}>
                <BookIcon sx={{ mr: 1 }} />
                BookNest
              </Title>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <LanguageSwitcher />
              <SettingsMenu />
            </Toolbar>
          </StyledAppBar>
          {user && <Sidebar />}
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />
            <Routes>
              <Route path="/auth/google/callback" element={<OAuthCallback />} />

              <Route
                path="/register"
                element={user ? <Navigate to="/" /> : <RegisterPage />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <LoginPage />}
              />
              <Route
                path="/settings"
                element={user ? <Settings /> : <Navigate to="/login" />}
              />
              <Route
                path="/booking"
                element={user ? <Booking /> : <Navigate to="/login" />}
              />
              <Route
                path="/history"
                element={user ? <BookingHistory /> : <Navigate to="/login" />}
              />
              <Route
                path="/admin"
                element={user ? <AdminDashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/analytics"
                element={user ? <Analytics /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <UserDashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/shop-settings"
                element={user ? <ShopSettings /> : <Navigate to="/login" />}
              />
              <Route
                path="/account-settings"
                element={user ? <AccountSettings /> : <Navigate to="/login" />}
              />
              <Route
                path="/documentation"
                element={user ? <Documentation /> : <Navigate to="/login" />}
              />
              <Route
                path="/tariffs"
                element={user ? <TariffsPage /> : <Navigate to="/login" />}
              />
              <Route
                path="/add-master"
                element={user ? <AddMasterPage /> : <Navigate to="/login" />}
              />
              <Route
                path="/"
                element={user ? <Settings /> : <Navigate to="/register" />}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default function RootApp() {
  return (
    <AuthProvider>
      <BookingProvider>
        <SettingProvider>
          <App />
        </SettingProvider>
      </BookingProvider>
    </AuthProvider>
  );
}
