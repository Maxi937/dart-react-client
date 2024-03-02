import React, { useState, useEffect } from "react";
import { useDocumentationTree } from "../hooks/useDocumentationTree";
import { Typography } from "@mui/material";
import DocumentationMenu from "../components/Documentation/DocumentationMenu";

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
