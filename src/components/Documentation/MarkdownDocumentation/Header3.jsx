import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useDocumentation } from "../../../hooks/useDocumentation";

const styles = {
  main: {
    padding: "10px 0px 0px 0px",
    fontSize: "1.2em",
    fontWeight: "600",
  },
};

export default function Header3({ children }) {
  return <Typography sx={styles.main}>{children}</Typography>;
}
