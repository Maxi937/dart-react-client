import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import DartActionMenuItem from "./DartActionMenuItem";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    paddingTop: "130px",
    margin: "auto",
    width: "65%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& > *": {
      width: "32%",
      marginBottom: "2%" /* (100-32*3)/2 */,
      position: "relative", 
    },
  },
  icon: {
    fontSize: "100px"
  }
};

const dartActions = [
  {
    icon: CreateIcon,
    title: "Generate",
    route: "/generate",
  },
  {
    icon: CompareArrowsIcon,
    title: "Compare",
    route: "/compare",
  },
  {
    icon: ContentPasteIcon,
    title: "Test",
    route: "/test",
  },
  {
    icon: CallMergeIcon,
    title: "Migration",
    route: "/migration",
  },
  {
    icon: MonitorHeartOutlinedIcon,
    title: "Monitor",
    route: "/monitor",
  },
  {
    icon: AutoStoriesOutlinedIcon,
    title: "Documentation",
    route: "/documentation",
  }
];

function DartActionMenu() {
  return (
    <Box sx={styles.container}>
      {dartActions.map((action, index) => {
        return (
          <DartActionMenuItem
            key={index}
            icon={action.icon}
            title={action.title}
            route={action.route}
          />
        );
      })}
    </Box>
  );
}

export default DartActionMenu;
