import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

const styles = (theme) => ({
  color: theme.palette.primaryHighlight,
  padding: "30px 15px 5px 0px",
  fontSize: "1.5em",
  fontWeight: "800",
});

export default function Header2({ children }) {
  const theme = useTheme();
  return <Typography sx={styles(theme)}>{children}</Typography>;
}
