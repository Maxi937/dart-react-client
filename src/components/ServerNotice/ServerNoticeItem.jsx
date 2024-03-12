import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const style = {
  container: {
    padding: "20px 25px",
  },
  title: (theme) => ({
	fontSize: "1.2rem",
	padding: "0px 0px 10px 0px",
    color: theme.palette.primaryHighlight,
  }),
};

const ServerNoticeItem = ({ title, data }) => {
  const theme = useTheme();
  return (
    <Box sx={style.container}>
      <Typography sx={style.title(theme)}>{title}</Typography>
      <Typography>{data}</Typography>
    </Box>
  );
};

export default ServerNoticeItem;
