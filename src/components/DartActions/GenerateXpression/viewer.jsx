import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MSelect from "../../Form/MSelect/index.jsx";
import { codes } from "./codes.js";
import { dartService } from "../../../service/dart-service.js";
import MDropzone from "./dropzone.jsx";
import PdfViewer from "../../PdfViewer/index.jsx";
import { Typography } from "@mui/material";
import { environments } from "./env.js";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
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
  viewer: {
    width: "100%",
    height: "stretch",
    margin: "auto",
    overflow: "hidden",
  },
  dropzone: {
    width: "80%",
    height: "90%",
    margin: "auto",
  },
};

const Viewer = () => {
  const [pdfFile, setpdfFile] = useState("");
  const [file, setSelectedFile] = useState("");
  const [code, setCode] = useState("");
  const [env, setEnv] = useState("");

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

    console.log(file)
    const data = await dartService.testGenerateXpression(env, code, file);

    if (data.success) {
      const buf = Uint8Array.from(data.filedata.data);
      const file = new File([buf], data.filename, { type: "application/pdf" });
      setpdfFile(file);
    }
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.form}>
        <MSelect
          disabled={pdfFile}
          label={"env"}
          choices={environments}
          onSelectionChange={handleEnvChange}
        />

        <MSelect
          disabled={pdfFile}
          label={"code"}
          choices={codes}
          onSelectionChange={handleCodeChange}
        />

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
      <Box sx={styles.viewer}>
        {pdfFile ? (
          <PdfViewer blob={pdfFile} />
        ) : (
          <>
            <Box sx={styles.dropzone}>
              <MDropzone
                handleDrop={handleDrop}
                acceptedFileTypes={{
                  "application/xml": [".xml"],
                }}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Viewer;
