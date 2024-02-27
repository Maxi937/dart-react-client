import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { Modal } from "@mui/material";
import { IconButton } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { dartService } from "../../service/dart-service";

const styles = {
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  actionIcons: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  xmlIcon: {
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
    display: "flex",
    flexDirection: "column",
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

function DocGenItemModal({ docgenitem, isOpen, handleClose }) {
  async function downloadXml() {
    const env = String(docgenitem.Region).toLowerCase();

    const response = await dartService.getRequestXmlForCorrelationId(
      env,
      docgenitem.correlation_id
    );

    if (response.success) {
      const blob = new Blob([response.xml], {
        type: "text/plain",
      });

      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = window.document.createElement("a");
      anchor.download = String(docgenitem.doc_pkg_nm).concat(".xml");
      anchor.href = blobUrl;
      anchor.click();
      window.URL.revokeObjectURL(blobUrl);
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContent}>
        <Box sx={styles.docInfo}>
          <Typography>Region: {docgenitem.Region}</Typography>
          <Typography>
            Processing Time: {docgenitem.ProcessingTime_Seconds} s
          </Typography>
          <Typography>Document ID: {docgenitem.doc_id}</Typography>
          <Typography>Document Name: {docgenitem.doc_nm}</Typography>
          <Typography>Case/Policy: {docgenitem.doc_pkg_nm}</Typography>
          <Typography>Status: {docgenitem.stat_cd}</Typography>
          <Typography>Date: {docgenitem.vers_act_dtm}</Typography>
          <Typography>Correlation ID: {docgenitem.correlation_id}</Typography>
          <Typography>System: {docgenitem.doc_gen_sys_cd}</Typography>
          <Typography>User: {docgenitem.vers_act_user_id}</Typography>
        </Box>
        <Box sx={styles.actionIcons}>
          <IconButton
            sx={styles.xmlIcon}
            aria-label="download postx"
            onClick={downloadXml}
          >
            <SimCardDownloadIcon fontSize="large" />
          </IconButton>

          <IconButton
            sx={styles.pdfIcon}
            aria-label="download pdf"
            onClick={{}}
          >
            <SimCardDownloadIcon fontSize="large" />
          </IconButton>
          <IconButton sx={styles.viewIcon} aria-label="view" onClick={{}}>
            <VisibilityIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default DocGenItemModal;
