import React, { useContext, useState } from "react";
import { Input, InputLabel, Box, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const styles = {
  hidden: {
    display: "none",
  },
  emptyicon: {
    transition: "all 0.2s ease",
    color: "grey",
    "&:hover": {
      color: "gold",
      cursor: "pointer",
    },
  },
  filledicon: {
    transition: "all 0.2s ease",
    color: "gold",
    "&:hover": {
      color: "gold",
      cursor: "pointer",
      filter: "brightness(110%)",
    },
  },
  container: {},
  content: {
    display: "flex",
    gap: "3px",
    alignItems: "end",
  },
};

const Filepicker = ({
  selected,
  accept,
  handleFileSelected = (file) => {},
}) => {
  function handleFileChange(e) {
    const file = e.target.files[0];

    if (file) {
      handleFileSelected(file);
    }
  }

  return (
    <InputLabel htmlFor="import-button" style={styles.container}>
      <Input
        id="import-button"
        inputProps={{
          accept: accept,
        }}
        onChange={handleFileChange}
        style={styles.hidden}
        type="file"
      />
      <Box sx={styles.content}>
        {selected ? (
          <FolderIcon sx={styles.filledicon} fontSize="large" />
        ) : (
          <FolderIcon sx={styles.emptyicon} fontSize="large" />
        )}
        <Typography color={"white"}>{selected.name}</Typography>
      </Box>
    </InputLabel>
  );
};

export default Filepicker;
