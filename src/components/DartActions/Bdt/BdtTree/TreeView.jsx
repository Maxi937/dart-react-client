import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import BdtSidePanel from "../BdtSidePanel";
import { getCompileBdtQuery } from "../../../../hooks/useCompileBdt";
import BdtSequence from "./Sequence";
import { deepSearch } from "../../../../utils/search-utils";
import { BdtContext } from "../../../../contexts/useBdtSequence";

const styles = {
  container: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
  },
  sidePanel: {
    height: "inherit",
  },
};

export default function TreeView(props) {
  const context = useContext(BdtContext);

  function goToSequence(sequence) {}

  function handleNodeClick(node) {
    // const test = {
    //   type: "assert",
    //   target: "SITUS_STATE",
    //   value: "AK",
    // };
    // node.test.push(test);
    // context.addTest(node);
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.sidePanel}>
        <BdtSidePanel
          sequence={props.compile.all.sequence}
          goToSequence={goToSequence}
        />
      </Box>

      <BdtSequence
        sequence={props.compile.all.sequence}
        handleNodeClick={handleNodeClick}
      />
    </Box>
  );
}
