import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import { Input, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const styles = {
  inputZone: (isDragActive) => {
    return {
      height: "inherit",
      display: "flex",
      flexDirection: "column",
      color: isDragActive ? "gold" : "white",
      border: isDragActive ? "3px gold dashed" : "3px white dashed",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      borderRadius: "5px",
      cursor: "pointer",
      "&:hover": {
        color: "gold",
        backgroundColor: "black",
        border: "3px gold dashed",
      },
    };
  },
};

const MDropzone = ({ handleDrop, acceptedFileTypes }) => {
  const [file, setSelectedFile] = useState("");

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    handleDrop(acceptedFiles[0]);
  };

  const icon = file ? (
    <>
      <FileDownloadDoneIcon style={{ fontSize: "5cqmax" }} />
      <Typography sx={{ overflow: "hidden" }}>{file.name}</Typography>
    </>
  ) : (
    <FileDownloadIcon style={{ fontSize: "5cqmax" }} />
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
  });

  return (
    <Box
      id={"inputZone"}
      sx={styles.inputZone(isDragActive)}
      {...getRootProps({ className: "dropzone" })}
    >
      <Input {...getInputProps()} />
      {icon}
    </Box>
  );
};

export default MDropzone;
