import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";

const styles = {
  field: (theme) => ({
    flex: "1",
    padding: "5px",
    "& .MuiInput-underline:before": { borderBottomColor: "white" },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primaryHighlight,
    },
  }),
};

export default function DartTextField({
  placeholder = "Field",
  value,
  onSetValue,
}) {
  const theme = useTheme();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: "flex" }}
    >
      <TextField
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
        sx={styles.field}
        id="standard-basic"
        variant="standard"
        placeholder={placeholder}
        InputProps={{
          className: styles.field(theme),
        }}
      />
    </Box>
  );
}
