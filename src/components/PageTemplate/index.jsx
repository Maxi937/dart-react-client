import React from "react";
import Box from "@mui/material/Box";

const style = {
  container: {
	margin: "auto",
	width: "80%"
  },
};

const PageTemplate = (props) => {
  return (
    <>
      <Box sx={style.container}>{props.children}</Box>
    </>
  );
};

export default PageTemplate;
