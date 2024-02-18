import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import { Input, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import FileList from "./FileList";
import { IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const styles = {
  container: {
    height: "inherit",
    display: "flex",
    gap: "20px",
  },
  inputZone: (isDragActive) => {
    return {
      display: "flex",
      flexGrow: 1,
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
  iconContainer: {
    position: "absolute",
  },
  fileListContainer: {
	flexGrow: 1,
	textAlign: "right",
    alignSelf: "flex-start",
  },
};

const MDropzone = ({ handleDrop, acceptedFileTypes }) => {
  const [files, setSelectedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
    handleDrop(acceptedFiles);
  };

  const icon = files ? (
    <>
      <FileDownloadDoneIcon style={{ fontSize: "5cqmax" }} />
    </>
  ) : (
    <FileDownloadIcon style={{ fontSize: "5cqmax" }} />
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
  });

  return (
    <Box sx={styles.container}>
      <Box
        id={"inputZone"}
        sx={styles.inputZone(isDragActive)}
        {...getRootProps({ className: "dropzone" })}
      >
        <Input {...getInputProps()} />
        <Box sx={styles.iconContainer}>{icon}</Box>
        <Box sx={styles.fileListContainer}>
          <IconButton aria-label="fileList" onClick={{}}>
            {files.length >= 1 ? <FolderIcon sx={{ fontSize: "50px", color: "white" }} /> : <FolderOutlinedIcon sx={{ fontSize: "50px", color: "white" }} />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MDropzone;
