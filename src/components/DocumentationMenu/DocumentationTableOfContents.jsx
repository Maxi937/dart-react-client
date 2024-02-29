import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    
  },
  category: (theme) => ({
	color: theme.palette.primaryHighlight,
	fontSize: "32px",
	fontWeight: "700"
  }),
  document: {
	fontSize: "24px"
  }
};

export default function DocumentationTableOfContents({ documentationTree }) {
  const theme = useTheme();
  return (
    <Box sx={styles.container}>
      {documentationTree.entries.map((category) => {
        return (
          <>
            <Typography variant={"h3"} sx={styles.category}>{category.displayname}</Typography>
            {category.entries.map((document) => (
              <Typography sx={styles.document}>{document.displayname}</Typography>
            ))}
			<Divider sx={{padding: "20px"}}></Divider>
          </>
        );
      })}
    </Box>
  );
}
