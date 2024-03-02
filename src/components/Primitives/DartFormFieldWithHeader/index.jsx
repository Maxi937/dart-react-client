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
    borderRadius: "10px",
  },
};

function SearchField({ header, children }) {
  const theme = useTheme();

  return (
    <Box sx={styles.info}>
      <Typography sx={styles.header(theme)}>{header}</Typography>
      <Box>{children}</Box>
    </Box>
  );
}

export default SearchField;
