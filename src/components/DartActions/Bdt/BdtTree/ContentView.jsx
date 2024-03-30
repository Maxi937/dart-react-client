import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { getCompileBdtQuery } from "../../../../hooks/useCompileBdt";
import Content from "./Content";

const styles = {
  container: {
    padding: "10px",
  },
};

export default function ContentView(props) {
  const textClassIds = () =>
    props.compile.solved.contentItems.map(
      (item) => item.InsertTextpiece.textClassId
    );

  return (
    <Box sx={styles.container}>
      <Content
        env={props.env}
        documentModel={props.documentModel}
        textClassIds={textClassIds()}
      />
    </Box>
  );
}
