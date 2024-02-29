import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDocGenStatus } from "../../hooks/useDocGenStatus.jsx";
import DocGenItem from "../DocGenItem/index.jsx";
import { jsDateToSqlDate } from "../../utils/format-utils.js";
import CenteredSpinner from "../Primitives/CenteredSpinner/index.jsx";
import DartDatePicker from "../Form/DartDatePicker/index.jsx";

const styles = {};

function DocGenStatus({ env }) {
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(thisMorning());

  function thisMorning() {
    const thisMorning = new Date(endDate);
    thisMorning.setHours(0, 0, 0, 0);
    return thisMorning;
  }

  const { data, isLoading, isError } = useDocGenStatus(env, startDate, endDate);

  if (isLoading) {
    return <CenteredSpinner />;
  }

  if (isError) {
    return <Typography>Error</Typography>;
  }

  const { docgeninfo } = data;

  return (
    <Box>
      <DartDatePicker />
      {docgeninfo.map((result, index) => {
        return (
          <DocGenItem key={`${result.doc_id}-${index}`} docgenitem={result} />
        );
      })}
    </Box>
  );
}

export default DocGenStatus;
