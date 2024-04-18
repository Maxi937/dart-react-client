import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import moment from "moment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DartModal from "../../Primitives/DartModal";
import DocGenItemDetail from "../DocGenItemDetail";
import RegionChip from "../../Primitives/RegionChip";

const styles = {
  container: (theme, status) => {
    return {
      filter: "brightness(80%)",
      color: status == "GENERROR" ? "red" : "lightgreen",
      display: "flex",
      gap: "25px",
      margin: "10px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "solid 1px black",
      "&:hover": {
        filter: "brightness(120%)",
        color: status == "GENERROR" ? "red" : "lightgreen",
        border: `solid 1px ${theme.palette.primaryHighlight}`,
      },
    };
  },
  timestamp: {
    display: "flex",
    flexDirection: "column",
    fontStyle: "italic",
  },
  info: (theme) => {
    return {
      color: "white",
      transition: "all ease 0.2s",
      "&:hover": {
        color: theme.palette.primaryHighlight,
      },
    };
  },
  case: {
    flexBasis: "20%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  document: {
    flex: "1",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  chips: {

    justifyContent: "flex-end",
    display: "flex",
    gap: "10px",
  },
  chiplabel: {
    fontSize: "11px",
    fontWeight: "800",
    textTransform: "uppercase",
  },
};

function DocGenItem({ docgenitem }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  console.log(docgenitem)

  function handleClick(e) {
    e.stopPropagation();
    setIsOpen(true);
  }

  return (
    <>
      <Paper
        sx={styles.container(theme, docgenitem.stat_cd)}
        onClick={handleClick}
      >
        <Box sx={styles.timestamp}>
          <Typography>
            {moment(docgenitem.vers_act_dtm).format("DD MMM YY")}
          </Typography>
          <Typography>
            {moment(docgenitem.vers_act_dtm).format("HH:mm:ss")}
          </Typography>
        </Box>
        <Box sx={styles.case}>
          <Typography>Case/Policy:</Typography>
          <Typography>{docgenitem.doc_pkg_nm}</Typography>
        </Box>
        <Box sx={styles.document}>
          <Typography>{docgenitem.mdl_cd}</Typography>
          <Typography>{docgenitem.mdl_nm}</Typography>
        </Box>
        <Box sx={styles.chips}>
          <Chip
            style={{
              backgroundColor: "black",
            }}
            label={
              <Typography sx={styles.chiplabel}>
                {docgenitem.ProcessingTime_Seconds} s
              </Typography>
            }
          />
          <RegionChip region={docgenitem.Region} />
        </Box>
      </Paper>
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <DocGenItemDetail docgenitem={docgenitem} />
      </DartModal>
    </>
  );
}

export default DocGenItem;
