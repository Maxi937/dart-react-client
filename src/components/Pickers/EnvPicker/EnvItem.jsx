import React, { useContext, useState } from "react";
import { Typography } from "@mui/material";

const styles = {};

function EnvItem({ env }) {
  return <Typography>{env}</Typography>;
}

export default EnvItem;
