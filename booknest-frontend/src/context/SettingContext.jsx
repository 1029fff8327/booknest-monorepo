import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "../utils/axios";

const SettingContext = createContext();

export const useSettingContext = () => useContext(SettingContext);

export const SettingProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    widgetTitle: "",
    enableNotifications: false,
    enableBookingHistory: false,
    logo: null,
    dateFormat: "DD/MM/YYYY",
    workingHours: {
      start: "09:00",
      end: "17:00",
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/settings");
        setSettings(response.data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const saveSettings = async (newSettings) => {
    try {
      await axios.post("/settings", newSettings);
      setSettings(newSettings);
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <SettingContext.Provider value={{ settings, saveSettings, loading }}>
      {children}
    </SettingContext.Provider>
  );
};
