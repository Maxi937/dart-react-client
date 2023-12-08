import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const styles = {
  container: {
    display: "flex",
  },

  icon: {
    fontSize: "50px",
    filter: "brightness(100%)",
    color: "rgb(50 200 255)",
    transition: "all 0.2s ease",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(150%)",
    },
  },
};

const Zoom = ({ zoomLevel, setZoomLevel }) => {
  function handleZoomIn() {
    if (zoomLevel <= 2.0) {
      setZoomLevel(zoomLevel + 0.2);
    }
  }

  function handleZoomOut() {
    if (zoomLevel >= 0.5) {
      setZoomLevel(zoomLevel - 0.2);
    }
  }

  return (
    <Box sx={styles.container}>
      <AddCircleIcon onClick={handleZoomIn} sx={styles.icon}>
        Zoom In
      </AddCircleIcon>

      <RemoveCircleIcon onClick={handleZoomOut} sx={styles.icon}>
        Zoom Out
      </RemoveCircleIcon>
    </Box>
  );
};

export default Zoom;
