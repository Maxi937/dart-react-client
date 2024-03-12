import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import DartSubMenuItem from "../DartSubMenuItem";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../DartMenuItem/menuItem";

const styles = {

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "auto",
  },
  icon: {
    fontSize: "100px",
  },
};

function DartSubMenu({ menuItems }) {
  return (
    <Box sx={styles.container}>
      {menuItems.map((item, index) => {
        return (
          <DartSubMenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            route={item.route}
          />
        );
      })}
    </Box>
  );
}

export default DartSubMenu;
