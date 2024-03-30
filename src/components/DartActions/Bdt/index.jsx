import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useAnalyseBdt } from "../../../hooks/useAnalyseBdt";
import CenteredSpinner from "../../Primitives/CenteredSpinner";
import BdtSidePanel from "./BdtSidePanel";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useTheme } from "@emotion/react";
import DocumentModelPicker from "../../Pickers/DocumentModelPicker";
import Spacer from "../../Primitives/Spacer";
import BdtTree from "./BdtTree";
import EnvPicker from "../../Pickers/EnvPicker";

const styles = {
  container: {
    display: "flex",
    overflow: "hidden",
    maxWidth: "100vw",
  },
  documentationContainer: {
    flexGrow: 1,
    padding: "0px 50px",
  },
  documentModelPicker: {
    display: "flex",
    gap: "10px",
  },
};

export default function Bdt(props) {
  const theme = useTheme();
  const [documentModel, setDocumentModel] = useState("");
  const [env, setEnv] = useState("dev");

  return (
    <Box sx={styles.container}>
      <Box component="main" sx={styles.documentationContainer}>
        <Box sx={styles.documentModelPicker}>
          <EnvPicker selected={env} onSelected={(env) => setEnv(env)} />
          <DocumentModelPicker
            selected={documentModel?.mdl_nm}
            onSelected={(selected) => setDocumentModel(selected)}
          />
        </Box>
        {documentModel && (
          <>
            <Spacer padding={"10px"} />
            <Box sx={styles.bdttree}>
              <BdtTree
                documentModel={documentModel}
                env={env}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
