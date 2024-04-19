import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";


const styles = {
  container: (cursor) => ({
    userSelect: "none",
    display: "flex",
    height: "100%",
    cursor: cursor,
  }),
  title: (theme) => ({
    color: theme.palette.primaryHighlight,
    fontWeight: "700",
    textWrap: "nowrap",
    textTransform: "uppercase",
  }),
  drawer: (theme, width, grabbing) => ({
    flexShrink: 0,
    width: width,
    borderRight: `3px solid ${theme.palette.primaryHighlight}`,
    boxSizing: "border-box",
    backgroundColor: "black",
    ...theme.scrollbar,
    direction: "rtl",
    scrollbarGutter: "stable",
    overflowY: "auto",
    overflowX: "hidden",
  }),
  sideContent: {
    padding: "30px 0px 0px 10px",
    direction: "ltr",
  },
};

export default function ContentDrawer({children}) {
  const theme = useTheme();
  const [width, setWidth] = useState(320);
  const [cursor, setCursor] = useState("default");

  const maxWidth = 800;
  const minWidth = 10;


  const handler = (mouseDownEvent) => {
    mouseDownEvent.stopPropagation();

    if (mouseDownEvent.nativeEvent.offsetX > width - 10) {
      const startSize = width;
      const startPosition = {
        x: mouseDownEvent.pageX,
        y: mouseDownEvent.pageY,
      };

      function onMouseMove(mouseMoveEvent) {
        const width = startSize - startPosition.x + mouseMoveEvent.pageX;

        if (width > maxWidth) {
          setWidth(maxWidth - 10);
          return onMouseUp();
        }

        if (width < minWidth) {
          setWidth(minWidth + 10);
          return onMouseUp();
        }

        setWidth(width);
      }

      function onMouseUp() {
        document.body.removeEventListener("mousemove", onMouseMove);
      }

      document.body.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseup", onMouseUp, { once: true });
    }
  };

  function handleMouseOver(e) {
    if (e.nativeEvent.offsetX > width - 10) {
      setCursor("e-resize");
    } else {
      setCursor("default");
    }
  }

  return (
    <Box
      sx={styles.container(cursor)}
      onMouseOver={handleMouseOver}
      onMouseDown={handler}
    >
      <Box sx={styles.drawer(theme, width)}>
        <Box sx={styles.sideContent}>
			{children}
        </Box>
      </Box>
    </Box>
  );
}
