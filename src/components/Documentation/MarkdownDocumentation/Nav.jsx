import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@emotion/react";

const styles = (theme) => ({
  fontWeight: "600",
  color: "violet",
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": {
    color: theme.palette.primaryHighlight,
  },
});

export default function Nav({ children, ...rest }) {
  const theme = useTheme();

  return (
    <Link href={rest.href} sx={styles(theme)} target="_blank">
      {children[0]}
    </Link>
  );
}
