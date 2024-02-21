import React, { useState, useEffect } from "react";
import GenerateForm from "../components/DartActions/GenerateXpression"
import PageTemplate from "../components/PageTemplate";


const GeneratePage = (props) => {
  return (
    <>
      <PageTemplate>
        <GenerateForm />
      </PageTemplate>
    </>
  );
};

export default GeneratePage;
