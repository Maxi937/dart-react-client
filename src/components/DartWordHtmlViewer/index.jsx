import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import DartHtmlViewer from "../DartHtmlViewer";
import DartButton from "../Form/DartButton";

const styles = {
  container: {
    height: "inherit",
    position: "relative",
  },
  html: {
    height: "100%",
  },
  button: {
    "& > *": {
      position: "absolute",
      top: 5,
      right: 5,
    },
  },
};

export default function DartWordHtmlViewer({ html, filename }) {
  const theme = useTheme();

  function downloadWordHtml() {
    const blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    const blobUrl =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, String(filename).concat(".doc"));
    } else {
      const anchor = window.document.createElement("a");
      anchor.download = String(filename).concat(".doc");
      anchor.href = blobUrl;
      anchor.click();
      window.URL.revokeObjectURL(blobUrl);
    }
  }

  return (
    <Box sx={styles.container}>
      <DartHtmlViewer html={html} />
      <Box sx={styles.button}>
        <DartButton handleClick={downloadWordHtml}>Download</DartButton>
      </Box>
    </Box>
  );
}
