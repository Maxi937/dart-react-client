import React, { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DocumentModelPicker from "../../components/Pickers/DocumentModelPicker";
import EnvPicker from "../../components/Pickers/EnvPicker";
import DocumentModels from "../../components/Pickers/DocumentModelPicker/DocumentPicker";
import DartButton from "../../components/Form/DartButton";
import { useBaselineTree } from "../../hooks/useBaselinesTree";
import BaselineCategory from "../../components/DartReport/BaselineCategory";
import Spacer from "../../components/Primitives/Spacer";
import DartModal from "../../components/Primitives/DartModal";
import MigrationTests from "../../components/MigrationTests";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
  },
  topBar: {
    display: "flex",
    gap: "20px",
  },
  modelContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  dropzone: {
    padding: "50px",
    height: "40vh",
  },
  results: {
    display: "flex",
    padding: "50px",
    flexDirection: "column",
    gap: "15px",
  },
  submitButton: (canGenerate) => {
    return {
      fontWeight: "bold",
      backgroundColor: "black",
      color: canGenerate ? "white" : "grey",
      transition: "all 0.2s ease",
      "&:hover": {
        color: canGenerate ? "black" : "grey",
        backgroundColor: canGenerate ? "rgba(10,190,265,1)" : "black",
      },
    };
  },
};

const MigrationPage = (props) => {
  const [env, setEnv] = useState("dev");
  const [documentModel, setDocumentModel] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useBaselineTree();
  const [canGenerate, setCanGenerate] = useState(false);

  useEffect(() => {
    if (documentModel) {
      console.log(canGenerate);
      setCanGenerate(true);
    } else {
      setCanGenerate(false);
    }
  });

  function baselinesForDocumentModel() {
    const result = data.baselineTree.entries.find(
      (category) =>
        String(category.name).toLowerCase() ==
        String(documentModel.mdl_cd).toLowerCase()
    );

    if (result) {
      return <BaselineCategory baselineCategory={result} />;
    }
  }

  return (
    <PageTemplate>
      <Box>
        <Box sx={styles.topBar}>
          <EnvPicker selected={env} onSelected={(env) => setEnv(env)} />
          <Box sx={styles.modelContainer}>
            <DocumentModelPicker
              selected={documentModel?.mdl_nm}
              placeholder={"Document Model"}
              onSelected={(model) => setDocumentModel(model)}
            />
          </Box>
          <DartButton handleClick={() => setIsOpen(true)} disabled={!canGenerate}>Test</DartButton>
        </Box>
        <Spacer padding={"20px"} />
        {data && baselinesForDocumentModel()}
      </Box>
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <MigrationTests documentModel={documentModel} env={env}/>
      </DartModal>
    </PageTemplate>
  );
};

export default MigrationPage;
