import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDocGenStatus } from "../../hooks/useDocGenStatus.jsx";
import DocGenItem from "../DocGenItem/index.jsx";
import { jsDateToSqlDate } from "../../utils/format-utils.js";
import CenteredSpinner from "../Primitives/CenteredSpinner/index.jsx";
import DartDatePicker from "../Form/DartDatePicker/index.jsx";
import moment from "moment";

const styles = {};

function SearchDocGen({ query }) {
  const { data, isLoading, isError } = useDocGenStatus(query);

  if (isLoading) {
    return <CenteredSpinner />;
  }

  if (isError) {
    return <Typography>Error</Typography>;
  }

  const { docgeninfo } = data;

  return (
    <Box>
      {docgeninfo.map((result, index) => {
        return (
          <DocGenItem key={`${result.doc_id}-${index}`} docgenitem={result} />
        );
      })}
    </Box>
  );
}

export default SearchDocGen;
