import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "@emotion/react";

const styles = {
  container: {
	alignItems: "center",
	width: "fit-content",
    background: "black",
    borderRadius: "20px",
    padding: "10px",
    display: "flex",
    gap: "50px",
  },
  header: {
    paddingBottom: "2px",
  },
  input: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  },
};

export default function Define(props) {
  const theme = useTheme();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.input}>
        <Typography sx={styles.header} color={"violet"} fontWeight={700}>
          Input Parameters
        </Typography>
        {props.inputParameters.map((param) => (
          <Typography key={uuidv4()}>{param.name}</Typography>
        ))}
      </Box>
    </Box>
  );
}
