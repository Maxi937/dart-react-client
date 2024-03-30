import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import DocumentResult from "../../XpressionDocument";
import { useXpressionDocuments } from "../../../hooks/useXpressionDocuments";
import CenteredSpinner from "../../Primitives/CenteredSpinner";

const styles = {
  container: {
    display: "flex",
    padding: "50px",
    flexDirection: "column",
    gap: "15px",
  },
  loadingState: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
};

function DocumentResults({ env, documentModelCode, files }) {
  const documents = useXpressionDocuments(env, documentModelCode, files);

  function areSomeStillLoading() {
    if (documents.some((r) => r.isLoading)) {
      return true;
    }
    return false;
  }

  return (
    <Box sx={styles.container}>
      {documents.map((result) => {
        if (result.isSuccess) {
          return <DocumentResult document={result.data.document} />;
        }
        if (result.isError) {
          return (
            <Box sx={styles.loadingState}>
              <Typography>An Unexpected Error Occured</Typography>
            </Box>
          );
        }
      })}
      {areSomeStillLoading() && <CenteredSpinner />}
    </Box>
  );
}

export default DocumentResults;
