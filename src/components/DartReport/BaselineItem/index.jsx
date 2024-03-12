import React, { useContext, useState } from "react";
import { useTheme } from "@emotion/react";
import { Typography, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import DartModal from "../../Primitives/DartModal";
import BaselineItemDetail from "./BaselineItemDetail";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      gap: "5px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  outerContainer: {},
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  modelcode: {
    bottom: "20px",
    fontSize: "10px",
    fontStyle: "italic",
  },
  modeldsc: {
    paddingTop: "20px",
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
};

export default function BaselineItem({ baselineItem, code }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <Paper sx={styles.container(theme)} onClick={handleClick}>
      <Box sx={styles.docInfo}>
        <Typography>{baselineItem.name}</Typography>
      </Box>
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <BaselineItemDetail baselineItem={baselineItem} code={code} />
      </DartModal>
    </Paper>
  );
}
