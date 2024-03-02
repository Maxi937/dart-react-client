import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import SearchDocGen from "./SearchDocGen.jsx";
import SearchForm from "../DocGenSearch";
import DartModal from "../Primitives/DartModal/index.jsx";
import EnvPicker from "../Pickers/EnvPicker/index.jsx";

const styles = {};

function DocGenStatus() {
  const [isOpen, setIsOpen] = useState(false);

  const [query, setQuery] = useState({
    env: "dev",
    startDate: new Date(),
    endDate: new Date(),
  });

  function thisMorning() {
    const thisMorning = new Date();
    thisMorning.setHours(0, 0, 0, 0);
    return thisMorning;
  }

  function updateQuery(property) {
    const { name, value } = property;

    setQuery({
      ...query,
      [name]: value,
    });
  }

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <EnvPicker
          onSelected={(env) => updateQuery({ name: "env", value: env })}
        />
        <Button onClick={() => setIsOpen(true)}>Search</Button>
      </Box>

      <SearchDocGen query={query} />
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <SearchForm
          handleSearch={(query) => {
            setIsOpen(false)
            setQuery(query);
          }}
        />
      </DartModal>
    </Box>
  );
}

export default DocGenStatus;
