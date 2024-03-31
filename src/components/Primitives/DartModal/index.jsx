import React from "react";
import { Box } from "@mui/material";
import { Modal } from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = {
  modalContent: (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    bgcolor: "#242424",
    border: "2px solid #000",
    boxShadow: 24,
    overflow: "auto",
    ...theme.scrollbar,
  }),
  topBar: (theme) => ({
    color: "black",
    backgroundColor: theme.palette.primaryHighlight,
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: "7px",
    gap: "140px",
    display: "flex",
    "& > p": {
      padding: "10px",
      fontSize: "13px",
      fontWeight: "600",
      justifySelf: "center",
    },
  }),
};

export default function DartModal({ children, isOpen, handleClose }) {
  const theme = useTheme()

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
