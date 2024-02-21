import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker";
import EnvPicker from "../../Pickers/EnvPicker/index.jsx";
import DartDropzone from "../../Form/DartDropzone";
import { useMutation, useQueries } from "react-query";
import FormLoadingOverlay from "./FormLoadingOverlay.jsx";
import FormSuccessOverlay from "./FormSuccessOverlay.jsx";
import DocumentResult from "./DocumentResult.jsx";

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [files, setSelectedFiles] = useState([]);
  const [documentModel, setDocumentModel] = useState(null);
  const [canGenerate, setCanGenerate] = useState(false);
  const [env, setEnv] = useState("");

  useEffect(() => {
    console.log(formSubmit);
    if (files.length >= 1 && env && documentModel) {
      return setCanGenerate(true);
    }
    return setCanGenerate(false);
  });

  // const formSubmit = useMutation(
  //   async () =>
  //     await Promise.all(
  //       files.map(
  //         async (file) =>
  //           await dartService.generateXpression(env, documentModel.mdl_cd, file)
  //       )
  //     )
  // );

  const formSubmit = useQueries(
    files.map((file) => {
      return {
        queryKey: ["file", file.path],
        queryFn: () =>
          dartService.generateXpression(env, documentModel.mdl_cd, file),
        enabled: formSubmitted,
      };
    })
  );

  const formLoading = formSubmit.some((result) => result.isLoading || result.isSuccess);

  //   const formSubmit = useMutation(
  //   async () =>
  //     await Promise.all(
  //       files.map(
  //         async (file) =>
  //           await dartService.generateXpression(env, documentModel.mdl_cd, file)
  //       )
  //     )
  // );

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

  function handleSubmit() {
    if (!files.length >= 1 || !documentModel || !env) {
      return console.log("all fields not completed");
    }
    setFormSubmitted(true);

    // const buf = Uint8Array.from(data.filedata.data);
    // const file = new File([buf], data.filename, { type: "application/pdf" });
    // setpdfFile(file);
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

      {formSubmitted ? (
        <Box sx={styles.results}>
          {formSubmit.map((result) => {
            if (result.isSuccess) {
              return <DocumentResult document={result.data.document} />;
            }

            if (result.isLoading) {
              return (
                <Box
                  sx={{
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px"
                  }}
                >
                  <CircularProgress></CircularProgress>
                </Box>
              );
            }
          })}
        </Box>
      ) : (
        <Box sx={styles.dropzone}>
          <DartDropzone
            acceptedFileTypes={{ "text/xml": [".xml"] }}
            handleDrop={handleDrop}
          />
        </Box>
      )}

      {/* <FormLoadingOverlay disabled={formSubmit.isLoading} /> */}
    </Box>
  );
}

export default GenerateForm;
