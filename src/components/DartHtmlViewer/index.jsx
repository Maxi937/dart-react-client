import React, { useContext, useState } from "react";
import { Typography, Box } from "@mui/material";

const styles = {
  container: {
    height: "inherit",
	background: "white",
	padding: "20px",
    color: "black",
	"& > *": {

	}


  },
  htmlContent: {


  },
};


export default function DartHtmlViewer({ html }) {
  return (
    <Box sx={styles.container}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Box>
  );
}
