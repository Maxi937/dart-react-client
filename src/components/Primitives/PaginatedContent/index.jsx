import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useTheme } from "@emotion/react";

const styles = {
  results: (theme) => ({
    padding: "10px",
  }),
  paginatorContainer: (theme) => ({
    display: "flex",
    alignItems: "center",
  }),
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    flex: 1,
    justifyContent: "right",
    display: "flex",
    alignItems: "center",
  },
  icons: (direction, theme) => ({
    fontSize: "20px",
    padding: "10px",
    color: "white",
    borderRadius: "100px",
    backgroundColor: "black",
    transform: direction == "left" && "rotate(180deg)",
    transition: "all ease 0.2s",
    "&:hover": {
      background: theme.palette.primaryHighlight,
    },
  }),
};

function PaginateContent({ data, pageSize, title, render = (item) => {} }) {
  const theme = useTheme();
  const [pageNumber, setPageNumber] = useState(0);
  const maxPages = parseInt(data.length / pageSize);

  function handleForwardClick() {
    if (pageNumber != maxPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function handleBackwardClick() {
    if (pageNumber != 0) {
      setPageNumber(pageNumber - 1);
    }
  }

  const results = data.slice(
    pageNumber * pageSize,
    pageNumber * pageSize + pageSize
  );

  return (
    <Box>
      <Box sx={styles.paginatorContainer}>
        <Box sx={styles.left}>
          {title}
        </Box>
        <Box sx={styles.right}>
          <Box>
            <Typography>
              {pageNumber + 1} of {maxPages + 1}{" "}
              {maxPages === 0 ? "page" : "pages"}
            </Typography>
          </Box>
          <IconButton aria-label="backward" onClick={handleBackwardClick}>
            <ForwardRoundedIcon sx={styles.icons("left", theme)} />
          </IconButton>
          <IconButton aria-label="forward" onClick={handleForwardClick}>
            <ForwardRoundedIcon sx={styles.icons("right", theme)} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.results(theme)}>
        {results.map((result, index) => render(result))}
      </Box>
    </Box>
  );
}

export default PaginateContent;
