import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { useTranslation } from "react-i18next";

const BookingConflictDialog = ({ open, onClose, message }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          border: "2px solid black",
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box display="flex" alignItems="center">
          <WarningIcon color="warning" sx={{ mr: 1 }} />
          <Typography variant="h6" component="span">
            {t("Booking Conflict")}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box
            sx={{
              padding: 2,
              backgroundColor: "#fef4e5",
              borderRadius: 2,
              border: "1px solid black",
            }}
          >
            <Typography variant="body1" color="textPrimary">
              {message}
            </Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          {t("Close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingConflictDialog;
