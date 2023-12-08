import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import GenerateXpression from "../components/DartActions/GenerateXpression";
import ComaprePdf from "../components/DartActions/ComparePdf"
import { Typography } from "@mui/material";
import PageTemplate from "../components/PageTemplate";

const styles = {
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
        <Typography sx={{ padding: "10px 0 10px 0" }} variant={"h3"}>
          Generate Xpression
        </Typography>
        <Box sx={styles.generateXpression}>
          <GenerateXpression />
        </Box>

        <br></br>
        <br></br>

        <Typography sx={{ padding: "10px 0 10px 0" }} variant={"h3"}>
          Compare
        </Typography>
        <Box sx={styles.generateXpression}>
          <ComaprePdf />
        </Box>
      </PageTemplate>
    </>
  );
};

export default HomePage;
