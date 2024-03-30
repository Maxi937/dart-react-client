import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { render } from "./components";
import { v4 as uuidv4 } from "uuid";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const styles = {
  container: {
    width: "inherit",
    whiteSpace: "nowrap",
  },
  contentContainer: {
    display: "flex",
  },
  icon: (canOpen) => ({
    color: canOpen ? "white" : "transparent",
  }),

  items: (theme) => ({
    marginLeft: "14px",
    borderLeft: `solid 2px ${theme.palette.primaryBackground}`,
    display: "flex",
    flexDirection: "column",
  }),
  content: (theme) => ({
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    transition: "0.2s all ease",
    background: "black",
    padding: "5px",
    "&:hover": {
      cursor: "pointer",
      background: theme.palette.primaryBackground,
    },
  }),
};

export default function Container(props) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    if (isOpen) {
      return setIsOpen(false);
    }

    if (props.items?.length >= 1) {
      return setIsOpen(true);
    }
  }

  function canOpen() {
    if (isOpen && props.items?.length >= 1) {
      return true;
    }
    return false;
  }

  function isOpenable() {
    return props.items?.length >= 1
  }

  function handleDoubleClick(e) {
    console.log(props)
    props.onSequenceClick() 
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentContainer}>
        <IconButton onClick={open} aria-label="open" size="small">
          {isOpen ? (
            <KeyboardArrowDownIcon sx={styles.icon(true)} />
          ) : (
            <KeyboardArrowRightIcon sx={styles.icon(isOpenable())} />
          )}
        </IconButton>

        <Box onDoubleClick={handleDoubleClick} sx={styles.content(theme, open)}>
          {props.Icon()}
          {props.Content()}
        </Box>
      </Box>

      {canOpen() && (
        <Box sx={styles.items}>
          {props.items.map((prop, index) => (
            <Box sx={styles.item} key={index}>
              {render(prop)}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
