import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useTheme } from "@emotion/react";

const styles = {
  container: {
    overflow: "auto",
    height: "inherit",
    background: "black",
    borderRadius: "15px",
  },
  deleteButton: {
    color: "white",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "red",
    },
  },
};

const FileList = ({ files, setFiles = () => {} }) => {
  function handleDelete(index) {
    setFiles(
      files.filter((_, indx) => {
        return index != indx;
      })
    );
  }

  return (
    <TableContainer sx={styles.container} component={Box}>
      <Table aria-label="simple table" sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, index) => (
            <TableRow
              key={`${file.name}-${index}`}
              sx={{ "& > *": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {file.name}
              </TableCell>
              <TableCell align="right">{file.size} kb</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="deleteFile"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <ClearOutlinedIcon sx={styles.deleteButton} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FileList;
