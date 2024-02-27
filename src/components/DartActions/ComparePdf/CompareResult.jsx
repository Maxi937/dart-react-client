import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useCompare } from "../../../hooks/useCompare";
import PdfViewer from "../../PdfViewer";

const styles = {
  container: {
    padding: "20px",
    height: "60vh",
  },
  loadingState: {
    paddingTop: "120px",
    height: "60vh",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
};

function CompareResults({ baseline, candidate }) {
  const { data, isLoading, isError } = useCompare(baseline, candidate);

  if (isLoading) {
    return (
      <Box sx={styles.loadingState}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography>is Error</Typography>;
  }

  const reportFile = () => {
    const buf = Uint8Array.from(data.compare.pdfbytes?.data);
    const file = new File([buf], data.compare.filename, {
      type: "application/pdf",
    });
    return file;
  };

  const file = reportFile();

  return (
    <Box sx={styles.container}>
      <PdfViewer blob={file} />
    </Box>
  );
}

export default CompareResults;
