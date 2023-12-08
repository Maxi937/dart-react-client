import React from "react";
import Viewer from "./viewer.jsx";
import Box from "@mui/material/Box";

const ComparePdf = () => {
  const styles = {
    viewer: {
	  height: "inherit"
    },
  };

  return (
    <Box sx={styles.viewer}>
      <Viewer />
    </Box>
  );
};

export default ComparePdf;
