import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => ({
    width: "inherit",
    background: "transparent",
    display: "flex",
  }),
  svg: {
    width: "10",
    height: "100",
  },
};

export default function Connector(props) {
  const theme = useTheme();

  return (
    <Box sx={styles.container(theme)}>
      <svg
        width="10"
        height="10"
        style={styles.svg}
      >
        <circle
          width="100%"
          height="0%"
          cx={"50%"}
          cy={"0%"}
          r={5}
          stroke="white"
          fill="white"
        />
          <line x1="50%" y1="0" x2="50%" y2="120" stroke="white" />

      </svg>
    </Box>
  );
}
