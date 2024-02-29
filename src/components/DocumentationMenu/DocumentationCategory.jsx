import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DocumentationItem from "./DocumentationItem";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const styles = {
  category: (theme) => ({
    cursor: "pointer",
    color: theme.palette.primaryHighlight,
    transition: "all 0.2s ease",
    "&:hover": {
      color: "goldenrod",
    },
  }),
  selectedCategory: {
	cursor: "pointer",
    color: "violet",
  },
};

export default function DocumentationCategory({
  documentationCategory,
  onSelectItem,
  selected
}) {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  function handleItemSelected(item) {
    onSelectItem(item);
  }

  if (documentationCategory.entries?.length >= 1) {
    return (
      <>
        <ListItem
          sx={styles.category}
          key={documentationCategory.path}
          disablePadding
          onClick={() => setIsOpen(!isOpen)}
        >
          <ListItemText
            primary={String(documentationCategory.displayname).toUpperCase()}
          />
        </ListItem>
        {isOpen && (
          <List disablePadding>
            {documentationCategory.entries.map((item) => (
              <DocumentationItem
                key={`${documentationCategory}-${item.displayname}`}
                documentationItem={item}
                onSelected={handleItemSelected}
				selectedDocument={selected}
              />
            ))}
          </List>
        )}

        <Divider sx={{ padding: "10px" }} />
      </>
    );
  }

  if (!documentationCategory.entries) {
    return (
      <>
        <ListItem
          sx={
            selected == documentationCategory
              ? styles.selectedCategory
              : styles.category(theme)
          }
          key={documentationCategory.path}
          disablePadding
          onClick={() => handleItemSelected(documentationCategory)}
        >
          <ListItemText
            primary={String(documentationCategory.displayname).toUpperCase()}
          />
        </ListItem>
        <Divider sx={{ padding: "10px" }} />
      </>
    );
  }
}
