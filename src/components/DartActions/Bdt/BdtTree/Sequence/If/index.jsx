import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Connector from "../Connector";
import Condition from "../Condition";
import Action from "../Node/Action";
import MergeIcon from "@mui/icons-material/Merge";
import Node from "../Node";
import Spacer from "../../../../../Primitives/Spacer";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "0.2s all ease",
  },
  node: (theme, props) => ({
    borderRadius: "5px",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.primaryBackground,
    border: `4px solid ${
      props.evaluated ? "green" : theme.palette.primaryBackground
    }`,
    transition: "0.2s all ease",
    "&:hover": {
      cursor: "pointer",
      border: `4px solid ${theme.palette.primaryHighlight}`,
    },
  }),
  innercontainer: {
    gap: "75px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    transition: "0.2s all ease",
    width: "100%",
  },
  title: {
    fontWeight: "700",
    background: "darkgreen",
    borderRadius: "5px 5px 0px 0px",
    overflow: "hidden",
    padding: "10px",
  },
  content: {
    position: "relative",
    alignItems: "flex-start",
    padding: "10px",
  },
  floatRight: {
    display: "flex",
    overflow: "hidden",
  },
  paths: {
    display: "flex",
    flexDirection: "column",
  },
  true: {
    position: "relative",
    display: "flex",
    gap: "50px",
  },
};

export default function If(props) {
  const theme = useTheme()

  return (
    <Box sx={styles.container}>
      <Box sx={styles.innercontainer}>
        <Box sx={styles.node(theme, props)}>
          <Box sx={styles.title}>IF</Box>
          <Box sx={styles.content}>
            <Action Icon={<MergeIcon htmlColor="lightgreen" />}>
              <Condition props={props} />
            </Action>
          </Box>
        </Box>

        <Box sx={styles.floatRight}>
          <Box sx={styles.paths}>
            <Box sx={styles.true}>
              {props.true.map((action) => {
                return props.render.renderComponent(action);
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
