import React, { useState, useEffect } from "react";
import { Box, Typography, recomposeColor } from "@mui/material";
import { components } from "./components.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import Connector from "./Connector/index.jsx";
import Draggable from "react-draggable";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { v4 as uuidv4 } from "uuid";
import Spacer from "../../../../Primitives/Spacer/index.jsx";

const styles = {
  container: (cursor) => ({
    padding: "10px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    overflow: "hidden",
    cursor: cursor,
  }),
  node: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  draggable: (scale) => ({
    transform: `scale(${scale})`,
    height: "inherit",
  }),
  sequenceCanvas: {
    zIndex: 1,
    height: "inherit",
    width: "600cqw",
  },
  menu: {
    alignSelf: "end",
  },
  control: (theme) => ({
    zIndex: 10,
    borderRadius: "5px",
    transition: "all 0.2s ease",
    padding: "15px",
    background: theme.palette.primaryBackground,
    color: "white",
    " & > svg": {
      fontSize: "25px",
    },
    " &:hover": {
      background: theme.palette.primaryHighlight,
    },
  }),
};

export default function BdtSequence(props) {
  const s = props.sequence;
  const theme = useTheme();

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 2.3;

  const [scale, setScale] = useState(1);
  const [backStack, setBackstack] = useState([]);
  const [sequence, setSequence] = useState(s);
  const [dragKey, setDragKey] = useState(uuidv4());
  const [cursorStyle, setCursorStyle] = useState("grab");

  const onScroll = (e) => {
    e.stopPropagation();
    const delta = e.deltaY * -0.002;
    const newScale = scale + delta;

    if (newScale < MIN_ZOOM) {
      return setScale(MIN_ZOOM);
    }

    if (newScale > MAX_ZOOM) {
      return setScale(MAX_ZOOM);
    }

    setScale(newScale);
  };

  function goToSequence(nextSequence) {
    setScale(1);
    setDragKey(uuidv4());
    setBackstack((oldArray) => [...oldArray, sequence]);
    setSequence(nextSequence);
  }

  function goBack() {
    if (backStack.length >= 1) {
      setScale(1);
      setDragKey(uuidv4());
      const sequence = backStack.pop();
      setSequence(sequence);
    }
  }

  function render(obj) {
    const renderComponent = components[Object.keys(obj)[0]];

    if (!renderComponent) {
      return <Typography key={uuidv4()}>{Object.keys(obj)[0]}</Typography>;
    }

    const nodeProps = obj[Object.keys(obj)[0]];

    nodeProps.test = [];

    nodeProps.render = {
      goToSequence,
      handleNodeClick: props.handleNodeClick,
      renderComponent: (action, extraProps = {}) => {
        if (extraProps) {
          let props = action[Object.keys(action)[0]];
          props = { ...nodeProps, ...extraProps };
          action[Object.keys(action)[0]].props = props;
        }

        return render(action);
      },
    };

    return (
      <Box key={uuidv4()} sx={styles.node}>
        {renderComponent(nodeProps)}
        <Spacer padding={"20px"} />
      </Box>
    );
  }

  function recentre() {
    setDragKey(uuidv4());
  }

  function handleDragStart() {
    setCursorStyle("grabbing");
  }

  function handleDragStop() {
    setCursorStyle("grab");
  }

  return (
    <Box sx={styles.container(cursorStyle)} onWheelCapture={onScroll}>
      <Box sx={{ position: "absolute", left: "10px" }}>
        <IconButton
          sx={styles.control(theme)}
          aria-label="recentre"
          onClick={recentre}
        >
          <GpsFixedIcon />
        </IconButton>
      </Box>
      <Box sx={styles.menu}>
        <IconButton
          sx={styles.control(theme)}
          aria-label="go back"
          onClick={goBack}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Box sx={styles.draggable(scale)}>
        <Draggable
          key={dragKey}
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[10, 10]}
          scale={scale}
          onDrag={handleDragStart}
          onStop={handleDragStop}
        >
          <Box id={"sequence"} className={"handle"} sx={styles.sequenceCanvas}>
            {sequence.map((action) => render(action))}
          </Box>
        </Draggable>
      </Box>
    </Box>
  );
}
