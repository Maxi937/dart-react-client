import { Box, Button, Typography } from "@mui/material";
import Condition from ".";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BdtSidePanelAction from "../Content/BdtSidePanelAction";
import ActionText from "../Node/ActionText";

const styles = {
  container: {},
  condition: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  icon: {
    fontSize: "16px",
    color: "black",
    backgroundColor: "white",
    borderRadius: "20px",
    transition: "all ease 0.2s",
    "&:hover": {
      backgroundColor: "skyblue",
    },
  },
};

export default function Or({ props }) {
  const conditional = props.Or ? props.Or : props.And;

  function getOrRecurse(conditions) {
    let result = [];

    conditions.map((condition) => {
      if (condition.Or) {
        result = result.concat(getOrRecurse(condition.Or.conditions));
      } else if (condition.And) {
        result = result.concat(getOrRecurse(condition.And.conditions));
      } else {
        result.push(condition);
      }
    });
    return result;
  }

  const flatConditions = getOrRecurse(conditional.conditions);

  const [itemDisplay, setItemDisplay] = useState(0);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.condition}>
        {flatConditions.map((c, index) => (
          <Box>
            <Condition props={c} />
            {index + 1 != flatConditions.length && (
              <ActionText color="orange">OR</ActionText>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
