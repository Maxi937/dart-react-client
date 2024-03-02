import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

const styles = (theme) => ({
  color: theme.palette.primaryHighlight,
  fontSize: "2.2em",
  fontWeight: "800",
  padding: "25px 0px 15px 0px",
});

export default function Title({ children }) {
  const theme = useTheme();
  return <Typography variant={"h1"} sx={styles(theme)}>{children}</Typography>;
}
