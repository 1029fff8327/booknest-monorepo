import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";

import React from "react";
import styled from "@mui/material/styles/styled";
import { useTranslation } from "react-i18next";

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  outline: 0,
}));

const DayBookingsModal = ({ selectedDate, bookings, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal open={Boolean(selectedDate)} onClose={onClose}>
      <ModalContainer>
        <Typography variant="h6" gutterBottom align="center">
          {selectedDate && selectedDate.toLocaleDateString("ru-RU")}
        </Typography>
        <List>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${t("Time:")} ${booking.time}`}
                  secondary={`${t("Service:")} ${booking.service}`}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" align="center">
              {t("No bookings for this day.")}
            </Typography>
          )}
        </List>
        <Button
          onClick={onClose}
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          {t("Close")}
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default DayBookingsModal;
