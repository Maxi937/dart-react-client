import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PageTemplate from "../components/PageTemplate";
import ViewFilenet from "../components/DartActions/ViewFilenet";

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
  return (
    <>
      <PageTemplate>
      <Typography sx={styles.header} align="center" variant="h3">
          View Filenet
        </Typography>
        <Box sx={styles.generateXpression}>
          <ViewFilenet />
        </Box>
      </PageTemplate>
    </>
  );
};

export default HomePage;
