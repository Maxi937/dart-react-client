import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import DartDatePicker from "../Form/DartDatePicker/index.jsx";
import EnvPicker from "../Pickers/EnvPicker/index.jsx";
import SearchField from "./DocGenSearchField.jsx";
import DartTextField from "../Form/DartTextField/index.jsx";
import DocumentModelPicker from "../Pickers/DocumentModelPicker";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => ({
    height: "inherit",
    display: "flex",
    flexDirection: "column",
  }),
  topBar: (theme) => ({
    color: "black",
    backgroundColor: theme.palette.primaryHighlight,
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: "7px",
    gap: "140px",
    display: "flex",
    "& > p": {
      padding: "10px",
      fontSize: "13px",
      fontWeight: "600",
      justifySelf: "center",
    },
  }),
  docInfoContainer: (theme) => ({
    borderLeft: `2px solid ${theme.palette.primaryHighlight}`,
    borderRight: `2px solid ${theme.palette.primaryHighlight}`,
    borderTop: `2px solid ${theme.palette.primaryHighlight}`,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "35px",
    ...theme.scrollbar,
  }),
  actions: (theme) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    padding: "10px",
    border: `2px solid ${theme.palette.primaryHighlight}`,
  }),
  searchButton: (theme) => ({
    color: "white",
    fontWeight: "700",
    boxShadow: "24px",
    "&:hover": {
      backgroundColor: theme.palette.primaryHighlight,
    },
  }),
};

function SearchDocGenForm({ handleSearch = (query) => {} }) {
  const defaultValues = {
    startDate: new Date(),
    endDate: new Date(),
    code: "",
    env: "",
    correlationId: "",
    filenetId: "",
  };

  const theme = useTheme();
  const [query, setQuery] = useState(defaultValues);

  function thisMorning() {
    const thisMorning = new Date();
    thisMorning.setHours(0, 0, 0, 0);
    return thisMorning;
  }

  function handleSearchClick() {
    handleSearch(query);
  }

  function updateQuery(property) {
    const { name, value } = property;

    setQuery({
      ...query,
      [name]: value,
    });
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.topBar}>
        <Typography>Search</Typography>
      </Box>

      <Box sx={styles.docInfoContainer}>
        <EnvPicker
          onSelected={(env) => updateQuery({ name: "env", value: env })}
        />

        <Box sx={{ display: "flex", gap: "20px" }}>
          <SearchField header={"From"}>
            <DartDatePicker
              value={query.startDate}
              setValue={(value) =>
                updateQuery({ name: "startDate", value: value })
              }
            />
          </SearchField>

          <SearchField header={"To"}>
            <DartDatePicker
              value={query.endDate}
              setValue={(value) =>
                updateQuery({ name: "endDate", value: value })
              }
            />
          </SearchField>
        </Box>

        <SearchField header={"Document Model"}>
          <DocumentModelPicker
            onSelected={(selected) => {
              updateQuery({ name: "code", value: selected.mdl_cd });
            }}
          />
        </SearchField>

        <SearchField header={"Case ID"}>
          <DartTextField
            value={query.caseId}
            onSetValue={(value) =>
              updateQuery({ name: "caseId", value: value })
            }
          />
        </SearchField>

        <SearchField header={"Status"}>
          <DartTextField
            value={query.status}
            onSetValue={(value) =>
              updateQuery({ name: "status", value: value })
            }
          />
        </SearchField>

        <SearchField header={"Correlation ID"}>
          <DartTextField
            value={query.correlationId}
            onSetValue={(value) =>
              updateQuery({ name: "correlationId", value: value })
            }
          />
        </SearchField>

        <SearchField header={"Filenet ID"}>
          <DartTextField
            value={query.filenetId}
            onSetValue={(value) =>
              updateQuery({ name: "filenetId", value: value })
            }
          />
        </SearchField>
      </Box>

      <Box sx={styles.actions}>
        <Button sx={styles.searchButton(theme)} onClick={handleSearchClick}>
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default SearchDocGenForm;
