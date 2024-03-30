import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import FolderIcon from "@mui/icons-material/Folder";
import ContentItem from "./ContentItem";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      padding: "20px",
      backgroundColor: theme.palette.primaryBackground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  chips: {
    flex: 1,
    justifyContent: "flex-end",
    display: "flex",
    gap: "10px",
  },
  chiplabel: {
    fontSize: "11px",
    fontWeight: "800",
    textTransform: "uppercase",
  },
  icon: {
    color: "turquoise",
  },
  contentItems: {
    marginLeft: "25px"
  },
};

export default function ContentGroup(props) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box>
      <Paper sx={styles.container(theme)} onClick={() => setIsOpen(!isOpen)}>
        <FolderIcon sx={styles.icon}></FolderIcon>
        <Box sx={styles.docInfo}>
          <Typography>{props.contentGroup.CONTENT_GROUP_NAME}</Typography>
        </Box>
        <Box sx={styles.chips}>
          {/* <Chip
          style={{
            backgroundColor: docgenTypeColor(documentModel.doc_gen_sys_cd),
          }}
          label={
            <Typography sx={styles.chiplabel}>
              {documentModel.doc_gen_sys_cd}
            </Typography>
          }
        /> */}
        </Box>
      </Paper>
      {isOpen && (
        <Box sx={styles.contentItems}>
          {props.contentGroup.CONTENT_ITEMS.map((item) => (
            <ContentItem {...item} />
          ))}
        </Box>
      )}
    </Box>
  );
}
