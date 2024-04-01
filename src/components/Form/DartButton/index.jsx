import React, { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { Box, CircularProgress } from "@mui/material";

const styles = {
  loader: {
    color: "black",
    position: "absolute",
    fontSize: "5px",
  },
  button: (theme, loading, disabled) => {
    if (disabled) {
      return {
        color: "grey",
        background: "black",
        borderRadius: "5px",
        elevation: "15px",
        border: `2px solid black`,
        "&:hover": {
          background: "black",
        },
      };
    }
    return {
      color: loading ? "transparent" : "white",
      background: loading ? theme.palette.primaryHighlight : "black",
      borderRadius: "5px",
      elevation: "15px",
      border: `2px solid ${theme.palette.primaryHighlight}`,
      transition: "all 0.2s ease",
      "&:hover": {
        color: loading ? "transparent" : "black",
        background: theme.palette.primaryHighlight,
        transform: !loading && "scale(0.95)",
      },
    };
  },
};

const DartButton = ({
  handleClick = () => {},
  disabled = false,
  loading = false,
  children,
}) => {
  const theme = useTheme();

  function handleOnClick() {
    if(!disabled) {
      handleClick()
    }
  }

  return (
    <Button
      onClick={handleOnClick}
      sx={styles.button(theme, loading, disabled)}
    >
      {children ? children : "Button"}
      {loading && (
        <CircularProgress
          size={"1.5rem"}
          thickness={7}
          sx={styles.loader}
        ></CircularProgress>
      )}
    </Button>
  );
};

export default DartButton;
