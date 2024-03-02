import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BrandStyledTextFat from "../Text/BrandStyledTextFat";

const styles = {
  appBar: (theme) => {
    return {
      backgroundColor: "transparent",
      marginBottom: "50px"
    };
  },
  title: {
    flex: "1"
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  let menuOptions = [{ label: "Home", path: "/" }];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        sx={styles.appBar(theme)}
        position="fixed"
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Box sx={styles.title}>
            <BrandStyledTextFat text={"DART"} />
          </Box>
          <Box>
            {menuOptions.map((opt) => (
              <Button
                key={opt.label}
                color="inherit"
                onClick={() => handleMenuSelect(opt.path)}
              >
                {opt.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
