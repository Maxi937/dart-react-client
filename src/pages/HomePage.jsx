import React, { useState, useEffect } from "react";
import GenerateXpression from "../components/DartActions/GenerateXpression";
import ComaprePdf from "../components/DartActions/ComparePdf";
import { Typography } from "@mui/material";
import PageTemplate from "../components/PageTemplate";
import DartActionMenu from "../components/DartActionMenu";

const styles = {
  fontWeight: "900",
  padding: "100px",
};

const HomePage = (props) => {
  return (
    <DartActionMenu/>
  );
};

export default HomePage;
