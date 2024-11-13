import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "../utils/axios"; // Убедитесь, что путь правильный

const ShopSettingsContext = createContext();

export const useShopSettings = () => {
  return useContext(ShopSettingsContext);
};

export const ShopSettingsProvider = ({ children }) => {
  const [shopSettings, setShopSettings] = useState({
    domain: "",
    shopName: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchShopSettings = async () => {
      try {
        const response = await axios.get("/shop-settings");
        setShopSettings(response.data);
      } catch (error) {
        console.error("Error fetching shop settings:", error);
        setMessage("Error fetching shop settings");
      } finally {
        setLoading(false);
      }
    };

    fetchShopSettings();
  }, []);

  const saveShopSettings = async (updatedSettings) => {
    try {
      await axios.put("/shop-settings", updatedSettings);
      setShopSettings(updatedSettings);
      setMessage("Settings saved successfully");
    } catch (error) {
      console.error("Error saving shop settings:", error);
      setMessage("Error saving settings");
    }
  };

  const transferShop = async (newAccount) => {
    try {
      await axios.post("/shop-settings/transfer", { newAccount });
      setMessage("Shop transferred successfully");
    } catch (error) {
      console.error("Error transferring shop:", error);
      setMessage("Error transferring shop");
    }
  };

  const deleteShop = async () => {
    try {
      await axios.delete("/shop-settings");
      setShopSettings({ domain: "", shopName: "" });
      setMessage("Shop deleted successfully");
    } catch (error) {
      console.error("Error deleting shop:", error);
      setMessage("Error deleting shop");
    }
  };

  return (
    <ShopSettingsContext.Provider
      value={{
        shopSettings,
        loading,
        saveShopSettings,
        transferShop,
        deleteShop,
        message,
      }}
    >
      {children}
    </ShopSettingsContext.Provider>
  );
};
