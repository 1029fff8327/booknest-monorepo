import "../../styles/Settings.css";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import ColorPicker from "../Common/ColorPicker";
import DateFormatSelect from "../Common/DateFormatSelect";
import Notifications from "../Common/Notifications";
import WorkingHours from "../Common/WorkingHours";
import axios from "../../utils/axios";
import { useSettingContext } from "../../context/SettingContext";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  // Берём функцию сохранения настроек из контекста (если нужно, можно брать и сами настройки)
  const { saveSettings } = useSettingContext();

  // ----- Основные настройки сайта -----
  const [siteName, setSiteName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");
  const [shadowColor, setShadowColor] = useState("#cccccc");
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");
  const [logo, setLogo] = useState(null);

  // ----- Дополнительные настройки (дизайн и бренд) -----
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [fontSize, setFontSize] = useState("16px");
  const [buttonStyle, setButtonStyle] = useState("rounded");
  const [enableAnimations, setEnableAnimations] = useState(false);
  const [iconSet, setIconSet] = useState("material");

  const [favicon, setFavicon] = useState(null);
  const [metaDescription, setMetaDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);

  // ----- Функционал бронирования / уведомлений -----
  const [enableNotifications, setEnableNotifications] = useState(false);
  const [enableTelegramNotifications, setEnableTelegramNotifications] =
    useState(false);
  const [additionalNotifications, setAdditionalNotifications] = useState(false);
  const [bookingInterval, setBookingInterval] = useState("30");
  const [customButtons, setCustomButtons] = useState("");

  // **Новая** настройка «История бронирований»
  const [enableBookingHistory, setEnableBookingHistory] = useState(false);

  // ----- Формат даты / время работы -----
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [workingHours, setWorkingHours] = useState({
    start: "09:00",
    end: "17:00",
  });

  // ----- Макет страницы и новые поля -----
  const [layoutStructure, setLayoutStructure] = useState("noSidebar");
  const [logoPosition, setLogoPosition] = useState("left");
  const [headerType, setHeaderType] = useState("fixed");
  const [footerType, setFooterType] = useState("minimal");
  const [blocksOrder, setBlocksOrder] = useState("");
  const [mainPageTemplate, setMainPageTemplate] = useState("defaultMain");
  const [aboutPageTemplate, setAboutPageTemplate] = useState("defaultAbout");
  const [contactPageTemplate, setContactPageTemplate] =
    useState("defaultContact");

  const [enableGoogleFonts, setEnableGoogleFonts] = useState(false);
  const [googleFontName, setGoogleFontName] = useState("");
  const [customCSS, setCustomCSS] = useState("");
  const [selectedThemePreset, setSelectedThemePreset] = useState("light");
  const [animationSpeed, setAnimationSpeed] = useState("normal");
  const [animationType, setAnimationType] = useState("fade");

  const [openGraphTitle, setOpenGraphTitle] = useState("");
  const [openGraphDescription, setOpenGraphDescription] = useState("");
  const [openGraphImage, setOpenGraphImage] = useState(null);

  // ----- Регистрация / Авторизация -----
  const [enableRegistration, setEnableRegistration] = useState(false);

  // Соц. авторизация
  const [enableSocialLogin, setEnableSocialLogin] = useState(false);
  const [socialProviders, setSocialProviders] = useState({
    google: { enabled: false, link: "" },
    yandex: { enabled: false, link: "" },
    vk: { enabled: false, link: "" },
    github: { enabled: false, link: "" },
    linkedin: { enabled: false, link: "" },
    facebook: { enabled: false, link: "" },
    twitter: { enabled: false, link: "" },
  });

  // Способы связи
  const [enableContactMethods, setEnableContactMethods] = useState(false);
  const [contacts, setContacts] = useState({
    email: { enabled: false, link: "" },
    phone: { enabled: false, link: "" },
    telegram: { enabled: false, link: "" },
    whatsApp: { enabled: false, link: "" },
    custom: {
      enabled: false,
      label: "",
      link: "",
      logo: null,
    },
  });

  // ----- Состояние для уведомления (Snackbar) -----
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Подгружаем настройки с бэка
  const fetchSettings = async () => {
    try {
      const response = await axios.get("/settings");
      const data = response.data || {};

      // Заполняем стейт из бэкенда (учитывая поля)
      setSiteName(data.siteName || "");
      setPrimaryColor(data.primaryColor || "#000000");
      setSecondaryColor(data.secondaryColor || "#ffffff");
      setShadowColor(data.shadowColor || "#cccccc");
      setBackgroundColor(data.backgroundColor || "#f5f5f5");
      setLogo(data.logo || null);

      setFontFamily(data.fontFamily || "Roboto");
      setFontSize(data.fontSize || "16px");
      setButtonStyle(data.buttonStyle || "rounded");
      setEnableAnimations(data.enableAnimations || false);
      setIconSet(data.iconSet || "material");

      setFavicon(data.favicon || null);
      setMetaDescription(data.metaDescription || "");
      setBackgroundImage(data.backgroundImage || null);

      setEnableNotifications(data.enableNotifications || false);
      setEnableTelegramNotifications(data.enableTelegramNotifications || false);
      setAdditionalNotifications(data.additionalNotifications || false);
      setBookingInterval(data.bookingInterval || "30");
      setCustomButtons(data.customButtons || "");

      // История бронирований
      setEnableBookingHistory(data.enableBookingHistory || false);

      setDateFormat(
        ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"].includes(data.dateFormat)
          ? data.dateFormat
          : "DD/MM/YYYY"
      );
      setWorkingHours(data.workingHours || { start: "09:00", end: "17:00" });

      setLayoutStructure(data.layoutStructure || "noSidebar");
      setLogoPosition(data.logoPosition || "left");
      setHeaderType(data.headerType || "fixed");
      setFooterType(data.footerType || "minimal");
      setBlocksOrder(data.blocksOrder || "");

      setMainPageTemplate(data.mainPageTemplate || "defaultMain");
      setAboutPageTemplate(data.aboutPageTemplate || "defaultAbout");
      setContactPageTemplate(data.contactPageTemplate || "defaultContact");

      setEnableGoogleFonts(data.enableGoogleFonts || false);
      setGoogleFontName(data.googleFontName || "");
      setCustomCSS(data.customCSS || "");
      setSelectedThemePreset(data.selectedThemePreset || "light");
      setAnimationSpeed(data.animationSpeed || "normal");
      setAnimationType(data.animationType || "fade");

      setOpenGraphTitle(data.openGraphTitle || "");
      setOpenGraphDescription(data.openGraphDescription || "");
      setOpenGraphImage(data.openGraphImage || null);

      setEnableRegistration(data.enableRegistration || false);

      // Соц. авторизация
      setEnableSocialLogin(data.enableSocialLogin || false);
      setSocialProviders({
        ...socialProviders,
        ...(data.socialProviders || {}),
      });

      // Способы связи
      setEnableContactMethods(data.enableContactMethods || false);
      setContacts({
        ...contacts,
        ...(data.contacts || {}),
      });
    } catch (error) {
      console.error("Ошибка загрузки настроек:", error);
    }
  };

  // Загружаем настройки один раз при монтировании
  useEffect(() => {
    fetchSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Сохранение всех настроек
  const handleSaveSettings = async () => {
    try {
      const settingsData = {
        siteName,
        primaryColor,
        secondaryColor,
        shadowColor,
        backgroundColor,
        logo,
        fontFamily,
        fontSize,
        buttonStyle,
        enableAnimations,
        iconSet,
        favicon,
        metaDescription,
        backgroundImage,
        enableNotifications,
        enableTelegramNotifications,
        additionalNotifications,
        bookingInterval,
        customButtons,
        enableBookingHistory, // История бронирований
        dateFormat,
        workingHours,

        layoutStructure,
        logoPosition,
        headerType,
        footerType,
        blocksOrder,
        mainPageTemplate,
        aboutPageTemplate,
        contactPageTemplate,
        enableGoogleFonts,
        googleFontName,
        customCSS,
        selectedThemePreset,
        animationSpeed,
        animationType,
        openGraphTitle,
        openGraphDescription,
        openGraphImage,

        enableRegistration,
        enableSocialLogin,
        socialProviders,
        enableContactMethods,
        contacts,
      };

      await axios.post("/settings", settingsData);
      // Вызываем сохранение в контексте (чтобы обновить локальное состояние, если надо)
      saveSettings(settingsData);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Ошибка сохранения настроек:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Хендлеры для соц.провайдеров (checkbox + link)
  const toggleSocialProvider = (providerKey) => {
    setSocialProviders((prev) => ({
      ...prev,
      [providerKey]: {
        ...prev[providerKey],
        enabled: !prev[providerKey].enabled,
      },
    }));
  };

  const setSocialProviderLink = (providerKey, value) => {
    setSocialProviders((prev) => ({
      ...prev,
      [providerKey]: {
        ...prev[providerKey],
        link: value,
      },
    }));
  };

  // Хендлеры для способов связи
  const toggleContactMethod = (methodKey) => {
    setContacts((prev) => {
      const isEnabled = !prev[methodKey].enabled;
      return {
        ...prev,
        [methodKey]: {
          ...prev[methodKey],
          enabled: isEnabled,
        },
      };
    });
  };

  const setContactMethodLink = (methodKey, value) => {
    setContacts((prev) => ({
      ...prev,
      [methodKey]: {
        ...prev[methodKey],
        link: value,
      },
    }));
  };

  const setContactMethodLabel = (value) => {
    setContacts((prev) => ({
      ...prev,
      custom: {
        ...prev.custom,
        label: value,
      },
    }));
  };

  const setContactMethodLogo = (file) => {
    setContacts((prev) => ({
      ...prev,
      custom: {
        ...prev.custom,
        logo: file,
      },
    }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("Настройки")}
      </Typography>

      <Box
        component="form"
        sx={{
          // Чтобы форма тянулась на всю ширину:
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "& .MuiGrid-item": { marginBottom: 2 },
          maxWidth: "100%", // Устанавливаем на всю ширину
        }}
        noValidate
        autoComplete="off"
      >
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Grid container spacing={2} direction="column">
            {/* ------- Название сайта ------- */}
            <Grid item>
              <Typography variant="h6">{t("Название сайта")}</Typography>
              <TextField
                required
                label={t("Введите название вашего сайта")}
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                fullWidth
              />
            </Grid>

            {/* ------- Основной цвет ------- */}
            <Grid item>
              <ColorPicker
                label="Основной цвет"
                color={primaryColor}
                onChange={setPrimaryColor}
              />
            </Grid>

            {/* ------- Второстепенный цвет ------- */}
            <Grid item>
              <ColorPicker
                label="Второстепенный цвет"
                color={secondaryColor}
                onChange={setSecondaryColor}
              />
            </Grid>

            {/* ------- Цвет тени ------- */}
            <Grid item>
              <ColorPicker
                label="Цвет тени"
                color={shadowColor}
                onChange={setShadowColor}
              />
            </Grid>

            {/* ------- Цвет фона ------- */}
            <Grid item>
              <ColorPicker
                label="Цвет фона"
                color={backgroundColor}
                onChange={setBackgroundColor}
              />
            </Grid>

            {/* ------- Логотип ------- */}
            <Grid item>
              <Typography variant="h6">{t("Логотип")}</Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setLogo(
                    e.target.files && e.target.files[0]
                      ? e.target.files[0]
                      : null
                  )
                }
              />
            </Grid>

            {/* ------- Favicon ------- */}
            <Grid item>
              <Typography variant="h6">{t("Favicon")}</Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFavicon(
                    e.target.files && e.target.files[0]
                      ? e.target.files[0]
                      : null
                  )
                }
              />
            </Grid>

            {/* ------- Фоновое изображение ------- */}
            <Grid item>
              <Typography variant="h6">{t("Фоновое изображение")}</Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setBackgroundImage(
                    e.target.files && e.target.files[0]
                      ? e.target.files[0]
                      : null
                  )
                }
              />
            </Grid>

            {/* ------- Описание сайта ------- */}
            <Grid item>
              <Typography variant="h6">{t("Описание сайта")}</Typography>
              <TextField
                label={t("metaDescription")}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                fullWidth
                multiline
                rows={3}
              />
            </Grid>

            {/* ------- Шрифт, размер шрифта ------- */}
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Шрифт")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  fullWidth
                >
                  <option value="Roboto">Roboto</option>
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Helvetica">Helvetica</option>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Размер шрифта")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  fullWidth
                >
                  <option value="14px">14px</option>
                  <option value="16px">16px</option>
                  <option value="18px">18px</option>
                  <option value="20px">20px</option>
                </TextField>
              </Grid>
            </Grid>

            {/* ------- Форма кнопок, анимации ------- */}
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Форма кнопок")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={buttonStyle}
                  onChange={(e) => setButtonStyle(e.target.value)}
                  fullWidth
                >
                  <option value="rounded">{t("Закруглённые")}</option>
                  <option value="square">{t("Квадратные")}</option>
                  <option value="circle">{t("Круглые")}</option>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Анимации")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={enableAnimations ? "on" : "off"}
                  onChange={(e) => setEnableAnimations(e.target.value === "on")}
                  fullWidth
                >
                  <option value="off">{t("Отключить")}</option>
                  <option value="on">{t("Включить")}</option>
                </TextField>
              </Grid>
            </Grid>

            {/* ------- Набор иконок ------- */}
            <Grid item>
              <Typography variant="h6">{t("Набор иконок")}</Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                value={iconSet}
                onChange={(e) => setIconSet(e.target.value)}
                fullWidth
              >
                <option value="material">Material Icons</option>
                <option value="fontawesome">Font Awesome</option>
                <option value="custom">Custom</option>
              </TextField>
            </Grid>

            {/* ------- Формат даты ------- */}
            <Grid item>
              <DateFormatSelect
                dateFormat={dateFormat}
                onDateFormatChange={setDateFormat}
              />
            </Grid>

            {/* ------- Время работы ------- */}
            <Grid item>
              <WorkingHours
                workingHours={workingHours}
                onWorkingHoursChange={setWorkingHours}
              />
            </Grid>

            {/* ------- Интервал бронирований ------- */}
            <Grid item>
              <Typography variant="h6">
                {t("Минимальное время между бронированиями (мин)")}
              </Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                value={bookingInterval}
                onChange={(e) => setBookingInterval(e.target.value)}
                fullWidth
              >
                <option value="15">15 минут</option>
                <option value="30">30 минут</option>
                <option value="60">1 час</option>
              </TextField>
            </Grid>

            {/* ------- Нотификации ------- */}
            <Grid item>
              <Notifications
                enableNotifications={enableNotifications}
                onEnableNotificationsChange={setEnableNotifications}
                enableTelegramNotifications={enableTelegramNotifications}
                onEnableTelegramNotificationsChange={
                  setEnableTelegramNotifications
                }
              />

              <Typography variant="body1" sx={{ mt: 1 }}>
                {t("Доп. уведомления (Email / SMS и т.д.):")}
              </Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                value={additionalNotifications ? "on" : "off"}
                onChange={(e) =>
                  setAdditionalNotifications(e.target.value === "on")
                }
                fullWidth
              >
                <option value="off">{t("Выключить")}</option>
                <option value="on">{t("Включить")}</option>
              </TextField>
            </Grid>

            {/* ------- Чекбокс "Включить историю бронирований" ------- */}
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={enableBookingHistory}
                    onChange={(e) => setEnableBookingHistory(e.target.checked)}
                  />
                }
                label={t("Включить историю бронирований")}
              />
              <Typography variant="body2">
                {t("Включите, чтобы видеть историю ваших бронирований.")}
              </Typography>
            </Grid>

            {/* ------- Кастомные кнопки ------- */}
            <Grid item>
              <Typography variant="h6">{t("Кастомизация кнопок")}</Typography>
              <TextField
                label={t("Введите JSON или текст для названий кнопок")}
                value={customButtons}
                onChange={(e) => setCustomButtons(e.target.value)}
                multiline
                rows={2}
                fullWidth
              />
            </Grid>

            {/* ------- Макет страницы ------- */}
            <Grid item>
              <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                {t("Настройки макета и страниц")}
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Структура сайта")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={layoutStructure}
                  onChange={(e) => setLayoutStructure(e.target.value)}
                  fullWidth
                >
                  <option value="noSidebar">{t("Без боковой панели")}</option>
                  <option value="sidebarLeft">
                    {t("Боковая панель слева")}
                  </option>
                  <option value="sidebarRight">
                    {t("Боковая панель справа")}
                  </option>
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">{t("Положение логотипа")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={logoPosition}
                  onChange={(e) => setLogoPosition(e.target.value)}
                  fullWidth
                >
                  <option value="left">{t("Слева")}</option>
                  <option value="center">{t("По центру")}</option>
                  <option value="right">{t("Справа")}</option>
                </TextField>
              </Grid>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Шапка (header)")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={headerType}
                  onChange={(e) => setHeaderType(e.target.value)}
                  fullWidth
                >
                  <option value="fixed">{t("Фиксированная")}</option>
                  <option value="scroll">{t("Прокручиваемая")}</option>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Футер (footer)")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={footerType}
                  onChange={(e) => setFooterType(e.target.value)}
                  fullWidth
                >
                  <option value="fixed">{t("Фиксированный")}</option>
                  <option value="minimal">{t("Минималистичный")}</option>
                  <option value="extended">{t("Расширенный")}</option>
                </TextField>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="h6">
                {t("Управление блоками (Drag & Drop)")}
              </Typography>
              <TextField
                label={t("Порядок блоков (JSON)")}
                value={blocksOrder}
                onChange={(e) => setBlocksOrder(e.target.value)}
                multiline
                rows={2}
                fullWidth
              />
            </Grid>

            <Grid item>
              <Typography variant="h6">{t("Шаблоны страниц")}</Typography>
              <Typography variant="body2">
                {t("Укажите названия или ID шаблонов для ключевых страниц")}
              </Typography>
              <TextField
                label={t("Главная страница")}
                value={mainPageTemplate}
                onChange={(e) => setMainPageTemplate(e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
              />
              <TextField
                label={t("Страница 'О нас'")}
                value={aboutPageTemplate}
                onChange={(e) => setAboutPageTemplate(e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
              />
              <TextField
                label={t("Страница 'Контакты'")}
                value={contactPageTemplate}
                onChange={(e) => setContactPageTemplate(e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
              />
            </Grid>

            {/* ------- Google Fonts ------- */}
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">{t("Google Fonts")}</Typography>
                <TextField
                  select
                  SelectProps={{ native: true }}
                  value={enableGoogleFonts ? "on" : "off"}
                  onChange={(e) =>
                    setEnableGoogleFonts(e.target.value === "on")
                  }
                  fullWidth
                >
                  <option value="off">{t("Выключить")}</option>
                  <option value="on">{t("Включить")}</option>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                {enableGoogleFonts && (
                  <>
                    <Typography variant="h6">
                      {t("Название Google Font")}
                    </Typography>
                    <TextField
                      value={googleFontName}
                      onChange={(e) => setGoogleFontName(e.target.value)}
                      fullWidth
                    />
                  </>
                )}
              </Grid>
            </Grid>

            {/* ------- Пользовательский CSS ------- */}
            <Grid item>
              <Typography variant="h6">{t("Пользовательский CSS")}</Typography>
              <TextField
                label={t("Вставьте свой CSS-код")}
                value={customCSS}
                onChange={(e) => setCustomCSS(e.target.value)}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>

            {/* ------- Темы и анимации ------- */}
            <Grid item>
              <Typography variant="h6">{t("Темы и пресеты")}</Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                value={selectedThemePreset}
                onChange={(e) => setSelectedThemePreset(e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
              >
                <option value="light">{t("Светлая")}</option>
                <option value="dark">{t("Тёмная")}</option>
                <option value="pastel">{t("Пастельная")}</option>
                <option value="contrast">{t("Контрастная")}</option>
              </TextField>

              <Typography variant="body2" sx={{ mt: 1 }}>
                {t("Скорость анимации")}
              </Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(e.target.value)}
                fullWidth
              >
                <option value="slow">{t("Медленная")}</option>
                <option value="normal">{t("Нормальная")}</option>
                <option value="fast">{t("Быстрая")}</option>
              </TextField>

              <Typography variant="body2" sx={{ mt: 1 }}>
                {t("Тип анимации")}
              </Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                value={animationType}
                onChange={(e) => setAnimationType(e.target.value)}
                fullWidth
              >
                <option value="slide">{t("Слайд")}</option>
                <option value="fade">{t("Затухание")}</option>
                <option value="zoom">{t("Масштабирование (Zoom)")}</option>
              </TextField>
            </Grid>

            {/* ------- Open Graph ------- */}
            <Grid item>
              <Typography variant="h6">
                {t("Open Graph (SEO для соцсетей)")}
              </Typography>
              <TextField
                label={t("OG Title")}
                value={openGraphTitle}
                onChange={(e) => setOpenGraphTitle(e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
              />
              <TextField
                label={t("OG Description")}
                value={openGraphDescription}
                onChange={(e) => setOpenGraphDescription(e.target.value)}
                fullWidth
                multiline
                rows={2}
                sx={{ mt: 1 }}
              />
              <Typography variant="body1" sx={{ mt: 1 }}>
                {t("OG Image")}
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setOpenGraphImage(
                    e.target.files && e.target.files[0]
                      ? e.target.files[0]
                      : null
                  )
                }
              />
            </Grid>

            {/* ------- Регистрация пользователей ------- */}
            <Grid item>
              <Typography variant="h6">
                {t("Регистрация пользователей")}
              </Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                label={t("Включить регистрацию")}
                value={enableRegistration ? "on" : "off"}
                onChange={(e) => setEnableRegistration(e.target.value === "on")}
                fullWidth
                sx={{ mt: 1 }}
              >
                <option value="off">{t("Выключить")}</option>
                <option value="on">{t("Включить")}</option>
              </TextField>
            </Grid>

            {/* ------- Социальная авторизация ------- */}
            <Grid item>
              <Typography variant="h6">
                {t("Социальная авторизация")}
              </Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                label={t("Включить соц. авторизацию")}
                value={enableSocialLogin ? "on" : "off"}
                onChange={(e) => setEnableSocialLogin(e.target.value === "on")}
                fullWidth
              >
                <option value="off">{t("Выключить")}</option>
                <option value="on">{t("Включить")}</option>
              </TextField>

              {enableSocialLogin && (
                <Box sx={{ p: 2, border: "1px solid #ccc", mt: 2 }}>
                  <Typography variant="subtitle1">
                    {t("Выберите провайдеры и введите ссылки/ID")}
                  </Typography>

                  {Object.keys(socialProviders).map((providerKey) => {
                    const provider = socialProviders[providerKey];
                    return (
                      <Box key={providerKey} sx={{ mt: 1 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={provider.enabled}
                              onChange={() => toggleSocialProvider(providerKey)}
                            />
                          }
                          label={providerKey.toUpperCase()}
                        />
                        {provider.enabled && (
                          <TextField
                            label={t(`Ссылка или ID для ${providerKey}`)}
                            value={provider.link}
                            onChange={(e) =>
                              setSocialProviderLink(providerKey, e.target.value)
                            }
                            sx={{ ml: 2, width: "90%" }}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Grid>

            {/* ------- Способы связи ------- */}
            <Grid item>
              <Typography variant="h6">{t("Способы связи")}</Typography>
              <TextField
                select
                SelectProps={{ native: true }}
                label={t("Включить способы связи")}
                value={enableContactMethods ? "on" : "off"}
                onChange={(e) =>
                  setEnableContactMethods(e.target.value === "on")
                }
                fullWidth
              >
                <option value="off">{t("Выключить")}</option>
                <option value="on">{t("Включить")}</option>
              </TextField>

              {enableContactMethods && (
                <Box sx={{ p: 2, border: "1px solid #ccc", mt: 2 }}>
                  <Typography variant="subtitle1">
                    {t("Выберите контактные методы и укажите ссылки")}
                  </Typography>

                  {/* Email */}
                  <Box sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={contacts.email.enabled}
                          onChange={() => toggleContactMethod("email")}
                        />
                      }
                      label={t("Email")}
                    />
                    {contacts.email.enabled && (
                      <TextField
                        label={t("Введите email-адрес")}
                        value={contacts.email.link}
                        onChange={(e) =>
                          setContactMethodLink("email", e.target.value)
                        }
                        sx={{ ml: 2, width: "90%" }}
                      />
                    )}
                  </Box>

                  {/* Phone */}
                  <Box sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={contacts.phone.enabled}
                          onChange={() => toggleContactMethod("phone")}
                        />
                      }
                      label={t("Телефон")}
                    />
                    {contacts.phone.enabled && (
                      <TextField
                        label={t("Введите номер телефона")}
                        value={contacts.phone.link}
                        onChange={(e) =>
                          setContactMethodLink("phone", e.target.value)
                        }
                        sx={{ ml: 2, width: "90%" }}
                      />
                    )}
                  </Box>

                  {/* Telegram */}
                  <Box sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={contacts.telegram.enabled}
                          onChange={() => toggleContactMethod("telegram")}
                        />
                      }
                      label="Telegram"
                    />
                    {contacts.telegram.enabled && (
                      <TextField
                        label={t("Введите ссылку на Telegram")}
                        value={contacts.telegram.link}
                        onChange={(e) =>
                          setContactMethodLink("telegram", e.target.value)
                        }
                        sx={{ ml: 2, width: "90%" }}
                      />
                    )}
                  </Box>

                  {/* WhatsApp */}
                  <Box sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={contacts.whatsApp.enabled}
                          onChange={() => toggleContactMethod("whatsApp")}
                        />
                      }
                      label="WhatsApp"
                    />
                    {contacts.whatsApp.enabled && (
                      <TextField
                        label={t("Введите ссылку или номер WhatsApp")}
                        value={contacts.whatsApp.link}
                        onChange={(e) =>
                          setContactMethodLink("whatsApp", e.target.value)
                        }
                        sx={{ ml: 2, width: "90%" }}
                      />
                    )}
                  </Box>

                  {/* Custom */}
                  <Box sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={contacts.custom.enabled}
                          onChange={() => toggleContactMethod("custom")}
                        />
                      }
                      label={t("Свой (Custom)")}
                    />
                    {contacts.custom.enabled && (
                      <Box sx={{ ml: 2, width: "90%" }}>
                        <TextField
                          label={t("Название (Label)")}
                          value={contacts.custom.label}
                          onChange={(e) =>
                            setContactMethodLabel(e.target.value)
                          }
                          sx={{ mt: 1, width: "100%" }}
                        />
                        <TextField
                          label={t("Ссылка/Контакт")}
                          value={contacts.custom.link}
                          onChange={(e) =>
                            setContactMethodLink("custom", e.target.value)
                          }
                          sx={{ mt: 1, width: "100%" }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {t("Логотип (иконка)")}
                        </Typography>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            setContactMethodLogo(
                              e.target.files && e.target.files[0]
                                ? e.target.files[0]
                                : null
                            )
                          }
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              )}
            </Grid>

            {/* ------- Кнопка "Сохранить" ------- */}
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkgray",
                  },
                }}
                onClick={handleSaveSettings}
              >
                {t("Сохранить настройки")}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={t("Настройки успешно сохранены.")}
      />
    </Container>
  );
};

export default Settings;
