import {
  Description,
  Menu as MenuIcon,
  Person,
  Shop,
  LocalOffer as TariffIcon
} from "@mui/icons-material";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SettingsMenu = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon /> {/* Updated to MenuIcon for hamburger style */}
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/account-settings" onClick={handleClose}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary={t("Account Settings")} />
        </MenuItem>
        <MenuItem component={Link} to="/shop-settings" onClick={handleClose}>
          <ListItemIcon>
            <Shop />
          </ListItemIcon>
          <ListItemText primary={t("Shop Settings")} />
        </MenuItem>
        <MenuItem component={Link} to="/documentation" onClick={handleClose}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary={t("Documentation")} />
        </MenuItem>
        <MenuItem component={Link} to="/tariffs" onClick={handleClose}>
          <ListItemIcon>
            <TariffIcon />
          </ListItemIcon>
          <ListItemText primary={t("Tariffs")} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default SettingsMenu;
