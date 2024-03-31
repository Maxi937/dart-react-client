import { createTheme } from "@mui/material/styles";

const Dark = createTheme({
  scrollbar: {
    "&::-webkit-scrollbar": {
      cursor: "auto",
      width: "0.6em",
    },
    "&::-webkit-scrollbar-track": {
      background: "grey",
    },
    "&::-webkit-scrollbar-thumb": {
      cursor: "pointer !important",
      backgroundColor: "rgba(10,190,265,1)",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      cursor: "pointer !important",
      backgroundColor: "rgba(10,190,265,1)",
    },
  },
  animations: {
    skew: {
      animation: "skew 1.50s",
      "@keyframes skew": {
        "0%": { transform: "skewY(-15deg)" },
        "5%": { transform: "skewY(15deg)" },
        "10% ": { transform: "skewY(-15deg)" },
        "15%": { transform: "skewY(15deg)" },
        "20%": { transform: "skewY(0deg)" },
        "100%": { transform: "skewY(0deg)" },
      },
    },
  },
  palette: {
    accentColor: "red",
    primaryHighlight: "rgba(10,190,265,1)",
    primaryForeground: "black",
    primaryBackground: "#242424",
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default Dark;
