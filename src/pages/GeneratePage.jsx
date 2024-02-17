import React, { useState, useEffect } from "react";
import GenerateXpression from "../components/DartActions/GenerateXpression";
import { Typography } from "@mui/material";
import GenerateForm from "../components/DartActions/GenerateXpression/GenerateForm.jsx"
import CircularProgress from '@mui/material/CircularProgress';
import PageTemplate from "../components/PageTemplate";
import { dartService } from "../service/dart-service";
import { useQuery } from "react-query";

const styles = {
  header: {
    fontWeight: "900",
    padding: "100px 100px 50px 100px",
  },
  generateXpression: {
    margin: "auto",
    height: "60vh",
    background: "rgb(15 15 15)",
    borderRadius: "25px",
  },
};

const GeneratePage = (props) => {
  const { data, error, isLoading } = useQuery("models", () => dartService.getXpressionDocumentModels("prd"));

  if (isLoading) return <CircularProgress/>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <PageTemplate>
        <GenerateForm documentModels={data.models}/>
      </PageTemplate>
    </>
  );
};

export default GeneratePage;
