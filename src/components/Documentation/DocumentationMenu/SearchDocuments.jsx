import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography, TextField } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
  },
  category: (theme) => ({
    color: theme.palette.primaryHighlight,
    fontSize: "32px",
    fontWeight: "700",
  }),
  document: {
    fontSize: "24px",
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
      backgroundColor: "black",
      padding: "20px",
      overflow: "auto",
      ...theme.scrollbar,
      maxHeight: "400px",
    };
  },
  searchItem: (theme) => ({
    transition: "0.2s all ease",
    cursor: "pointer",
    backgroundColor: "black",
    padding: "5px",
    "&:hover": {
      color: theme.palette.primaryHighlight,
    },
  }),
};

export default function SearchDocuments({
  documentationTree,
  selectedDocument,
  setSelectedDocument,
}) {
  const theme = useTheme();
  const [search, setSearch] = useState("");

  function handleSelect(documentation) {
    setSelectedDocument(documentation);
  }

  function searchDocumentation(tree) {
    let results = [];

    tree.entries.filter((documentation) => {
      if (documentation.entries) {
        results = results.concat(searchDocumentation(documentation));
      } else {
        if (String(documentation.displayname).toLowerCase().includes(search)) {
          results.push(documentation);
        }
      }
    });
    return results;
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
      {search && (
        <Box sx={styles.listcontainer(theme)}>
          {searchDocumentation(documentationTree).map(
            (documentation, index) => (
              <Box
                key={`cnter-${index}`}
                sx={{ position: "relative", paddingBottom: 1 }}
              >
                <Box
                  sx={styles.searchItem(theme)}
                  onClick={() => handleSelect(documentation)}
                >
                  <Typography key={index}>
                    {String(documentation.displayname).toUpperCase()}
                  </Typography>{" "}
                </Box>
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
}
