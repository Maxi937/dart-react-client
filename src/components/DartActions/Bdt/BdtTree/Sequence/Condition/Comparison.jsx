import { Box, Typography } from "@mui/material";
import ActionText from "../Node/ActionText";

const styles = {
  container: {
    display: "flex",
    gap: "10px",
  },
};

function Equals() {
  return (
    <ActionText color="LightGreen">
      =
    </ActionText>
  );
}

function NotEquals() {
  return (
    <ActionText color="red">
      !=
    </ActionText>
  );
}

function GreaterThan() {
  return (
    <ActionText color="orange">
      {">"}
    </ActionText>
  );
}

function LessThan() {
  return (
    <ActionText color="orange">
      {"<"}
    </ActionText>
  );
}

function GreaterThanEqual() {
  return (
    <ActionText color="orange">
      {">="}
    </ActionText>
  );
}

function LessThanEqual() {
  return <ActionText color="orange">{"<="}</ActionText>;
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
      <ActionText>{getCompareFirstValue(props.compares[0])}</ActionText>
      {getOperator(props.operator)}
      <ActionText>{getCompareSecondValue(props.compares[1])}</ActionText>
    </Box>
  );
}
