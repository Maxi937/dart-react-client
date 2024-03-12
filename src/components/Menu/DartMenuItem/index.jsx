import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    padding: "20px",
    border: "1px solid white",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    maxWidth: "350px",
    transition: "all ease 0.2s",
    "&:hover": {
      cursor: "pointer",
      border: "1px solid #64b9fa",
      "& > *": {
        color: "#64b9fa",
      },
    },
  },
  icon: {
    fontSize: "100px",
  },
};

function DartActionMenuItem({ icon, title, route }) {
  const navigate = useNavigate();
  const Icon = icon;

  function handleClick() {
    navigate(route);
  }

  return (
    <Paper sx={styles.container} elevation={10} onClick={handleClick}>
      <Box sx={styles.icon}>
        <Icon sx={styles.icon} />
      </Box>
      <Typography variant="h5">{title}</Typography>
    </Paper>
  );
}

export default DartActionMenuItem;
