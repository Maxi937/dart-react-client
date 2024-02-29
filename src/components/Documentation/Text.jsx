import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useDocumentation } from "../../hooks/useDocumentation";

const styles = {

};

export default function Text({children}) {
  return <Typography sx={styles.main}>{children}</Typography>;
}
