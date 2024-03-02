import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import SearchDocGen from "./SearchDocGen.jsx";
import SearchForm from "../DocGenSearch";
import DartModal from "../../Primitives/DartModal/index.jsx";

import moment from "moment";

const styles = {};

function DocGenStatus() {
  const [isOpen, setIsOpen] = useState(false);

  const [query, setQuery] = useState({
    startDate: moment().toISOString(),
    endDate: moment().toISOString(),
  });

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Button onClick={() => setIsOpen(true)}>Search</Button>
      </Box>

      <SearchDocGen query={query} />
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <SearchForm
          handleSearch={(query) => {
            setIsOpen(false);
            setQuery(query);
          }}
        />
      </DartModal>
    </Box>
  );
}

export default DocGenStatus;
