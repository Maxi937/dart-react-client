import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const styles = {
  downloadButton: {
    fontSize: "51px",
    filter: "brightness(100%)",
    color: "rgb(50 220 200)",
    transition: "all 0.2s ease",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(150%)",
    },
  },
};

const Download = ({ blob }) => {
  function handleDownload() {
    const blobUrl = window.URL.createObjectURL(blob);
    const anchor = window.document.createElement("a");
    anchor.download = blob.name;
    anchor.href = blobUrl;
    anchor.click();
    window.URL.revokeObjectURL(blobUrl);
  }

  return (
    <ArrowDropDownCircleIcon
      onClick={handleDownload}
      sx={styles.downloadButton}
    >
      Download
    </ArrowDropDownCircleIcon>
  );
};

export default Download;
