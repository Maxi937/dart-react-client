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
  header: (theme) => ({
    color: theme.palette.primaryHighlight,
  }),
  info: {
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px"
  }
};

function Content({ header, info }) {
  const theme = useTheme();

  return (
    <Box>
      <Typography sx={styles.header(theme)}>{header}</Typography>
      <Typography sx={styles.info}>{info}</Typography>
    </Box>
  );
}

export default Content;
