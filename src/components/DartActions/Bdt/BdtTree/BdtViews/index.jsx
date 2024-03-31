import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import TestView from "./TestView";
import TreeView from "./TreeView";
import { useTheme } from "@emotion/react";
import ContentView from "./ContentView";
import BdtSideMenu from "../BdtSideMenu";
import CenteredSpinner from "../../../../Primitives/CenteredSpinner";

const styles = {
  bdt: (theme) => ({
    border: `2px solid ${theme.palette.primaryHighlight}`,
    flex: 1,
    display: "grid",
    gridTemplateRows: "1fr auto",
    background: "black",
  }),
  mainMenu: (theme) => ({
    flex: 1,
    overflowX: "hidden",
    ...theme.scrollbar,
  }),
  view: (theme) => ({
    display: "flex",
    overflow: "hidden",
  }),
  leftMenu: (theme) => ({
    background: "black",
    borderRight: `2px solid ${theme.palette.primaryHighlight}`,
  }),
};

const views = [
    {
      icon: <AccountTreeIcon />,
      render: <TreeView />,
    },
    {
      icon: <QuizIcon />,
      render: <TestView />,
    },

    {
      icon: <DescriptionIcon />,
      render: <ContentView />,
    },
  ];

export default function BdtViews(props) {
  const theme = useTheme();
  const [view, setView] = useState(0);

  if (props.isLoading) {
    return <CenteredSpinner />;
  }

  if (props.isError) {
    <Typography>Service Unavailable</Typography>;
  }

  return (
    <Box sx={styles.view}>
      <Box sx={styles.leftMenu}>
        <BdtSideMenu view={view} setView={setView} views={views} />
      </Box>
      <Box sx={styles.mainMenu}>
        {React.cloneElement(views[view].render, {
          ...props,
          compile: props.data.compile,
        })}
      </Box>
    </Box>
  );
}
