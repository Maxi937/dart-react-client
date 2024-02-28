import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDocGenStatus } from "../../hooks/useDocGenStatus.jsx";
import DocGenItem from "../DocGenItem/index.jsx";
import { jsDateToSqlDate } from "../../utils/format-utils.js";

const styles = {};

function DocGenStatus({ env }) {
  const date = new Date();

  const thisMorning = new Date(date);
  thisMorning.setHours(0,0,0,0);

  const { data, isLoading, isError } = useDocGenStatus(
    env,
    jsDateToSqlDate(thisMorning),
    jsDateToSqlDate(date)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography>Error</Typography>;
  }

  const { docgeninfo } = data;
  console.log(docgeninfo)
  return (
    <Box>
      {docgeninfo.map((result) => {
        return <DocGenItem docgenitem={result} />;
      })}
    </Box>
  );
}

export default DocGenStatus;
