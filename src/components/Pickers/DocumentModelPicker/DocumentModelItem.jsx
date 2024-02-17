import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Chip from "@mui/material/Chip";

const styles = {
  container: (theme) => {
    return {
      display: "flex",
      gap: "5px",
      padding: "20px",
      backgroundColor: theme.palette.primaryForeground,
    };
  },
  outerContainer: {},
  docInfo: {
    display: "flex",
    flexDirection: "column",
  },
  modelcode: {
    bottom: "20px",
    fontSize: "10px",
    fontStyle: "italic",
  },
  modeldsc: {
    paddingTop: "20px"

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

function DocumentModelItem({ documentModel }) {
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

  console.log(documentModel);

  return (
    <Paper sx={styles.container(theme)}>
      <Box sx={styles.docInfo}>
        <Typography sx={styles.modelcode}>{documentModel.mdl_cd}</Typography>
        <Typography>{documentModel.mdl_nm}</Typography>
        <Typography sx={styles.modeldsc}>{documentModel.mdl_dsc}</Typography>
      </Box>
      <Box sx={styles.chips}>
        {documentModel.mdl_send_to_xquery_ind == "Y" && (
          <Chip
            style={{ backgroundColor: "indigo" }}
            label={<Typography sx={styles.chiplabel}>xquery</Typography>}
          />
        )}
        <Chip
          style={{
            backgroundColor: docgenTypeColor(documentModel.doc_gen_sys_cd),
          }}
          label={
            <Typography sx={styles.chiplabel}>
              {documentModel.doc_gen_sys_cd}
            </Typography>
          }
        />
      </Box>
    </Paper>
  );
}

//

export default DocumentModelItem;
