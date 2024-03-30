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
    alignItems: "center",
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
  navigation: {
    paddingTop: "5px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default function Or({ props }) {
  function getOrRecurse(conditions) {
    let result = [];

    conditions.map((condition) => {
      if (condition.Or) {
        result = result.concat(getOrRecurse(condition.Or.conditions));
      } else {
        result.push(condition);
      }
    });
    return result;
  }

  const flatConditions = getOrRecurse(props.conditions);

  const [itemDisplay, setItemDisplay] = useState(0);

  function nextItem(e) {
    e.preventDefault();
    e.stopPropagation();
    if (itemDisplay != flatConditions.length - 1) {
      setItemDisplay(itemDisplay + 1);
    }
  }

  function previousItem(e) {
    e.preventDefault();
    e.stopPropagation();
    if (itemDisplay != 0) {
      setItemDisplay(itemDisplay - 1);
    }
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.condition}>
        <Condition props={flatConditions[itemDisplay]} />
        {itemDisplay + 1 != flatConditions.length && (
          <ActionText>OR</ActionText>
        )}
      </Box>
      <Box sx={styles.navigation}>
        <NavigateBeforeIcon sx={styles.icon} onClick={previousItem} />
        <NavigateNextIcon sx={styles.icon} onClick={nextItem} />
        <Typography fontSize={"0.6em"} color={"orange"} fontWeight={700}>
          {itemDisplay + 1} of {flatConditions.length}
        </Typography>
      </Box>
    </Box>
  );
}
