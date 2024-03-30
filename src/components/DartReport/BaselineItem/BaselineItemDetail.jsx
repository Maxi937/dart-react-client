import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import PdfViewer from "../../PdfViewer";
import { useGenerateBaseline } from "../../../hooks/useGenerateBaseline";
import CenteredSpinner from "../../Primitives/CenteredSpinner";
import Spacer from "../../Primitives/Spacer";

const styles = {
  container: (theme) => ({
    height: "inherit",
    display: "flex",
    flexDirection: "column",
  }),
  topBar: (theme) => ({
    color: "black",
    backgroundColor: theme.palette.primaryHighlight,
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: "7px",
    gap: "140px",
    display: "flex",
    "& > p": {
      padding: "10px",
      fontSize: "13px",
      fontWeight: "600",
      justifySelf: "center",
    },
  }),
  docInfoContainer: (theme) => ({
    borderLeft: `2px solid ${theme.palette.primaryHighlight}`,
    borderRight: `2px solid ${theme.palette.primaryHighlight}`,
    borderTop: `2px solid ${theme.palette.primaryHighlight}`,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "35px",
    ...theme.scrollbar,
  }),
  actions: (theme) => ({
    backgroundColor: "black",
    border: `2px solid ${theme.palette.primaryHighlight}`,
  }),
};

function BaselineItemDetail({ baselineItem, code }) {
  const theme = useTheme();

  const { data, isLoading, isError } = useGenerateBaseline(
    "qar",
    code,
    String(baselineItem.path)
  );

  if (isLoading) {
    return (
      <>
        <Spacer padding={"10%"}></Spacer>
        <CenteredSpinner></CenteredSpinner>
      </>
    );
  }

  if (isError) {
    return <Typography>Is Error</Typography>;
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
    <Box sx={styles.container(theme)}>
      <PdfViewer blob={file}></PdfViewer>
    </Box>
  );
}

export default BaselineItemDetail;
