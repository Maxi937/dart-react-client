import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Filepicker from "../../../../Form/MFilepicker";
import Compile from "./Compile";
import Test from "./Test";

const styles = {
  container: {
    padding: "10px",
    display: "flex",
    alignItems: "end",
  },
  left: {
    display: "flex",
    alignItems: "end",
    gap: "5px",
  },
  right: {
    alignContent: "center",
    display: "flex",
    gap: "10px",
    flex: 1,
    justifyContent: "right",
  },
};

export default function BdtActions(props) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <Filepicker
          selected={props.candidateFile}
          accept={"text/xml"}
          handleFileSelected={(file) => props.setCandidateFile(file)}
        />
      </Box>

      <Box sx={styles.right}>
        <Compile {...props} />
      </Box>
    </Box>
  );
}
