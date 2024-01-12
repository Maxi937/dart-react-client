import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import GenerateXpression from "../components/DartActions/GenerateXpression";
import ComaprePdf from "../components/DartActions/ComparePdf"
import { Typography } from "@mui/material";
import PageTemplate from "../components/PageTemplate";

const styles = {
  fontWeight: "900",
  padding: "100px"
};

const HomePage = (props) => {
  return (
    <Typography sx={styles} align="center" variant="h3">
      In Development
    </Typography>
  );
};

export default HomePage;
