import React, { useContext, useState } from "react";
import DocumentModel from "../../DocumentModel";
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useDocumentModels } from "../../../hooks/useDocumentModels.jsx";
import { useTheme } from "@emotion/react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    position: "relative",
    height: "inherit",
  },
  search: {
    margin: "20px 0px",
    borderRadius: "10px",
    input: {
      backgroundColor: "black",
      transition: "all 0.2 ease",
      color: "white",
    },
  },
  listcontainer: (theme) => {
    return {
      padding: "20px",
      backgroundColor: "transparent",
      overflow: "auto",
      ...theme.scrollbar,
    };
  },
};

function DocumentModels({ onSelected = (document) => {} }) {
  const [search, setSearch] = useState("");
  const theme = useTheme();

  const { data, isError, error, isLoading } = useDocumentModels("dev");

  if (isLoading)
    return (
      <Box
        sx={{ display: "flex", height: "inherit", justifyContent: "center" }}
      >
        <CircularProgress sx={{ alignSelf: "center" }} />
      </Box>
    );

  if (isError)
    return (
      <Box
        sx={{ display: "flex", height: "inherit", justifyContent: "center" }}
      >
        <Typography sx={{ color: "red", alignSelf: "center" }}>
          Service unavailable
        </Typography>
      </Box>
    );

  function searchModels() {
    return data.models.filter((model) => {
      return String(model.mdl_nm).toLowerCase().includes(search);
    });
  }

  function HandleDocumentClick(document) {
    onSelected(document);
  }

  return (
    <Box sx={styles.container}>
      <TextField
        placeholder={"Search"}
        sx={styles.search}
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setSearch(String(e.target.value).toLowerCase())}
      />
      <Box sx={styles.listcontainer(theme)}>
        {searchModels().map((model, index) => (
          <Box
            key={`cnter-${index}`}
            sx={{ position: "relative", paddingBottom: 1 }}
          >
            <DocumentModel
              key={index}
              documentModel={model}
              onClick={HandleDocumentClick}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default DocumentModels;
