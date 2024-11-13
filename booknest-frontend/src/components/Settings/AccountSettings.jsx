import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import axios from "../../utils/axios";
import { useTranslation } from "react-i18next";

const AccountSettings = () => {
  const { t } = useTranslation();
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put("/auth/update", { email, name });
      setUser(response.data); // Обновляем данные пользователя в контексте
      console.log(t("Account settings updated successfully"), response.data);
    } catch (error) {
      console.error(t("Failed to update account settings"), error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {t("Account Settings")}
      </Typography>
      <Typography variant="body1">{t("Here you can manage your account settings.")}</Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <Box sx={{ mb: 2, width: "50%" }}>
          <TextField
            fullWidth
            label={t("Email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 2, width: "50%" }}>
          <TextField
            fullWidth
            label={t("Name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={handleUpdate}>
          {t("Update account settings")}
        </Button>
      </Box>
    </Box>
  );
};

export default AccountSettings;
