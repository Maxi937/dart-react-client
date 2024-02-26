import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Chip from "@mui/material/Chip";
import PdfViewer from "../PdfViewer";
import { Modal } from "@mui/material";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  modeldsc: {
    paddingTop: "20px",
  },
  chips: {
    flex: 1,
    justifyContent: "flex-end",
    display: "flex",
    gap: "10px",
  },
  chiplabel: {
    fontSize: "11px",
    fontWeight: "800",
    textTransform: "uppercase",
  },
  modalContent: {
    position: "absolute",
    padding: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    bgcolor: "#242424",
    border: "2px solid #000",
    boxShadow: 24,
  },
};

function DocumentResult({ document }) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const blob = () => {
    const buf = Uint8Array.from(document.pdfbytes.data);
    const file = new File([buf], document.filename, {
      type: "application/pdf",
    });
    return file;
  };

  function handleClose() {
    setIsOpen(false);
    console.log(isOpen);
  }

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <Paper sx={styles.container(theme)} onClick={handleClick}>
      <Box sx={styles.docInfo}>
        <Typography>{document.filename}</Typography>
      </Box>
      <Box sx={styles.chips}>
        {document.postx && (
          <Chip
            style={{ backgroundColor: "indigo" }}
            label={<Typography sx={styles.chiplabel}>xquery</Typography>}
          />
        )}
      </Box>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <PdfViewer blob={blob()} />
        </Box>
      </Modal>
    </Paper>
  );
}

export default DocumentResult;
