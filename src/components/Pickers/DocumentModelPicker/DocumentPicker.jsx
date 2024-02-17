import React, { useContext, useState } from "react";
import DocumentModel from "../../DocumentModel";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Input, InputLabel, TextField } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    position: "relative"
  },
  search: {
    margin: "20px 0px",
    width: "100%"
  },
  listcontainer: {
    backgroundColor: "transparent",
    overflow: "auto",
    maxHeight: "50vh",
  },
};

function DocumentModels({ documentModels }) {
  const [models, setModels] = useState(documentModels);

  function searchModels(e) {
    const search = documentModels.filter((model) => {
      return String(model.mdl_nm).toLowerCase().includes(String(e.target.value).toLowerCase())
    })
    setModels(search)
  }

  return (
    <Box sx={styles.container}>
      <TextField sx={styles.search} id="outlined-basic" label="Outlined" variant="outlined" onChange={searchModels}/>
      <Box sx={styles.listcontainer}>
        {models.map((model, index) => (
          <Box key={`cnter-${index}`} sx={{ position: "relative", paddingBottom: 1 }}>
            <DocumentModel key={index} documentModel={model} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default DocumentModels;
