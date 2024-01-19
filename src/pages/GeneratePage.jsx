import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import GenerateXpression from "../components/DartActions/GenerateXpression";
import ComaprePdf from "../components/DartActions/ComparePdf";
import { Typography } from "@mui/material";
import PageTemplate from "../components/PageTemplate";

const styles = {
  header: {
    fontWeight: "900",
    padding: "100px 100px 50px 100px",
  },
  generateXpression: {
    margin: "auto",
    height: "60vh",
    background: "rgb(15 15 15)",
    borderRadius: "25px",
  },
};

const HomePage = (props) => {
  // const [data, setData] = useState(null);

  return (
    <>
      <PageTemplate>
        <Typography sx={styles.header} align="center" variant="h3">
          Generate Xpression
        </Typography>
        <Box sx={styles.generateXpression}>
          <GenerateXpression />
        </Box>
      </PageTemplate>
    </>
  );
};

export default HomePage;
