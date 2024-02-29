import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDocumentation } from "../../hooks/useDocumentation";
import Markdown from "markdown-to-jsx";
import CenteredSpinner from "../Primitives/CenteredSpinner";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Text from "./Text";
import Title from "./Title";
import Nav from "./Nav";
import List from "./List";

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
  },
};

export default function Documentation({ document }) {
  const { data, isLoading, isError } = useDocumentation(document.name);

  if (isLoading) {
    return <CenteredSpinner />;
  }

  if (isError) {
    return <Markdown># Unable To Retrieve Documumentation</Markdown>;
  }

  const { documentation } = data;

  if (documentation) {
    return (
      <Markdown
        options={{
          overrides: {
            h1: Title,
            h2: Header2,
            h3: Header3,
            p: Text,
			a: Nav,
			ol: List,
			ul: List
          },
        }}
      >
        {documentation}
      </Markdown>
    );
  }
}
