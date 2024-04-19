import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import DescriptionIcon from "@mui/icons-material/Description";
import DartModal from "../../../../Primitives/DartModal";
import DartHtmlViewer from "../../../../DartHtmlViewer";
import DartButton from "../../../../Form/DartButton";
import DartWordHtmlViewer from "../../../../DartWordHtmlViewer";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      gap: "5px",
      padding: "20px",
      backgroundColor: theme.palette.primaryBackground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  version: {
    flex: 1,
    textAlign: "right",
  },
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    color: "red",
  },
};

export default function ContentItem(props) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Paper sx={styles.container(theme)} onClick={() => setIsOpen(true)}>
      <DescriptionIcon sx={styles.icon} />
      <Box sx={styles.docInfo}>
        <Typography>{props.name}</Typography>
      </Box>
      <Box sx={styles.version}>
        <Typography>
          {props.majorVersion}.{props.minorVersion}
        </Typography>
      </Box>
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <DartWordHtmlViewer html={props.html} filename={props.name}/>
      </DartModal>
    </Paper>
  );
}
