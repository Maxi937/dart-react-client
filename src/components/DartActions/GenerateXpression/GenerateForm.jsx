import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker";
import EnvPicker from "../../Pickers/EnvPicker/index.jsx";
import DartDropzone from "../../Form/DartDropzone";
import { Paper } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
  },
  topBar: {
    display: "flex",
    gap: "20px",
  },
  modelContainer: {
    borderRadius: "20px",
    flex: 1,
    display: "flex",
    alignItems: "center",
    background: "black",
  },
  dropzone: {
    padding: "50px",
    height: "40vh",
  },
  buttoncontainer: {
    marginLeft: "auto",
  },
  submitButton: {
    fontWeight: "bold",
    backgroundColor: "transparent",
    filter: "brightness(90%)",
    color: "white",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "black",
      backgroundColor: "gold",
      filter: "brightness(100%)",
    },
  },
};

function GenerateForm() {
  const [pdfFile, setpdfFile] = useState("");
  const [files, setSelectedFiles] = useState([]);
  const [code, setCode] = useState("");
  const [env, setEnv] = useState("");

  function handleDrop(file) {
    const fileList = files;
    fileList.push(file);
    setSelectedFiles(fileList);
  }

  function handleCodeChange(event) {
    setCode(event.target.value);
  }

  function handleEnvChange(event) {
    setEnv(event.target.value);
  }

  function handleClear() {
    setpdfFile();
  }

  async function handleSubmit() {
    if (!file || !code || !env) {
      return console.log("all fields not completed");
    }
    const data = await dartService.testGenerateXpression(env, code, file);

    if (data.success) {
      const buf = Uint8Array.from(data.filedata.data);
      const file = new File([buf], data.filename, { type: "application/pdf" });
      setpdfFile(file);
    }
  }

  return (
    <Box>
      <Box sx={styles.topBar}>
        <EnvPicker envs={["dev", "qar", "prd"]} />
        <DocumentModelPicker />
      </Box>

      <Box sx={styles.dropzone}>
        <DartDropzone />
      </Box>
    </Box>
  );
}

export default GenerateForm;
