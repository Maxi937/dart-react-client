import React, { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const styles = {
  selectBox: {
	display: "flex",
    "& *": {
      color: "white !important",
    },

    "& .MuiOutlinedInput-root": {
      color: "white",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "transparent", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "transparent", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "transparent",
      },
      "& .MuiInputLabel-root": {
        display: "none",
      },
      "& .MuiInputLabel-shrink": {
        opacity: "0 !important",
        transition: "all 0.2s ease-in",
      },
    },
  },
  field: {
	flex: "1"
  },
};

const DartSelect = ({ label, choices=["choice1", "choice2", "choice3"], onSelectionChange, disabled=false }) => {
  const [selected, setSelected] = useState("");

  function handleSelectionChange(event) {
    setSelected(event.target.value);

    if (onSelectionChange) {
      onSelectionChange(event);
    }
  }

  function mapchoices(choices) {
    if (choices) {
      return choices.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ));
    }
  }

  return (
    <Box sx={styles.selectBox}>
      <TextField
        InputLabelProps={{ shrink: false }}
        value={selected}
        disabled={disabled}
        label={selected ? "" : label}
        select
        onChange={handleSelectionChange}
        sx={styles.field}
      >
        {mapchoices(choices)}
      </TextField>
    </Box>
  );
};

export default DartSelect;
