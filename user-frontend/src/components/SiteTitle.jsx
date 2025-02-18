// components/SiteTitle.jsx

import { Box, Typography } from "@mui/material";

import React from "react";
import { motion } from "framer-motion";
import { useSettingContext } from "../services/SettingService";

const SiteTitle = () => {
  const { settings } = useSettingContext();
  const siteTitle = settings.siteName || "BookNest";

  return (
    <Box
      sx={{
        position: "absolute",
        top: "20px",
        left: "30px",
        zIndex: 1000,
        backgroundColor: "transparent",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: settings.fontFamily || "Poppins, sans-serif",
            background: `linear-gradient(135deg, ${
              settings.primaryColor || "#ff4e50"
            }, ${settings.secondaryColor || "#1fddff"})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: `0px 0px 12px ${
              settings.shadowColor || "rgba(255, 78, 80, 0.8)"
            }`,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {siteTitle}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SiteTitle;
