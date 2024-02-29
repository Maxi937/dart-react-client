import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import DocumentationCategory from "./DocumentationCategory";
import Documentation from "../Documentation";
import SearchDocuments from "./SearchDocuments";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const styles = {
  container: {
    display: "flex",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      backgroundColor: "black",
    },
  },
  list: {
    padding: "10px",
  },
  documentationContainer: {
    flexGrow: 1,
    padding: "0px 50px",
  },
  iconContainer: {
    marginLeft: "auto",
  },
  icon: {
    transition: "all 0.2s ease",
    justifySelf: "left",
    color: "white",
    "&:hover": {
      color: "goldenrod",
    },
  },
};

export default function DocumentationMenu({ documentationTree }) {
  const [selectedDocument, setSelectedDocument] = useState(null);

  function handleIconClick() {
    setSelectedDocument(null);
  }

  return (
    <Box sx={styles.container}>
      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        <Box sx={styles.iconContainer}>
          <IconButton aria-label="searchModel" onClick={handleIconClick}>
            <SearchIcon sx={styles.icon} />
          </IconButton>
        </Box>

        <List sx={styles.list}>
          {documentationTree.entries.map((document) => {
            return (
              <DocumentationCategory
                key={`category-${document.name}`}
                documentationCategory={document}
                onSelectItem={(item) => setSelectedDocument(item)}
                selected={selectedDocument}
              />
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={styles.documentationContainer}>
        {selectedDocument ? (
          <Documentation document={selectedDocument} />
        ) : (
          <SearchDocuments
            documentationTree={documentationTree}
            selectedDocument={selectedDocument}
            setSelectedDocument={setSelectedDocument}
          />
        )}
      </Box>
    </Box>
  );
}
