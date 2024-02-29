import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const styles = {
  notSelected: {
    transition: "all 0.2s ease",
    "&:hover": {
      color: "goldenrod",
    },
  },
  selected: {
    color: "violet",
  },
};

export default function DocumentationItem({
  documentationItem,
  onSelected,
  selectedDocument,
}) {
  function handleClick() {
    onSelected(documentationItem);
  }

  return (
    <ListItem key={documentationItem.path} disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          sx={selectedDocument == documentationItem ? styles.selected : styles.notSelected}
          primary={String(documentationItem.displayname).toUpperCase()}
        />
      </ListItemButton>
    </ListItem>
  );
}
