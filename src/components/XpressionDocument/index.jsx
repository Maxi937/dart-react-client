import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import PdfViewer from "../PdfViewer";
import { Modal } from "@mui/material";
import { IconButton } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import VisibilityIcon from "@mui/icons-material/Visibility";

const styles = {
  container: (theme) => {
    return {
      filter: "brightness(65%)",
      display: "flex",
      alignItems: "center",
      gap: "25px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        filter: "brightness(100%)",
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
  postXIcon: {
    filter: "brightness(65%)",
    color: "royalblue",
    transition: "all 0.2s ease",
    "&:hover": {
      filter: "brightness(155%)",
    },
  },
  pdfIcon: {
    filter: "brightness(65%)",
    color: "red",
    transition: "all 0.2s ease",
    "&:hover": {
      filter: "brightness(155%)",
    },
  },
  viewIcon: {
    filter: "brightness(65%)",
    color: "grey",
    transition: "all 0.2s ease",
    "&:hover": {
      filter: "brightness(155%)",
      color: "white",
    },
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

  const pdfFile = () => {
    const buf = Uint8Array.from(document.pdfbytes.data);
    const file = new File([buf], document.filename, {
      type: "application/pdf",
    });
    return file;
  };

  function handleClose() {
    setIsOpen(false);
  }

  function handlePostXClick(e) {
    e.stopPropagation();
    const blob = new Blob([document.postx], {
      type: "text/plain",
    });

    const blobUrl = window.URL.createObjectURL(blob);
    const anchor = window.document.createElement("a");
    anchor.download = String(document.filename).concat(".xml");
    anchor.href = blobUrl;
    anchor.click();
    window.URL.revokeObjectURL(blobUrl);
  }

  function handlePdfClick(e) {
    e.stopPropagation();
    const blobUrl = window.URL.createObjectURL(pdfFile());
    const anchor = window.document.createElement("a");
    anchor.download = String(document.filename).concat(".pdf");
    anchor.href = blobUrl;
    anchor.click();
    window.URL.revokeObjectURL(blobUrl);
  }

  function handleViewClick(e) {
    e.stopPropagation();
    setIsOpen(true);
  }

  return (
    <Paper sx={styles.container(theme)}>
      <Box sx={styles.docInfo}>
        <Typography>{document.filename}</Typography>
      </Box>
      <Box sx={styles.chips}>
        {document.postx && (
          <IconButton
            sx={styles.postXIcon}
            aria-label="download postx"
            onClick={handlePostXClick}
          >
            <SimCardDownloadIcon fontSize="large" />
          </IconButton>
        )}
        <IconButton
          sx={styles.pdfIcon}
          aria-label="download pdf"
          onClick={handlePdfClick}
        >
          <SimCardDownloadIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={styles.viewIcon}
          aria-label="view"
          onClick={handleViewClick}
        >
          <VisibilityIcon fontSize="large" />
        </IconButton>
      </Box>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <PdfViewer blob={pdfFile()} />
        </Box>
      </Modal>
    </Paper>
  );
}

export default DocumentResult;
