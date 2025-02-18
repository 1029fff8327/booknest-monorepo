// SettingContext.js

import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "../utils/axios";

// 1) Создаём сам контекст
const SettingContext = createContext();

// 2) Хук для удобства
export const useSettingContext = () => useContext(SettingContext);

// 3) Провайдер
export const SettingProvider = ({ children }) => {
  // Здесь храним все настройки, которые приходят с бэкенда
  const [settings, setSettings] = useState({
    // Значения по умолчанию:
    siteName: "",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    shadowColor: "#cccccc",
    backgroundColor: "#f5f5f5",
    logo: null,
    favicon: null,
    metaDescription: "",
    // ... и остальные поля:
    fontFamily: "Roboto",
    fontSize: "16px",
    buttonStyle: "rounded",
    enableAnimations: false,
    iconSet: "material",
    backgroundImage: null,
    enableNotifications: false,
    enableTelegramNotifications: false,
    additionalNotifications: false,
    bookingInterval: "30",
    customButtons: "",
    enableBookingHistory: false, // История бронирований
    dateFormat: "DD/MM/YYYY",
    workingHours: { start: "09:00", end: "17:00" },
    layoutStructure: "noSidebar",
    logoPosition: "left",
    headerType: "fixed",
    footerType: "minimal",
    blocksOrder: "",
    mainPageTemplate: "defaultMain",
    aboutPageTemplate: "defaultAbout",
    contactPageTemplate: "defaultContact",
    enableGoogleFonts: false,
    googleFontName: "",
    customCSS: "",
    selectedThemePreset: "light",
    animationSpeed: "normal",
    animationType: "fade",
    openGraphTitle: "",
    openGraphDescription: "",
    openGraphImage: null,
    enableRegistration: false,
    enableSocialLogin: false,
    socialProviders: {
      google: { enabled: false, link: "" },
      yandex: { enabled: false, link: "" },
      vk: { enabled: false, link: "" },
      github: { enabled: false, link: "" },
      linkedin: { enabled: false, link: "" },
      facebook: { enabled: false, link: "" },
      twitter: { enabled: false, link: "" },
    },
    enableContactMethods: false,
    contacts: {
      email: { enabled: false, link: "" },
      phone: { enabled: false, link: "" },
      telegram: { enabled: false, link: "" },
      whatsApp: { enabled: false, link: "" },
      custom: { enabled: false, label: "", link: "", logo: null },
    },
  });

  // Флаг загрузки
  const [loading, setLoading] = useState(true);

  // Подгружаем настройки с бэка при монтировании
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/settings");
        // Предположим, что бэк возвращает объект со всеми нужными полями
        // Делаем merge с текущими, чтобы не потерять ключи
        setSettings((prev) => ({
          ...prev,
          ...response.data,
        }));
      } catch (error) {
        console.error("Ошибка загрузки настроек:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  // Функция сохранения настроек
  const saveSettings = async (newSettings) => {
    try {
      await axios.post("/settings", newSettings);
      setSettings(newSettings);
    } catch (error) {
      console.error("Ошибка сохранения настроек:", error);
    }
  };

  return (
    <SettingContext.Provider value={{ settings, saveSettings, loading }}>
      {children}
    </SettingContext.Provider>
  );
};
