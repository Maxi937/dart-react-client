import React, { useEffect, useState, Children } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useTheme } from "@emotion/react";
import CircleIcon from "@mui/icons-material/Circle";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import { TransitionGroup } from "react-transition-group";

const styles = {
  container: {
	backgroundColor: "black",
	borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
    gap: "10px",
  },
  selectedChild: (theme) => ({
    fontSize: "14px",
    color: theme.palette.primaryHighlight,
  }),
  unselectedChild: {
    fontSize: "10px",
    color: "grey",
  },
};

function Carousel({ data, pageSize, children }) {
  const theme = useTheme();
  const [childToRender, setChildToRender] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Current Child: ` + childToRender);
      nextChild();
    }, 10000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [childToRender]);

  function nextChild() {
    const numChildren = Children.count(children);
    const nextChild = childToRender + 1;

    if (nextChild < numChildren) {
      console.log("setting child to render");
      setChildToRender(nextChild);
    } else {
      setChildToRender(0);
    }
  }

  return (
    <Box sx={styles.container}>
      <TransitionGroup exit={false}>
        <Fade key={childToRender} timeout={1000}>
          <Box>{children[childToRender]}</Box>
        </Fade>
      </TransitionGroup>

      <Box sx={styles.iconContainer}>
        {children.map((_, index) => (
          <IconButton size={"small"} onClick={() => setChildToRender(index)}>
            <CircleIcon
              sx={
                index == childToRender
                  ? styles.selectedChild(theme)
                  : styles.unselectedChild
              }
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default Carousel;
