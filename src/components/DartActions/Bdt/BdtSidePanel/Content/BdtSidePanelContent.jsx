import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  content: (props) => ({
    color: props.color ? props.color : "white",
    fontSize: props.fontSize ? props.fontSize : "10px",
    fontWeight: props.fontWeight ? props.fontWeight : "",
  }),
};

export default function BdtSidePanelContent(props) {
  return <Typography sx={styles.content(props)}>{props.children}</Typography>;
}
