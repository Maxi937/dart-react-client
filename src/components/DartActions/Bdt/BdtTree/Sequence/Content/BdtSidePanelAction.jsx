import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  container: (props) => ({
    color: props.color ? props.color : "white",
    fontSize: props.fontSize ? props.fontSize : "inherit",
    "&:>": {
      fontSize: "10px",
    },
  }),
};

export default function BdtSidePanelAction(props) {
  return (
    <Typography fontSize={"10px"} color={"orange"} fontWeight={700}>
      {props.children}
    </Typography>
  );
}
