import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "../../utils/axios";
import { useTranslation } from "react-i18next";

const ShopSettings = () => {
  const { t } = useTranslation();
  const [domain, setDomain] = useState("");
  const [shopName, setShopName] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchShopSettings = async () => {
      try {
        const response = await axios.get("/shop-settings");
        setDomain(response.data.domain);
        setShopName(response.data.shopName);
      } catch (error) {
        console.error(t("Error fetching shop settings"), error);
        setMessage(t("Error fetching shop settings"));
      } finally {
        setLoading(false);
      }
    };

    fetchShopSettings();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put("/shop-settings", { domain, shopName });
      setMessage(t("Settings saved successfully"));
    } catch (error) {
      console.error(t("Error saving settings"), error);
      setMessage(t("Error saving settings"));
    }
  };

  const handleTransfer = async () => {
    const newAccount = prompt(t("Enter new account email:"));
    if (newAccount) {
      try {
        await axios.post("/shop-settings/transfer", { newAccount });
        setMessage(t("Shop transferred successfully"));
      } catch (error) {
        console.error(t("Error transferring shop"), error);
        setMessage(t("Error transferring shop"));
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm(t("Are you sure you want to delete this shop?"))) {
      try {
        await axios.delete("/shop-settings");
        setMessage(t("Shop deleted successfully"));
        setDomain("");
        setShopName("");
      } catch (error) {
        console.error(t("Error deleting shop"), error);
        setMessage(t("Error deleting shop"));
      }
    }
  };

  if (loading) {
    return <div>{t("Loading...")}</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("Shop Settings")}
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          label={t("Domain")}
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          fullWidth
        />
        <TextField
          required
          label={t("Shop Name")}
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          fullWidth
        />
        <Box sx={{ m: 1 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", color: "white", mr: 2 }}
            onClick={handleSave}
          >
            {t("Save Settings")}
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", color: "white", mr: 2 }}
            onClick={handleTransfer}
          >
            {t("Transfer Shop")}
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", color: "white" }}
            onClick={handleDelete}
          >
            {t("Delete Shop")}
          </Button>
        </Box>
      </Box>
      {message && <Typography variant="body2">{message}</Typography>}
    </Container>
  );
};

export default ShopSettings;
