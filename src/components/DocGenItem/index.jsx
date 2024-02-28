import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import moment from "moment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DartModal from "../Primitives/DartModal";
import DocGenItemDetail from "../DocGenItemDetail";

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
  outerContainer: {},
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
    flex: 1,
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

  function docgenTypeColor(docgentype) {
    switch (docgentype) {
      case "xpresion":
        return "dodgerblue";
      case "istream":
        return "lightseagreen";
      case "pdfcompo":
        return "crimson";
      default:
        return "grey";
    }
  }

  function handleInfoClick(e) {
    e.stopPropagation();
    setIsOpen(true);
  }

  function handleClick(e) {
    e.stopPropagation();
    window.open(docgenitem.FilenetURL, "_blank").focus();
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
          <Chip
            style={{
              backgroundColor: docgenTypeColor(docgenitem.doc_gen_sys_cd),
            }}
            label={
              <Typography sx={styles.chiplabel}>
                {docgenitem.doc_gen_sys_cd}
              </Typography>
            }
          />
          <Chip
            onClick={handleInfoClick}
            style={{
              backgroundColor: "black",
            }}
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InfoOutlinedIcon sx={styles.info(theme)} />
              </Box>
            }
          />
        </Box>
      </Paper>
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <DocGenItemDetail docgenitem={docgenitem} />
      </DartModal>
    </>
  );
}

export default DocGenItem;
