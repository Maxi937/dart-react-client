import React, { useState, useEffect } from "react";
import DocGenStatus from "../components/DocGenStatus";
import PageTemplate from "../components/PageTemplate";
import EnvPicker from "../components/Pickers/EnvPicker";
import { useDocumentationTree } from "../hooks/useDocumentationTree";
import { Typography } from "@mui/material";
import DocumentationMenu from "../components/DocumentationMenu";

const DocumentationPage = (props) => {
  const { data, isLoading, isError } = useDocumentationTree();

  if(isLoading) {
	return <Typography>Loading</Typography>
  }

  if(isError) {
	return <Typography>Error</Typography>
  }

  const { documentationTree } = data

  return <DocumentationMenu documentationTree={documentationTree}/>
};

export default DocumentationPage;
