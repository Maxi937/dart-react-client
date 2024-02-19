import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import { Input, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import FileList from "./FileList";
import { IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";

const styles = {
  container: {
    height: "inherit",
    display: "flex",
    gap: "20px",
  },
  inputZone: (isDragActive) => {
    return {
      display: "flex",
      boxShadow: "15",
      flexGrow: 1,
      color: isDragActive ? "rgba(10,190,265,1)" : "white",
      border: isDragActive
        ? "3px rgba(10,190,265,1) dashed"
        : "3px white dashed",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      borderRadius: "25px",
      backgroundColor: "black",
      cursor: "pointer",
      "&:hover": {
        color: "rgba(10,190,265,1)",
        backgroundColor: "black",
        border: "3px rgba(10,190,265,1) dashed",
      },
    };
  },
  iconContainer: {
    position: "absolute",
  },
  folderIcon: (theme) => {
    return {
      fontSize: "50px",
      color: "white",
      transition: "all 0.2s ease",
      "&:hover": {
        color: theme.palette.primaryHighlight,
      },
    };
  },
  fileListContainer: {
    flexGrow: 1,
    textAlign: "right",
    alignSelf: "flex-start",
  },
  modalContent: {
    position: "absolute",
    padding: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    bgcolor: "#242424",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  },
};

const MDropzone = ({ handleDrop, acceptedFileTypes }) => {
  const theme = useTheme();
  const [files, setSelectedFiles] = useState([]);
  const [open, setOpen] = useState(false);

  function onDrop(droppedFiles) {
    const result = files;

    droppedFiles.map((file) => {
      result.push(file);
    });

    setSelectedFiles(result);
    handleDrop(files);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleFolderClick(e) {
    setOpen(true);
    e.stopPropagation();
  }

  const icon =
    files.length >= 1 ? (
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
          <IconButton aria-label="fileList" onClick={handleFolderClick}>
            {files.length >= 1 ? (
              <FolderIcon sx={styles.folderIcon(theme)} />
            ) : (
              <FolderOutlinedIcon sx={styles.folderIcon(theme)} />
            )}
          </IconButton>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <FileList files={files} setFiles={setSelectedFiles} />
        </Box>
      </Modal>
    </Box>
  );
};

export default MDropzone;
