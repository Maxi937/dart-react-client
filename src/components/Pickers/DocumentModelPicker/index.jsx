import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import DocumentModels from "../../Pickers/DocumentModelPicker/DocumentPicker.jsx";

const styles = {
  container: {
    userSelect: "none",
    textOverflow: "ellipsis",
    overflow: "hidden",
    textWrap: "nowrap",
    background: "black",
    borderRadius: "20px",
    paddingLeft: "20px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    flexGrow: 1,
    textAlign: "right",
  },
  icon: {
    color: "white",
    "&:hover": {
      color: "rgba(10,190,265,1)",
    },
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

function DocumentModelPicker({ selected, placeholder, onSelected = (documentModel) => {} }) {
  const [open, setOpen] = useState(false);

  function handleIconClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSelected(document) {
    onSelected(document);
    handleClose();
  }

  return (
    <Box sx={styles.container}>
      {selected ? (
        <Typography>
          {selected}
        </Typography>
      ) : (
        <Typography color={"grey"}>
          {placeholder}
        </Typography>
      )}
      <Box sx={styles.iconContainer}>
        <IconButton aria-label="searchModel" onClick={handleIconClick}>
          <SearchIcon sx={styles.icon} />
        </IconButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <DocumentModels onSelected={handleSelected} />
        </Box>
      </Modal>
    </Box>
  );
}

export default DocumentModelPicker;
