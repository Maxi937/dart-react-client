import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ActionText from "./ActionText";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default function Action(props) {
  return (
    <Box sx={styles.container}>
      {props.Icon}
      <ActionText>{props.children}</ActionText>
    </Box>
  );
}
