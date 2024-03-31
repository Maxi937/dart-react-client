import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTheme } from "@emotion/react";
import RevisionUnitDetail from "./RevisionUnitDetail";
import DartModal from "../../../../Primitives/DartModal";

const styles = {
  container: (theme) => {
    return {
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        color: theme.palette.primaryHighlight,
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  testInfo: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  icon: (pass) => ({
    color: pass ? "lightgreen" : "red",
    fontSize: "30px",
  }),
};

function RevisionUnitTest(props) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Paper sx={styles.container(theme)} onClick={() => setIsOpen(true)}>
      <Box sx={styles.testInfo}>
        <Typography textTransform={"uppercase"}>Revision Units</Typography>
      </Box>
      <Box sx={styles.testContent}>
        {props.pass ? (
          <CheckCircleIcon sx={styles.icon(props.pass)} />
        ) : (
          <CancelIcon sx={styles.icon(props.pass)} />
        )}
      </Box>
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <RevisionUnitDetail {...props} />
      </DartModal>
    </Paper>
  );
}

export default function Test(props) {
  switch (props.type) {
    case "RevisionUnitTest":
      return RevisionUnitTest(props);

    default:
      return null;
  }
}
