import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import SearchDocGen from "./SearchDocGen.jsx";

import moment from "moment";

const styles = {};

function DocGenStatus() {
  const [query, setQuery] = useState({
    startDate: moment().toISOString(),
    endDate: moment().toISOString(),
  });

  return (
    <Box>
      <SearchDocGen query={query} setQuery={setQuery}/>
    </Box>
  );
}

export default DocGenStatus;
