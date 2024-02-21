import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useEnvironments } from "../../../hooks/useEnvironments";

const styles = {
  innerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  slectedButton: {
    borderRadius: 1,
    backgroundColor: "rgba(10,190,265,1)",
    color: "black",
    "&:hover": {
      backgroundColor: "rgba(10,190,265,1)",
    },
  },
  button: {
    borderRadius: 1,
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      color: "rgba(10,190,265,1)",
      backgroundColor: "black",
    },
  },
};

function EnvPicker({ onSelected = (env) => {} }) {
  const [selected, setSelected] = useState("");

  const { data, isLoading, isError } = useEnvironments();

  function handleClick(env) {
    onSelected(env);
    setSelected(env);
  }

  if (isLoading) {
    return (
      <Box sx={styles.innerContainer}>
        <CircularProgress size={28} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={styles.innerContainer}>
        <Typography sx={{color: "red"}}>Service Unavailable</Typography>
      </Box>
    );
  }

  const { environments } = data;

  return (
    <Box>
      <Box sx={styles.innerContainer}>
        {environments.map((env, index) => (
          <Box key={`data-${index}`} sx={styles.button}>
            <Button
              sx={env === selected ? styles.slectedButton : styles.button}
              key={`data-btn-${index}`}
              variant="contained"
              onClick={() => handleClick(env)}
            >
              {env}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default EnvPicker;
