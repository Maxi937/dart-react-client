import React, { useState, useEffect } from "react";
import {Typography, Box} from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = (theme) => ({
  paddingLeft: "10px",
  "& > li::marker": {
	color: theme.palette.primaryHighlight
  }
});

export default function List({ children, ...rest }) {
  const theme = useTheme();
  return <Box sx={styles(theme)}>{children}</Box>;
}
