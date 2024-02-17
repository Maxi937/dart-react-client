import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker/index.jsx";
import EnvPicker from "../../Pickers/EnvPicker/index.jsx";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  filename: {
    width: "95%",
    color: "white",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  formUploadFile: {
    width: "100%",
    display: "flex",
    gap: "15px",
    alignItems: "center",
    justifyContent: "left",
    overflow: "hidden",
  },
  form: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
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

function GenerateForm({ documentModels }) {
  const [pdfFile, setpdfFile] = useState("");
  const [file, setSelectedFile] = useState("");
  const [code, setCode] = useState("");
  const [env, setEnv] = useState("");

  const documentNames = documentModels.map((model) => model.mdl_nm)

  function handleDrop(file) {
    setSelectedFile(file);
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
    <Box sx={styles.container}>
      <Box>
        <EnvPicker envs={["dev", "qar", "prd"] }/>
        <DocumentModelPicker documentModels={documentModels}/>
        <Box sx={styles.buttoncontainer}>
          {pdfFile ? (
            <Button
              onClick={handleClear}
              type="submit"
              color="primary"
              sx={styles.submitButton}
            >
              Clear
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              type="submit"
              color="primary"
              sx={styles.submitButton}
            >
              Generate
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default GenerateForm;
