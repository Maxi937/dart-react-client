import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { getCompileBdtQuery } from "../../../../hooks/useCompileBdt";
import CenteredSpinner from "../../../Primitives/CenteredSpinner";
import { BdtContext } from "../../../../contexts/useBdtSequence";
import Test from "./Tests";

const styles = {
  container: {},
};

export default function TestView(props) {
  const context = useContext(BdtContext);

  return (
    <Box>
      {context.tests.map((action) =>
        action.test?.map((test) => <Test {...test} />)
      )}
    </Box>
  );
}
