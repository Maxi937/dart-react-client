import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DocumentationCategory from "./DocumentationCategory";
import Documentation from "../Documentation";
import DocumentationTableOfContents from "./DocumentationTableOfContents";

const styles = {
  list: {
    padding: "10px",
  },
  documentationContainer: {
    flexGrow: 1,
    padding: "0px 50px",
  },
};

const drawerWidth = 240;

export default function DocumentationMenu({ documentationTree }) {
  const [selectedDocument, setSelectedDocument] = useState(null);

  console.log(selectedDocument)

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
          },
        }}
        variant="permanent"
        anchor="left"
      >
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
          <Typography>fcfff</Typography>
        )}
      </Box>
    </Box>
  );
}
