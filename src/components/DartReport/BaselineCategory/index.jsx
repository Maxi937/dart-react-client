import * as React from "react";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import BaselineItem from "../BaselineItem"
import { v4 as uuidv4} from "uuid"

const styles = {
  category: (theme) => ({
    cursor: "pointer",
    padding: "20px 0px",
    color: theme.palette.primaryHighlight,
    transition: "all 0.2s ease",
    "&:hover": {
      color: "goldenrod",
    },
  }),
  baselinesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginLeft: "10px",
  },
};

export default function BaselineCategory({ baselineCategory }) {
  return (
    <Box>
      <Box sx={styles.baselinesContainer}>
        {baselineCategory.entries.map((item) => (
          <BaselineItem key={uuidv4()} baselineItem={item} code={baselineCategory.name} />
        ))}
      </Box>
    </Box>
  );
}
