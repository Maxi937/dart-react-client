import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import DocumentModes from "../../Pickers/DocumentModelPicker/DocumentPicker.jsx";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";
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
  modalContent: {
    position: "absolute",
    padding: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "#242424",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  },
};

function DocumentModelPicker() {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const { data, error, isLoading } = useQuery("models", () =>
    dartService.getXpressionDocumentModels("prd")
  );

  if (isLoading) return <CircularProgress />;

  if (error) return <div>An error occurred: {error.message}</div>;

  function handleIconClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const documentModels = data.models;

  console.log(documentModels);

  return (
    <Box sx={styles.container}>
      <Typography sx={{ padding: "0px 20px" }}>
        {selected ? selected : "Document Code"}
      </Typography>
      <Box sx={styles.iconContainer}>
        <IconButton
          sx={{ position: "relative" }}
          aria-label="searchModel"
          onClick={handleIconClick}
        >
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <DocumentModels documentModels={documentModels} />
        </Box>
      </Modal>
    </Box>
  );
}

export default DocumentModelPicker;
