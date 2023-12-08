import React, { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const styles = {
  selectBox: {
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
  disabledSelectBox: {
   
  },
};

const MSelect = ({ label, choices, onSelectionChange, disabled=false }) => {
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
    <Box sx={disabled ? styles.disabledSelectBox : styles.selectBox}>
      <TextField
        InputLabelProps={{ shrink: false }}
        value={selected}
        disabled={disabled}
        label={selected ? "" : label}
        select
        onChange={handleSelectionChange}
        sx={{ minWidth: 120 }}
      >
        {mapchoices(choices)}
      </TextField>
    </Box>
  );
};

export default MSelect;
