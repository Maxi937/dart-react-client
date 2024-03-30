import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContentGroups } from "../../../../../hooks/useContentGroup";
import ContentGroup from "./ContentGroup";
import CenteredSpinner from "../../../../Primitives/CenteredSpinner";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default function Content(props) {
  const theme = useTheme();

  const contentGroups = useContentGroups(
    props.documentModel.mdl_nm,
    props.textClassIds,
    props.env
  );

  function areSomeStillLoading() {
    if (contentGroups.some((r) => r.isLoading)) {
      return true;
    }
    return false;
  }

  return (
    <Box sx={styles.container}>
      {contentGroups.map((result, index) => {
        if (result.isSuccess) {
          return (
            <ContentGroup
              key={`${result.data.CONTENT_GROUP_ID}-${index}`}
              contentGroup={result.data.content}
            />
          );
        }
        if (result.isError) {
          return (
            <Typography key={`${result.data.CONTENT_GROUP_ID}-${index}`}>
              An Unexpected Error Occured
            </Typography>
          );
        }
      })}
      {areSomeStillLoading() && <CenteredSpinner />}
    </Box>
  );
}
