import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import DocumentModels from "../../Pickers/DocumentModelPicker/DocumentPicker.jsx";

const styles = {
  container: {
    flexGrow: 1,
    background: "black",
    borderRadius: "20px",
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

function DocumentModelPicker({ onSelected = (documentModel) => {} }) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  function handleIconClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSelected(document) {
    setSelected(document);
    onSelected(document);
    handleClose();
  }

  return (
    <Box sx={styles.container}>
      {selected ? (
        <Typography sx={{ padding: "0px 20px" }}>
          {selected.mdl_nm}
        </Typography>
      ) : (
        <Typography sx={{ padding: "0px 20px", color: "grey" }}>
          Document Code
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
