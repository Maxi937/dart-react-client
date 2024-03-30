import React, { useState, useEffect } from "react";
import { Box, Typography, unstable_useId } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => ({
    margin: "15px",
    borderRadius: "20px",
    border: `2px solid ${theme.palette.primaryHighlight}`,
    display: "flex",
    flexDirection: "column",
  }),
  icon: (theme, selected) => ({
    color: !selected ? "white" : theme.palette.primaryHighlight,
    transition: "all 0.2s ease",
    fontSize: "2.5rem",
    "&:hover": !selected && {
      ...theme.animations.skew,
      color: theme.palette.primaryHighlight,
    },
  }),
};

export default function BdtSideMenu(props) {
  const theme = useTheme();

  function handleClick(index) {
    props.setView(index);
  }

  return (
    <Box sx={styles.container(theme)}>
      {props.views.map((view, index) => (
        <IconButton key={index} aria-label={view.label} onClick={() => handleClick(index)}>
          {React.cloneElement(view.icon, {
            sx: styles.icon(theme, index == props.view),
          })}
        </IconButton>
      ))}
    </Box>
  );
}
