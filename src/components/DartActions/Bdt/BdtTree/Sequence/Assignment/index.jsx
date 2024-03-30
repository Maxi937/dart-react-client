import { Box, Typography } from "@mui/material";
import BdtSidePanelContent from "../Content/BdtSidePanelContent";
import Action from "../Node/Action";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ActionText from "../Node/ActionText";

const styles = {
  container: {
    display: "flex",
    gap: "10px"
  }

}

function Equals({ assignments }) {
  const firstValue = () => {
    switch (Object.keys(assignments[0])[0]) {
      case "Variable":
        return assignments[0].Variable.name;
      default:
        return "None";
    }
  };

  const secondValue = () => {
    switch (Object.keys(assignments[1])[0]) {
      case "Value":
        return assignments[1].Value.value;
      case "Variable":
        return assignments[1].Variable.name;
      default:
        return "None";
    }
  };

  return (
    <Box sx={styles.container}>
      <ActionText>{firstValue()}</ActionText>
      <ActionText color={"lightgreen"}>=</ActionText>
      <ActionText>{secondValue()}</ActionText>
    </Box>
  );
}

export default function Assignment({ assignments }) {
  if (assignments.length == 2) {
    return <Equals assignments={assignments} />;
  }
}
