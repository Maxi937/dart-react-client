import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DartDropzone from "../../../Form/DartDropzone";
import BdtActions from "./BdtActions";
import BdtSideMenu from "./BdtSideMenu";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import TestView from "./BdtViews/TestView";
import TreeView from "./BdtViews/TreeView";
import { useTheme } from "@emotion/react";
import ContentView from "./BdtViews/ContentView";
import { useCompileBdt } from "../../../../hooks/useCompileBdt";
import CenteredSpinner from "../../../Primitives/CenteredSpinner";
import { useInvalidateBdt } from "../../../../hooks/useAnalyseBdt";
import { useQueryClient } from "react-query";
import { readBlobLikeAsync } from "../../../../utils/file-utils";
import BdtViews from "./BdtViews";

const styles = {
  container: (theme) => ({
    display: "flex",
    height: "80cqh",
    borderRadius: "5px"
  }),
  dropzone: {
    display: "flex",
    width: "100%",
  },
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
  actions: (theme) => ({
    width: "100%",
    justifySelf: "start",
    borderTop: `2px solid ${theme.palette.primaryHighlight}`,
  }),
};

export default function BdtTree(props) {
  const theme = useTheme();
  const [candidate, setCandidateFile] = useState({});
  const [xml, setXml] = useState("");
  const [view, setView] = useState(0);

  const { data, refetch, isLoading, isFetching, isError } = useCompileBdt(
    props.documentModel,
    props.env,
    xml,
    xml != ""
  );

  async function openBdt(xmlFile) {
    const xml = await readBlobLikeAsync(xmlFile);
    setCandidateFile(xmlFile);
    setXml(xml);
  }

  return (
    <Box sx={styles.container}>
      {xml ? (
        <Box sx={styles.bdt}>
          <BdtViews
            documentModel={props.documentModel}
            env={props.env}
            isLoading={isLoading}
            isError={isError}
            data={data}
            view={view}
          ></BdtViews>
          <Box sx={styles.actions}>
            <BdtActions
              candidateXml={xml}
              compile={data?.compile}
              candidateFile={candidate}
              setCandidateFile={async (file) => await openBdt(file)}
              documentModel={props.documentModel}
              env={props.env}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={styles.dropzone}>
          <DartDropzone
            singleFile={true}
            handleDrop={async (file) => await openBdt(file[0])}
            acceptedFileTypes={{ "text/xml": [".xml"] }}
          ></DartDropzone>
        </Box>
      )}
    </Box>
  );
}
