import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";

const style = {
  container: (theme) => ({
    height: "calc(100vh - 80px)",
    overflowY: "auto",
    overflowX: "hidden",

    ...theme.scrollbar,
  }),
  pagecontainer: {
    width: "calc(100vw - 34px)",
  },
  page: {
    paddingLeft: "34px",
    margin: "auto",
    width: "80%",
  },
};

const PageTemplate = (props) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={style.container(theme)}>
        <Box sx={style.pagecontainer}>
          <Box sx={style.page}>{props.children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default PageTemplate;
