import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker";
import EnvPicker from "../../Pickers/EnvPicker/index.jsx";
import DartDropzone from "../../Form/DartDropzone";

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
  const [pdfFile, setpdfFile] = useState("");
  const [files, setSelectedFiles] = useState([]);
  const [documentModel, setDocumentModel] = useState(null);
  const [canGenerate, setCanGenerate] = useState(false);
  const [env, setEnv] = useState("");

  useEffect(() => {
    console.log(files);
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

  function handleDocumentModelChange(documentModel) {
    setDocumentModel(documentModel);
  }

  function handleEnvChange(env) {
    setEnv(env);
  }

  function handleClear() {
    setpdfFile();
  }

  async function handleSubmit() {
    if (!files.length >= 1 || !documentModel || !env) {
      return console.log("all fields not completed");
    }
    console.log(`generating ${env}\t${documentModel.mdl_cd}\t${files}}`)
    const data = await dartService.generateXpression(env, documentModel.mdl_name, files);

    if (data.success) {
      console.log(data);
      // const buf = Uint8Array.from(data.filedata.data);
      // const file = new File([buf], data.filename, { type: "application/pdf" });
      // setpdfFile(file);
    }
  }

  return (
    <Box>
      <Box sx={styles.topBar}>
        <EnvPicker envs={["dev", "qar", "prd"]} onSelected={handleEnvChange} />
        <DocumentModelPicker onSelected={handleDocumentModelChange} />
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          sx={styles.submitButton(canGenerate)}
        >
          Generate
        </Button>
      </Box>

      <Box sx={styles.dropzone}>
        <DartDropzone
          acceptedFileTypes={{ "text/xml": [".xml"] }}
          handleDrop={handleDrop}
        />
      </Box>
    </Box>
  );
}

export default GenerateForm;
