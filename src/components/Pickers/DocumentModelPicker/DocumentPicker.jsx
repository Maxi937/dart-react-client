import React, { useContext, useState } from "react";
import DocumentModel from "../../DocumentModel";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
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
    dartService.getXpressionDocumentModels("prd")
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <div>An error occurred: {error.message}</div>;

  function searchModels() {
    return data.models.filter((model) => {
      return String(model.mdl_nm).toLowerCase().includes(search);
    });
  }

  function HandleDocumentClick(document) {
    onSelected(document)
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
