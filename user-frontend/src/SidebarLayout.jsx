// components/SidebarLayout.jsx

import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      {/* Область, где рендерятся наши страницы */}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};

export default SidebarLayout;
