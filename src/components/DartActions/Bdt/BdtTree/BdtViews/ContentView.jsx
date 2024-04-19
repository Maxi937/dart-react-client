import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { getCompileBdtQuery } from "../../../../../hooks/useCompileBdt";
import Content from "../Content";
import ContentItem from "../Content/ContentItem";
import ContentDrawer from "../../../../Primitives/ContentDrawer";
import DartHtmlViewer from "../../../../DartHtmlViewer";
import DartButton from "../../../../Form/DartButton";

const styles = {
  container: {
    userSelect: "none",
    display: "flex",
    height: "100%",
  },
  document: {
    overflow: "auto",
  },
};

export default function ContentView(props) {
  console.log(props);


  function renderHtml() {
    let html = "";
    props.compile.content.map((content) => (html += content.html));
    return html;
  }

  console.log(renderHtml());

  return (
    <Box sx={styles.container}>
      <ContentDrawer>
        {props.compile.content.map((item) => (
          <ContentItem {...item} />
        ))}
      </ContentDrawer>

      <Box sx={styles.document}>
        <DartHtmlViewer html={renderHtml()} />
      </Box>
    </Box>
  );
}
