import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { createMaster } from "../../context/MasterContext"; // Импортируем createMaster

function AddMasterPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const [services, setServices] = useState([""]);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...services];
    newServices[index] = value;
    setServices(newServices);
  };

  const addServiceField = () => {
    setServices([...services, ""]);
  };

  const removeServiceField = (index) => {
    if (services.length > 1) {
      const newServices = services.filter((_, i) => i !== index);
      setServices(newServices);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("email", email);
    formData.append("phone", phone);
    if (photo) {
      formData.append("photo", photo);
    }
    formData.append("services", JSON.stringify(services));

    try {
      await createMaster(formData); // Отправка данных мастера на сервер
      alert("Мастер успешно добавлен");
      // Очистка полей формы после успешной отправки
      setName("");
      setDescription("");
      setEmail("");
      setPhone("");
      setPhoto(null);
      setServices([""]);
    } catch (error) {
      console.error("Ошибка при добавлении мастера:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Добавить Мастера
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Телефон"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Загрузить Фото
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </Button>
          {photo && (
            <Avatar
              src={URL.createObjectURL(photo)}
              alt="Фото мастера"
              sx={{ width: 56, height: 56, mt: 2 }}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Услуги</Typography>
          {services.map((service, index) => (
            <Grid
              container
              spacing={1}
              key={index}
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  label={`Услуга ${index + 1}`}
                  value={service}
                  onChange={(e) => handleServiceChange(index, e.target.value)}
                />
              </Grid>
              <Grid item xs={1}>
                {services.length > 1 && (
                  <IconButton
                    onClick={() => removeServiceField(index)}
                    aria-label="Удалить услугу"
                    sx={{
                      color: "#000",
                      "&:hover": {
                        color: "#333",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          <Button
            variant="outlined"
            onClick={addServiceField}
            sx={{
              mt: 2,
              color: "#000",
              borderColor: "#000",
              "&:hover": {
                backgroundColor: "#333",
                color: "#fff",
                borderColor: "#333",
              },
            }}
          >
            Добавить еще одну услугу
          </Button>
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 3,
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        Добавить Мастера
      </Button>
    </Box>
  );
}

export default AddMasterPage;
