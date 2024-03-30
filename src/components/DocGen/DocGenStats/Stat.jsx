import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
	width: "300px",
    padding: "20px",
    border: "1px solid white",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
	justifyContent: "flex-end",
	textAlign: "center",
    gap: "20px",
    transition: "all ease 0.2s",
  },
  icon: {
    fontSize: "100px",
  },
};

export default function Stat({ Icon, title, children }) {
  return (
    <Paper sx={styles.container} elevation={10}>
      <Typography variant="h5">{title}</Typography>
	  {children}
    </Paper>
  );
}
