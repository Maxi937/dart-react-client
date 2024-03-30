import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => ({
    zIndex: 2,
    borderRadius: "5px",
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    flexDirection: "column",
    transition: "0.2s all ease",
  }),
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
      border: `solid 4px ${theme.palette.primaryHighlight}`,
    },
  }),
  items: (theme) => ({
    marginLeft: "14px",
    borderLeft: `solid 2px ${theme.palette.primaryBackground}`,
    display: "flex",
    flexDirection: "column",
  }),
  title: (theme, color) => ({
    fontWeight: "700",
    background: color,
    borderRadius: "5px 5px 0px 0px",
    overflow: "hidden",
    padding: "10px",
  }),
  content: (theme) => ({
    fontSize: "10px",
    alignItems: "center",
    padding: "10px",
  }),
};

export default function Node(props) {
  const theme = useTheme();

  return (
    <Box
      sx={styles.container(theme)}
      onClick={() => props.render.handleNodeClick(props)}
    >
      <Box sx={styles.node(theme, props)}>
        {props.title && (
          <Box sx={styles.title(theme, props.titleColor)}>{props.title}</Box>
        )}
        <Box sx={styles.content(theme, open)}>{props.Content()}</Box>
      </Box>
    </Box>
  );
}
