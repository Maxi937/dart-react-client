import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Test from "../Tests";
import { v4 as uuidv4 } from "uuid";

const styles = {
  container: { padding:"10px"},
};

export default function TestView(props) {

  return (
    <Box sx={styles.container}>
      {props.compile.tests.map((test) => (
        <Test key={uuidv4()} {...test}></Test>
      ))}
    </Box>
  );
}
