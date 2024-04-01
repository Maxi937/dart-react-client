import React, { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { useBaselineTree } from "../../hooks/useBaselinesTree";
import CenteredSpinner from "../../components/Primitives/CenteredSpinner";
import { Typography, Box } from "@mui/material";
import BaselineCategory from "../../components/DartReport/BaselineCategory";
import { useTheme } from "@emotion/react";

const styles = {
  category: (theme) => ({
    cursor: "pointer",
    padding: "20px 0px",
    color: theme.palette.primaryHighlight,
    transition: "all 0.2s ease",
    "&:hover": {
      color: "goldenrod",
    },
  }),
};

const ReportPage = (props) => {
  const theme = useTheme()
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
        return (
          <Box>
            <Typography sx={styles.category(theme)}>
              {String(category.name).toUpperCase()}
            </Typography>
            <BaselineCategory baselineCategory={category} />
          </Box>
        );
      })}
    </PageTemplate>
  );
};

export default ReportPage;
