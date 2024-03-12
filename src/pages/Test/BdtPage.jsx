import React, { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import CenteredSpinner from "../../components/Primitives/CenteredSpinner";
import { Typography, Box } from "@mui/material";
import { useAllDocumentModels } from "../../hooks/useDocumentModels";
import DocumentModelPicker from "../../components/Pickers/DocumentModelPicker";
import DocumentModels from "../../components/Pickers/DocumentModelPicker/DocumentPicker";
import PaginateContent from "../../components/Primitives/PaginatedContent";
import { useDocumentModels } from "../../hooks/useDocumentModels";
import { useTheme } from "@emotion/react";
import Bdt from "../../components/Bdt";
import Spacer from "../../components/Primitives/Spacer";

const styles = {
  documentModelPicker: {},
};
const BdtPage = (props) => {
  const theme = useTheme();
  const [documentModel, setDocumentModel] = useState("");

  return (
    <PageTemplate>
      <Box sx={styles.documentModelPicker}>
        <DocumentModelPicker
          onSelected={(selected) => setDocumentModel(selected)}
        />
      </Box>
      {documentModel && (
        <Box sx={styles.bdtcontainer}>
			<Spacer padding={"2rem"}/>
          <Bdt documentModel={documentModel}/>
        </Box>
      )}
    </PageTemplate>
  );
};

export default BdtPage;
