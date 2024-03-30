import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import DescriptionIcon from '@mui/icons-material/Description';

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      gap: "5px",
      padding: "20px",
      backgroundColor: theme.palette.primaryBackground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  version: {
	flex: 1,
	textAlign: "right"
  },
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    color: "red",
  },
};

export default function ContentItem(props) {
  const theme = useTheme();

  return (
    <Paper sx={styles.container(theme)}>
      <DescriptionIcon sx={styles.icon}/>
      <Box sx={styles.docInfo}>
        <Typography>{props.NAME}</Typography>
      </Box>
	  <Box sx={styles.version}>
        <Typography>{props.MAJOR_VERSION}.{props.MINOR_VERSION}</Typography>
      </Box>
    </Paper>
  );
}
