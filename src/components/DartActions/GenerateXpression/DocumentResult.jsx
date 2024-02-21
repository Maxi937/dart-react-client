import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Chip from "@mui/material/Chip";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      alignItems: "center",
      gap: "25px",
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
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  modeldsc: {
    paddingTop: "20px",
  },
  chips: {
    flex: 1,
    justifyContent: "flex-end",
    display: "flex",
    gap: "10px",
  },
  chiplabel: {
    fontSize: "11px",
    fontWeight: "800",
    textTransform: "uppercase",
  },
};

function DocumentResult({ document }) {
  const theme = useTheme();

  console.log(document)

  function handleClick() {
    // todo
  }

  return (
    <Paper sx={styles.container(theme)} onClick={handleClick}>
      <Box sx={styles.docInfo}>
        <Typography>{document.filename}</Typography>
      </Box>
      <Box sx={styles.chips}>
        {document.postx && (
          <Chip
            style={{ backgroundColor: "indigo" }}
            label={<Typography sx={styles.chiplabel}>xquery</Typography>}
          />
        )}
      </Box>
    </Paper>
  );
}

export default DocumentResult;
