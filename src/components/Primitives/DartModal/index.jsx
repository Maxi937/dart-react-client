import React from "react";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { Modal } from "@mui/material";

const styles = {
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    bgcolor: "#242424",
    border: "2px solid #000",
    boxShadow: 24,
  },
};

function DartModal({ children, isOpen, handleClose }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContent}>{children}</Box>
    </Modal>
  );
}

export default DartModal;
