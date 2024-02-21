import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker/index.jsx";
import EnvPicker from "../../Pickers/EnvPicker/index.jsx";
import DartDropzone from "../../Form/DartDropzone/index.jsx";
import { useQuery } from "react-query";
import Modal from "@mui/material/Modal";
import { useMutation } from "react-query";
import DocumentResult from "./DocumentResult.jsx";

const styles = {
  loadingContainer: {
    display: "flex",
    alignItems: "top",
    justifyContent: "center",
    height: "inherit",
    flexDirection: "column",
    gap: "20px",
  },
  modalContent: {
    PointerEvents: "None",
    position: "absolute",
    padding: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
  },
};

function FormSuccessOverlay({ disabled, children }) {
  return (
    <>
      {disabled && (
        <Modal
          hideBackdrop={false}
          disableAutoFocus={true}
          disableRestoreFocus={true}
          disableEnforceFocus={true}
          onClose={() => {}}
          sx={styles.modal}
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles.modalContent}>
            <Box sx={styles.loadingContainer}>{children}</Box>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default FormSuccessOverlay;
