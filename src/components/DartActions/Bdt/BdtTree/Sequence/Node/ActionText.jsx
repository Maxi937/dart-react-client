import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = {
  text: (props) => ({
    fontWeight: props.fontWeight ? props.fontWeight : 600,
    fontSize: "0.75rem",
    textTransform: "uppercase",
  }),
};

export default function ActionText(props) {
  return (
    <Box color={props.color} sx={styles.text(props)}>
      {props.children}
    </Box>
  );
}
