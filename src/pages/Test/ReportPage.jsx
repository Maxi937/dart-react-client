import React, { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { useBaselineTree } from "../../hooks/useBaselinesTree";
import CenteredSpinner from "../../components/Primitives/CenteredSpinner";
import { Typography } from "@mui/material";
import BaselineCategory from "../../components/DartReport/BaselineCategory";

const ReportPage = (props) => {
  const { data, isLoading, isError } = useBaselineTree();

  if (isLoading) {
    return <CenteredSpinner />;
  }

  if (isError) {
    return <Typography>is Error</Typography>;
  }

  const baselines = data.baselineTree;

  return (
    <PageTemplate>
      {baselines.entries.map((category) => {
        return <BaselineCategory baselineCategory={category} />;
      })}
    </PageTemplate>
  );
};

export default ReportPage;
