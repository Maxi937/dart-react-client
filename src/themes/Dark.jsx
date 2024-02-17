import { createTheme } from "@mui/material/styles";

const Dark = createTheme({
  palette: {
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
