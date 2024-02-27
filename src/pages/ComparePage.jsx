import React, { useState, useEffect } from "react";
import CompareForm from "../components/DartActions/ComparePdf";
import PageTemplate from "../components/PageTemplate";

const ComparePage = (props) => {
  return (
    <PageTemplate>
      <CompareForm />
    </PageTemplate>
  );
};

export default ComparePage;
