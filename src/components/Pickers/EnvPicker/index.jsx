import { Box, Button } from "@mui/material";
import { useState } from "react";

const styles = {
  innerContainer: {
    display: "flex",
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

function EnvPicker({ envs }) {
  const [selected, setSelected] = useState("");

  function handleClick(env) {
    if (selected != env) {
      setSelected(env);
    }
    console.log(env);
  }

  return (
    <Box>
      <Box sx={styles.innerContainer}>
        {envs.map((env, index) => (
          <Box key={`cntnr-${index}`} sx={styles.button}>
            <Button
              sx={env === selected ? styles.slectedButton : styles.button}
              key={index}
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
