import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";

const style = {
  container: (theme) => ({
    height: "80vh",
    overflow: "auto",
    paddingTop: "50px",
    margin: "auto",
    ...theme.scrollbar,
  }),
  pagecontainer: {
    width: "80%",
    margin: "auto"

  }
};

const PageTemplate = (props) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={style.container}>
        <Box sx={style.pagecontainer}>{props.children}</Box>
      </Box>
    </>
  );
};

export default PageTemplate;
