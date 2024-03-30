import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import DartActionMenuItem from "../DartMenuItem";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../DartMenuItem/menuItem";
import Grid from "@mui/material/Grid";

const styles = {
  container: {
    margin: "auto",
    width: "80%"
  },
  grid: {},
  item: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      flex: "1"
    }

  }
};

function DartMenu({ menuItems }) {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={2}>
        {menuItems.map((item, index) => {
          return (
            <Grid key={index} item lg={4} md={6} xs={12}>
              <Box sx={styles.item}>
                <DartActionMenuItem
                  icon={item.icon}
                  title={item.title}
                  route={item.route}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default DartMenu;
