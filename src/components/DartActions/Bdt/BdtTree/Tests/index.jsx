import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      gap: "5px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  outerContainer: {},
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
};

function Assertion({ target, value }) {
  console.log(target);
  return (
    <Typography>
      {target} = {value}
    </Typography>
  );
}

export default function Test(props) {
  const theme = useTheme();

  return (
    <Paper sx={styles.container(theme)}>
      <Box sx={styles.docInfo}>
        <Typography textTransform={"uppercase"}>{props.type}</Typography>
      </Box>
      <Box sx={styles.testContent}>
        {props.type === "assert" && (
          <Assertion target={props.target} value={props.value} />
        )}
      </Box>
    </Paper>
  );
}
