import React, { useState, useEffect } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Spacer from "../../components/Primitives/Spacer";
import { useMigrationTest } from "../../hooks/useMigrationTests";
import CenteredSpinner from "../Primitives/CenteredSpinner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const styles = {
  container: (theme) => {
    return {
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "5px",
	  margin: "10px",
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
  testInfo: {
    flex: 1,
  },
  result: {
    marginLeft: "auto",
  },
  icon: (pass) => ({
    color: pass ? "lightgreen" : "red",
    fontSize: "30px",
  }),
};

const MigrationTests = (props) => {
  const { data, isLoading, isError } = useMigrationTest(
    props.documentModel,
    props.env
  );

  let pass = false;

  if (isLoading) {
    return (
      <Box sx={{ padding: "150px" }}>
        <CenteredSpinner />
      </Box>
    );
  }

  if (data) {
    data.compilations.map((compile) => {
      if (compile.tests[0].pass == "false") {
        return (pass = false);
      }
      pass = true;
    });
  }

  return (
    <Paper sx={styles.container}>
      <Box sx={styles.testInfo}>
        <Typography>Revision Units</Typography>
      </Box>
      <Box sx={styles.result}>
        {pass ? (
          <CheckCircleIcon sx={styles.icon(pass)} />
        ) : (
          <CancelIcon sx={styles.icon(pass)} />
        )}
      </Box>
    </Paper>
  );
};

export default MigrationTests;
