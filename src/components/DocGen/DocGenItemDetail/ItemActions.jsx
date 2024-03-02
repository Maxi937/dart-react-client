import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { dartService } from "../../../service/dart-service";

const styles = {
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
};

function ItemActions({ docgenitem }) {
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

  async function downloadPdf() {
    const response = await fetch(docgenitem.FilenetURL);
    if (response.status == 200) {
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = window.document.createElement("a");
      anchor.download = String(docgenitem.doc_pkg_nm).concat(".pdf");
      anchor.href = blobUrl;
      anchor.click();
      window.URL.revokeObjectURL(blobUrl);
    }
  }

  async function openFilenet(e) {
    e.stopPropagation();
    window.open(docgenitem.FilenetURL, "_blank").focus();
  }

  return (
    <Box sx={styles.actionIcons}>
      <IconButton
        sx={styles.xmlIcon}
        aria-label="download postx"
        onClick={downloadXml}
      >
        <SimCardDownloadIcon fontSize="large" />
      </IconButton>

      {docgenitem.stat_cd != "GENERROR" && (
        <>
          <IconButton
            sx={styles.pdfIcon}
            aria-label="download pdf"
            onClick={downloadPdf}
          >
            <SimCardDownloadIcon fontSize="large" />
          </IconButton>
          <IconButton
            sx={styles.viewIcon}
            aria-label="view"
            onClick={openFilenet}
          >
            <VisibilityIcon fontSize="large" />
          </IconButton>
        </>
      )}
    </Box>
  );
}

export default ItemActions;
