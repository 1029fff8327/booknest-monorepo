import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import RateReviewIcon from "@mui/icons-material/RateReview";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          BookNest
        </Typography>
      </Toolbar>
      <List>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={t("Settings")} />
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={t("Booking History")} />
        </ListItem>
        <ListItem button component={Link} to="/admin">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={t("Admin Dashboard")} />
        </ListItem>
        <ListItem button component={Link} to="/reviews">
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <ListItemText primary={t("Customer Reviews")} />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary={t("Booking Analytics")} />
        </ListItem>
        <ListItem button component={Link} to="/masters">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={t("Мастера")} />
        </ListItem>
        <ListItem button component={Link} to="/add-master">
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary={t("Добавление Мастера")} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
