import React from "react";
import { Box, CircularProgress } from "@mui/material";

const styles = {
  container: {
    padding: "50px",
    display: "flex",
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "transparent",
  },
};

function CenteredSpinner() {
  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
}

export default CenteredSpinner;
