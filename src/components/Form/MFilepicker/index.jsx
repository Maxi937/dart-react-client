import React, { useContext, useState } from "react";
import { Input, InputLabel } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const styles = {
  hidden: {
    display: "none",
  },
  emptyicon: {
    transition: "all 0.2s ease",
    padding: "5px",
    color: "grey",
    "&:hover": {
      color: "gold",
      cursor: "pointer",
    },
  },
  filledicon: {
    transition: "all 0.2s ease",
    padding: "5px",
    color: "gold",
    "&:hover": {
      color: "gold",
      cursor: "pointer",
      filter: "brightness(110%)"
    },
  },
  container: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
};

const Filepicker = ({ accept, onInputChange}) => {
  const [file, setSelectedFile] = useState("");

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(e.target.files[0]);
    }
    onInputChange(e);
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
      {file ? (
        <FolderIcon sx={styles.filledicon} fontSize="large" />
      ) : (
        <FolderIcon sx={styles.emptyicon} fontSize="large" />
      )}
    </InputLabel>
  );
};

export default Filepicker;
