import React from "react";
import { Typography, Chip } from "@mui/material";

const styles = {
  chiplabel: {
    fontSize: "11px",
    fontWeight: "800",
    textTransform: "uppercase",
  },
};

function RegionChip({ region }) {
  function RegionColor() {
    switch (String(region).toLowerCase()) {
      case "dev":
        return "#547d91";
      case "qar":
        return "#e602a1";
      case "stg":
        return "#b398fa";
      case "prd":
        return "#2e03a3";
      default:
        return "grey";
    }
  }

  return (
    <Chip
      style={{
        backgroundColor: RegionColor(),
      }}
      label={<Typography sx={styles.chiplabel}>{region}</Typography>}
    />
  );
}

export default RegionChip;
