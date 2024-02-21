import React, { useContext, useState } from "react";
import DocumentModel from "../../DocumentModel";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Input, InputLabel, TextField } from "@mui/material";
import { dartService } from "../../../service/dart-service.js";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";

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
    width: "100%",
    borderRadius: "10px",
    input: {
      backgroundColor: "black",
      transition: "all 0.2 ease",
      color: "white",
    },
  },
  listcontainer: {
    backgroundColor: "transparent",
    overflow: "auto",
  },
};

function DocumentModels({ onSelected = (document) => {} }) {
  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useQuery("models", () =>
    dartService.getXpressionDocumentModels("dev")
  );

  if (isLoading)
    return (
      <Box
        sx={{ display: "flex", height: "inherit", justifyContent: "center" }}
      >
        <CircularProgress sx={{ alignSelf: "center" }} />
      </Box>
    );

  if (error || !data.success)
    return (
      <Box
        sx={{ display: "flex", height: "inherit", justifyContent: "center" }}
      >
        <Typography sx={{ alignSelf: "center" }}>
          An unexpected error occurred {error?.message}
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
      <Box sx={styles.listcontainer}>
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
