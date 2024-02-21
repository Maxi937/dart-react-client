import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useCompare } from "../../../hooks/useCompare";

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

function CompareResults({ baseline, candidate }) {
  console.log(baseline)
  console.log(candidate)
  const {data, isLoading, isError} = useCompare(baseline, candidate);

  console.log(data);

  if (isLoading) {
    return <Typography>is Loading</Typography>;
  }

  if (isError) {
    return <Typography>is Error</Typography>;
  }

  return <Typography>is Done</Typography>;
}

export default CompareResults;
