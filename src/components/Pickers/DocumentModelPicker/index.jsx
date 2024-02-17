import React, { useContext, useState } from "react";
import DocumentCodeItem from "./DocumentModelItem";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";

const styles = {
  container: {
    backgroundColor: "transparent",
    overflow: "auto",
    maxHeight: "50vh",
  },
};

function DocumentModelPicker({ documentModels }) {
  return (
    <>
      {documentModels.map((model, index) => (
        <Box sx={{ position: "relative", margin: "10px" }}>
          <DocumentCodeItem key={index} documentModel={model} />
        </Box>
      ))}
    </>
  );
}

export default DocumentModelPicker;
