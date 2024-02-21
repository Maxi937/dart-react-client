import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker/index.jsx";
import EnvPicker from "../../Pickers/EnvPicker/index.jsx";
import DartDropzone from "../../Form/DartDropzone/index.jsx";
import DocumentResults from "./DocumentResults.jsx";
import { cancelXpressionDocumentsQuery } from "../../../hooks/useXpressionDocuments.jsx";

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
  results: {
    display: "flex",
    padding: "50px",
    flexDirection: "column",
    gap: "15px",
  },
  submitButton: (canGenerate) => {
    return {
      fontWeight: "bold",
      backgroundColor: "black",
      color: canGenerate ? "white" : "grey",
      transition: "all 0.2s ease",
      "&:hover": {
        color: canGenerate ? "black" : "grey",
        backgroundColor: canGenerate ? "rgba(10,190,265,1)" : "black",
      },
    };
  },
};

function GenerateForm() {
  const [cancelled, setCancelled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [files, setSelectedFiles] = useState([]);
  const [documentModel, setDocumentModel] = useState(null);
  const [canGenerate, setCanGenerate] = useState(false);
  const [env, setEnv] = useState("");

  useEffect(() => {
    if (files.length >= 1 && env && documentModel) {
      return setCanGenerate(true);
    }
    return setCanGenerate(false);
  });

  function handleDrop(droppedFiles) {
    const result = [];
    droppedFiles.map((file) => {
      result.push(file);
    });
    setSelectedFiles(result);
  }

  if (cancelled) {
    cancelXpressionDocumentsQuery();
  }

  function handleDocumentModelChange(documentModel) {
    setDocumentModel(documentModel);
  }

  function handleEnvChange(env) {
    setEnv(env);
  }

  function handleClear() {
    setCancelled(true);
    setSelectedFiles([]);
    setFormSubmitted(false);
  }

  function handleSubmit() {
    if (!files.length >= 1 || !documentModel || !env) {
      return console.log("all fields not completed");
    }
    setFormSubmitted(true);
  }

  return (
    <Box>
      <Box sx={styles.topBar}>
        <EnvPicker envs={["dev", "qar", "prd"]} onSelected={handleEnvChange} />
        <DocumentModelPicker onSelected={handleDocumentModelChange} />
        {formSubmitted ? (
          <Button
            onClick={handleClear}
            type="submit"
            color="primary"
            sx={styles.submitButton(canGenerate)}
          >
            Clear
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            type="submit"
            color="primary"
            sx={styles.submitButton(canGenerate)}
          >
            Generate
          </Button>
        )}
      </Box>

      {formSubmitted ? (
        <DocumentResults
          env={env}
          documentModelCode={documentModel.mdl_cd}
          files={files}
        />
      ) : (
        <Box sx={styles.dropzone}>
          <DartDropzone
            acceptedFileTypes={{ "text/xml": [".xml"] }}
            handleDrop={handleDrop}
          />
        </Box>
      )}
    </Box>
  );
}

export default GenerateForm;
