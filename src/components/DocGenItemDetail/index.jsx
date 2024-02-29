import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography, Paper, Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { Modal } from "@mui/material";
import { IconButton } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { dartService } from "../../service/dart-service";
import Content from "./ItemDetailContent";
import ItemActions from "./ItemActions";

const styles = {
  container: (theme) => ({
    height: "inherit",
    display: "flex",
    flexDirection: "column",
  }),
  topBar: (theme) => ({
    color: "black",
    backgroundColor: theme.palette.primaryHighlight,
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: "7px",
    gap: "140px",
    display: "flex",
    "& > p": {
      padding: "10px",
      fontSize: "13px",
	  fontWeight: "600",
      justifySelf: "center",
    },
  }),
  docInfoContainer: (theme) => ({
    borderLeft: `2px solid ${theme.palette.primaryHighlight}`,
    borderRight: `2px solid ${theme.palette.primaryHighlight}`,
    borderTop: `2px solid ${theme.palette.primaryHighlight}`,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "35px",
    ...theme.scrollbar,
  }),
  actions: (theme) => ({
    backgroundColor: "black",
    border: `2px solid ${theme.palette.primaryHighlight}`,
  }),
};

function DocGenItemDetail({ docgenitem }) {
  const theme = useTheme();

  return (
    <Box sx={styles.container(theme)}>
      <Box sx={styles.topBar(theme)}>
        <Typography sx={{}}>
          {moment(docgenitem.vers_act_dtm).format("DD MMMM YY")}
        </Typography>
        <Typography sx={{ flex: "1", textAlign: "right" }}>
          {moment(docgenitem.vers_act_dtm).format("HH:MM")}
        </Typography>
      </Box>
      <Box sx={styles.docInfoContainer(theme)}>
        <Content header={"Status"} info={docgenitem.stat_cd} />
        <Content header={"Region"} info={docgenitem.Region} />
        <Content
          header={"Processing Time"}
          info={String(docgenitem.ProcessingTime_Seconds).concat(" s")}
        />
        <Content header={"Document ID"} info={docgenitem.doc_id} />
        <Content header={"Document Name"} info={docgenitem.doc_nm} />
        <Content header={"Case/Policy"} info={docgenitem.doc_pkg_nm} />
        <Content header={"Correlation ID"} info={docgenitem.correlation_id} />
        <Content header={"System"} info={docgenitem.doc_gen_sys_cd} />
        <Content header={"User"} info={docgenitem.vers_act_user_id} />
      </Box>
      <Box sx={styles.actions}>
        <ItemActions docgenitem={docgenitem}/>
      </Box>
    </Box>
  );
}

export default DocGenItemDetail;
