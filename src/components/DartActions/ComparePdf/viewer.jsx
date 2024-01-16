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
    padding: "10px 0 10px 0",
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
    display: "flex",
    gap: "100px",
    alignItems: "stretch",
    height: "90%",
    margin: "auto",
  },
  candidate: {
    width: "50%",
    padding: "30px"
  },
};

const Viewer = () => {
  const [pdfFile, setpdfFile] = useState("");
  const [candidate, setCandidate] = useState("");
  const [baseline, setBaseline] = useState("");

  function handleDropCandidate(file) {
    setCandidate(file);
  }

  function handleDropBaseline(file) {
    setBaseline(file);
  }

  function handleClear() {
    setpdfFile();
  }

  async function handleSubmit() {
    if (!candidate || !baseline) {
      return console.log("all fields not completed");
    }

    const data = await dartService.compare(candidate, baseline);
    console.log(data)


    if (data.success) {
      const buf = Uint8Array.from(data.filedata.data);
      const file = new File([buf], data.filename, { type: "application/pdf" });
      setpdfFile(file);
    }
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.form}>
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
              Compare
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
              <Box sx={styles.candidate}>
                {" "}
                <MDropzone
                  handleDrop={handleDropBaseline}
                  acceptedFileTypes={{
                    "application/pdf": [".pdf"],
                  }}
                />{" "}
              </Box>
              <Box sx={styles.candidate}>
                {" "}
                <MDropzone
                  handleDrop={handleDropCandidate}
                  acceptedFileTypes={{
                    "application/pdf": [".pdf"],
                  }}
                />{" "}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Viewer;
