import { Box, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";
import BdtSidePanelContent from "../Content/BdtSidePanelContent";
import BdtSidePanelAction from "../Content/BdtSidePanelAction";

const styles = {
  container: {
    display: "flex",
    gap: "5px",
  },
};

export default function RecordSetTest({ props }) {


  function getOperator(operator) {
    switch (operator) {
      case "noteod":
        return <BdtSidePanelAction>NOT EOD</BdtSidePanelAction>;
      default:
        return operator;
    }
  }

  return (
    <Box sx={styles.container}>
      <BdtSidePanelContent>{props.RecordSetTest.recordSetVar.name}</BdtSidePanelContent>
      {getOperator(props.RecordSetTest.operator)}
    </Box>
  );
}
