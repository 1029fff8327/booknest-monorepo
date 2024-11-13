import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { BookingContext } from "../../context/BookingContext";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

const BookingTable = () => {
  const { t } = useTranslation();
  const { bookings, fetchBookings, deleteBooking, updateBooking } =
    useContext(BookingContext);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Для динамического сообщения

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async () => {
    await deleteBooking(selectedBooking.id);
    setSnackbarMessage(t("Booking successfully deleted."));
    setOpenSnackbar(true); // Показываем уведомление об успешном удалении
    handleCloseDeleteDialog();
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedBooking(null);
  };

  const handleOpenDeleteDialog = (booking) => {
    setSelectedBooking(booking);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedBooking(null);
  };

  const handleSave = async () => {
    await updateBooking(selectedBooking.id, selectedBooking);
    setSnackbarMessage(t("Booking successfully edited."));
    setOpenSnackbar(true); // Показываем уведомление об успешном редактировании
    handleCloseEditModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBooking({
      ...selectedBooking,
      [name]: value,
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: t("Имя"), width: 120 },
    { field: "email", headerName: t("Электронная почта"), width: 180 },
    { field: "masterName", headerName: t("Имя мастера"), width: 150 },
    { field: "service", headerName: t("Услуга"), width: 150 },
    { field: "date", headerName: t("Дата"), width: 120 },
    { field: "time", headerName: t("Время"), width: 100 },
    {
      field: "actions",
      headerName: t("Действия"),
      width: 300,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              minWidth: "130px", // Увеличиваем минимальную ширину кнопки
              fontSize: "0.75rem", // Уменьшаем размер шрифта
              padding: "4px 8px", // Уменьшаем отступы
            }}
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            {t("Редактировать")}
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "8px",
              minWidth: "100px",
            }}
            size="small"
            onClick={() => handleOpenDeleteDialog(params.row)}
          >
            {t("Удалить")}
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ overflowX: "auto" }}>
      {" "}
      {/* Контейнер с горизонтальной прокруткой */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={bookings}
          columns={columns.map((col) => ({
            ...col,
            headerName: t(col.headerName),
          }))}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      {/* Modal for editing booking */}
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: "white",
            margin: "auto",
            marginTop: "10%",
            width: "300px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {t("Edit Booking")}
          </Typography>
          <TextField
            label={t("Name")}
            name="name"
            value={selectedBooking?.name || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={t("Email")}
            name="email"
            value={selectedBooking?.email || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={t("Master Name")}
            name="masterName"
            value={selectedBooking?.masterName || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={t("Service")}
            name="service"
            value={selectedBooking?.service || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={t("Date")}
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={selectedBooking?.date || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={t("Time")}
            name="time"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={selectedBooking?.time || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            fullWidth
          >
            {t("Save")}
          </Button>
        </Box>
      </Modal>
      {/* Dialog for confirming deletion */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>{t("Confirm Deletion")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("Are you sure you want to delete this booking?")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            {t("Cancel")}
          </Button>
          <Button onClick={handleDelete} color="error">
            {t("Delete")}
          </Button>
        </DialogActions>
      </Dialog>
      {/* Snackbar for showing success messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage} // Динамическое сообщение
      />
    </Box>
  );
};

export default BookingTable;
