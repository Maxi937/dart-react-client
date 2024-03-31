import { Box, Typography } from "@mui/material";
import ActionText from "../Node/ActionText";

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
        return <ActionText color="orange" fontWeight={900}>NOT EOD</ActionText>;
      default:
        return operator;
    }
  }

  return (
    <Box sx={styles.container}>
      <ActionText>{props.RecordSetTest.recordSetVar.name}</ActionText>
      {getOperator(props.RecordSetTest.operator)}
    </Box>
  );
}
