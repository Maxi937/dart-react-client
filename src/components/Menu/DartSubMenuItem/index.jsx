import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => ({
    padding: "20px",

    display: "flex",
    alignItems: "center",
    gap: "20px",
    transition: "all ease 0.2s",
    "&:hover": {
      cursor: "pointer",
      "& > *": {
        transition: "all 0.2s ease",
        color: theme.palette.primaryHighlight,
      },
    },
  }),
  icon: {
    fontSize: "50px",
  },
  subtitle: {
    color: "grey",
  },
};

function DartSubMenuItem({ icon, title, route, subtitle }) {
  const theme = useTheme()
  const navigate = useNavigate();
  const Icon = icon;

  function handleClick() {
    navigate(route);
  }

  return (
    <Box sx={styles.container(theme)} elevation={10} onClick={handleClick}>
      <Box sx={styles.icon}>
        <Icon sx={styles.icon} />
      </Box>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={styles.subtitle} variant="h6">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default DartSubMenuItem;
