import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
	alignItems: "center",
	gap: "10px"
  },
  connectorContainer: {
    display: "flex",
    flexDirection: "column",
    height: "20px",
	width: "20px"
  },
  connectorTop: {
	height: "50%",
	width: "inherit",
	borderBottom: "2px solid white",
	borderLeft: "solid 2px white",
  },
  connectorBottom: {
	height: "50%",
	width: "inherit",
	borderLeft: "solid 2px white",
  },
  content: {
	alignSelf: "flex-end"


  }
};
export default function Connector({ children }) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.connectorContainer}>
        <Box sx={styles.connectorTop}></Box>
        <Box sx={styles.connectorBottom}></Box>
      </Box>
      <Box sx={styles.content}>{children}</Box>
    </Box>
  );
}
