import React, { useContext, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Spacer from "../../../../Primitives/Spacer";

const styles = {
  header: {
    background: "black",
    width: "fit-content",
    borderRadius: "20px",
    padding: "5px 20px",
    margin: "auto",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    "& > *": {
      fontSize: "24px",
    },
  },
  testInfo: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  status: (pass) => ({
    color: pass ? "lightgreen" : "red",
    fontSize: "24px",
  }),
  revunit: {
    margin: "5px",
    padding: "10px",
    background: "black",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
};

export default function RevisionUnitDetail(props) {
  const theme = useTheme();

  function parseRevUnitCount(countStr) {
    const count = parseInt(countStr);

    if (count > 1) {
      return <Typography color={"red"}>{countStr}</Typography>;
    }

    return <Typography color={"lightgreen"}>{countStr}</Typography>;
  }

  return (
    <Box>
      <Spacer padding={"5px"}></Spacer>
      <Box sx={styles.header}>
        <Typography>Status:</Typography>
        <Typography sx={styles.status(props.pass)}>
          {props.pass ? "pass" : "fail"}
        </Typography>
      </Box>
      <Spacer padding={"2px"}></Spacer>

      {props.result.map((revunit) => (
        <Box sx={styles.revunit}>
          <Box sx={{ width: "85%", overflowWrap: "break-word" }}>
            <Typography flexWrap={true}>{revunit.first}</Typography>
          </Box>
          <Box sx={{ flex: 1, justifySelf: "end", textAlign: "right" }}>
            <Typography>{parseRevUnitCount(revunit.second)}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
