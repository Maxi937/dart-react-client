import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import DartDropzone from "../../Form/DartDropzone/index.jsx";
import CompareResult from "./CompareResult.jsx";
import { cancelXpressionDocumentsQuery } from "../../../hooks/useXpressionDocuments.jsx";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
  },
  topBar: {
    justifyContent: "center",
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
  compareContainer: {
	display: "flex"
  },
  dropzone: {
	flexGrow: 1,
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

function CompareForm() {
  const [cancelled, setCancelled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [candidate, setCandidate] = useState(null);
  const [baseline, setBaseline] = useState(null);
  const [canGenerate, setCanGenerate] = useState(false);

  useEffect(() => {
	console.log(baseline)
	console.log(candidate)
    if (validate()) {
      return setCanGenerate(true);
    }
    return setCanGenerate(false);
  });

  function validate() {
    if (candidate && baseline) {
      return true;
    }
    return false;
  }

  if (cancelled) {
    // todo
  }

  function handleClear() {
    setCancelled(true);
    setCandidate(null);
    setBaseline(null);
    setFormSubmitted(false);
  }

  function handleSubmit() {
    if (!validate()) {
      return console.log("all fields not completed");
    }
    setFormSubmitted(true);
  }

  return (
    <Box>
      <Box sx={styles.topBar}>
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
        <CompareResult baseline={baseline} cadidate={candidate} />
      ) : (
        <Box sx={styles.compareContainer}>
          <Box sx={styles.dropzone}>
            <DartDropzone
              acceptedFileTypes={{ "application/pdf": [".pdf"] }}
              handleDrop={(droppedFiles) => setBaseline(droppedFiles[0])}
			  singleFile = {true}
            />
          </Box>

          <Box sx={styles.dropzone}>
            <DartDropzone
              acceptedFileTypes={{ "application/pdf": [".pdf"] }}
              handleDrop={(droppedFiles) => setCandidate(droppedFiles[0])}
			  singleFile = {true}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CompareForm;
