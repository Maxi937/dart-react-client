import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PageTemplate from "../components/PageTemplate";
import ViewFilenet from "../components/DartActions/ViewFilenet";

const styles = {
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
        <Typography sx={{ padding: "10px 0 10px 0" }} variant={"h3"}>
          Filenet
        </Typography>
        <Box sx={styles.generateXpression}>
          <ViewFilenet />
        </Box>
      </PageTemplate>
    </>
  );
};

export default HomePage;
