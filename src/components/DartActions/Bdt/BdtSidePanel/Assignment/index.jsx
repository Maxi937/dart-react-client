import { Box, Typography } from "@mui/material";
import BdtSidePanelContent from "../Content/BdtSidePanelContent";

function Equals({ assignments }) {
  const firstValue = () => {
    console.log(assignments);
    switch (Object.keys(assignments[0])[0]) {
      case "Variable":
        return assignments[0].Variable.name;
      default:
        return "None";
    }
  };

  const secondValue = () => {
    console.log(assignments);
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
    <>
      <BdtSidePanelContent>{firstValue()}</BdtSidePanelContent>
      <BdtSidePanelContent color={"green"} fontWeight={700}>
        =
      </BdtSidePanelContent>
      <BdtSidePanelContent>{secondValue()}</BdtSidePanelContent>
    </>
  );
}

export default function Assignment({ props }) {
  if (props.assignments.length == 2) {
    return <Equals assignments={props.assignments} />;
  }
}
