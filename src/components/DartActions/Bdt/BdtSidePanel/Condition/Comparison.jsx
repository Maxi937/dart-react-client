import { Box, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";
import BdtSidePanelContent from "../Content/BdtSidePanelContent";

const styles = {
  container: {
    display: "flex",
    gap: "5px",
  },
};

function Equals() {
  return (
    <BdtSidePanelContent color="LightGreen" fontWeight="900">
      =
    </BdtSidePanelContent>
  );
}

function NotEquals() {
  return (
    <BdtSidePanelContent color="red" fontWeight="900">
      !=
    </BdtSidePanelContent>
  );
}

function GreaterThan() {
  return (
    <BdtSidePanelContent color="orange" fontWeight="900">
      {">"}
    </BdtSidePanelContent>
  );
}

function LessThan() {
  return (
    <BdtSidePanelContent color="orange" fontWeight="900">
      {"<"}
    </BdtSidePanelContent>
  );
}

function GreaterThanEqual() {
  return (
    <BdtSidePanelContent color="orange" fontWeight="900">
      {">="}
    </BdtSidePanelContent>
  );
}

function LessThanEqual() {
  return (
    <BdtSidePanelContent color="orange" fontWeight="900">
      {"<="}
    </BdtSidePanelContent>
  );
}

function getCompareFirstValue(type) {
  const typeData = type[Object.keys(type)[0]];

  switch (Object.keys(type)[0]) {
    case "Variable":
      return typeData.name;
    case "DbField":
      return typeData.name;
    case "Value":
      return typeData.value;
  }
}

function getCompareSecondValue(type) {
  const typeData = type[Object.keys(type)[0]];

  switch (Object.keys(type)[0]) {
    case "Variable":
      return typeData.name;
    case "DbField":
      return typeData.name;
    case "Value":
      return typeData.value;
  }
}

export default function Comparison({ props }) {
  function getOperator(operator) {
    switch (operator) {
      case "eq":
        return <Equals />;
      case "ne":
        return <NotEquals />;
      case "gt":
        return <GreaterThan />;
      case "lt":
        return <LessThan />;
      case "ge":
        return <GreaterThanEqual />;
      case "le":
        return <LessThanEqual />;
      default:
        return operator;
    }
  }

  return (
    <Box sx={styles.container}>
      <BdtSidePanelContent>
        {getCompareFirstValue(props.compares[0])}
      </BdtSidePanelContent>
      {getOperator(props.operator)}
      <BdtSidePanelContent>
        {getCompareSecondValue(props.compares[1])}
      </BdtSidePanelContent>
    </Box>
  );
}
