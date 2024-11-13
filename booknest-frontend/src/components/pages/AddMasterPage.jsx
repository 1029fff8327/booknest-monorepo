import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  createMaster,
  deleteMaster,
  getMasters,
  updateMaster,
} from "../../context/MasterContext";

import CloseIcon from "@mui/icons-material/Close";
import MasterList from "./MasterList";

function AddMasterPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const [services, setServices] = useState([""]);
  const [editingMaster, setEditingMaster] = useState(null);
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    fetchMasters();
  }, []);

  const fetchMasters = async () => {
    try {
      const data = await getMasters();
      setMasters(data);
    } catch (error) {
      console.error("Ошибка при получении мастеров:", error);
    }
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
    resetForm();
  };

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
    services.forEach((service, index) => {
      formData.append(`services[${index}]`, service);
    });

    try {
      if (editingMaster) {
        await updateMaster(editingMaster.id, formData);
        alert("Мастер успешно обновлен");
      } else {
        await createMaster(formData);
        alert("Мастер успешно добавлен");
      }
      fetchMasters();
      resetForm();
    } catch (error) {
      console.error("Ошибка при сохранении мастера:", error);
    }
  };

  const handleEditClick = (master) => {
    setName(master.name);
    setDescription(master.description);
    setEmail(master.email);
    setPhone(master.phone);
    setServices(
      Array.isArray(master.services)
        ? master.services
        : JSON.parse(master.services)
    );
    setEditingMaster(master);
    setTabIndex(0);
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteMaster(id);
      alert("Мастер успешно удален");
      fetchMasters();
    } catch (error) {
      console.error("Ошибка при удалении мастера:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setEmail("");
    setPhone("");
    setPhoto(null);
    setServices([""]);
    setEditingMaster(null);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Создать мастера" />
        <Tab label="Редактировать/Удалить мастеров" />
      </Tabs>

      {tabIndex === 0 && (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            {editingMaster ? "Редактировать мастера" : "Добавить мастера"}
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
                Загрузить фото
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
                      onChange={(e) =>
                        handleServiceChange(index, e.target.value)
                      }
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
            {editingMaster ? "Сохранить изменения" : "Добавить мастера"}
          </Button>
        </Box>
      )}

      {tabIndex === 1 && (
        <MasterList
          masters={masters}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      )}
    </Box>
  );
}

export default AddMasterPage;
