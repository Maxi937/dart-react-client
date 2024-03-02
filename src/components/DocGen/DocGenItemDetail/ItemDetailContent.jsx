import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";

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
