import React, { useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const styles = {
  container: {
	borderRadius: "15px",
	background: "black",
	padding: "15px",
    display: "flex",
    flexDirection: "column",
  },
};

const FileList = ({ files }) => {
  return (
    <Box sx={styles.container}>
      {files.map((file) => {
        return <Typography>{file.name}</Typography>;
      })}
    </Box>
  );
};

export default FileList;
