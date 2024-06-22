import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#056cf2",
      "100": "#056cf2",
      "200": "#F2F2F2",
      "300": "#888888",
      "400": "#848484",
      "500": "#AECCF0",
    },
    secondary: {
      main: "#f21305",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#0D0D0D",
      disabled: "#BFBFBF",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#056cf2",
      "100": "#056cf2",
      "200": "##0C1724",
      "300": "#444444",
      "400": "#181818",
      "500": "#0C1724",
    },
    secondary: {
      main: "#f21305",
    },
    background: {
      default: "#0D0D0D",
      paper: "#0c1724",
    },
    text: {
      primary: "#ffffff",
      disabled: "#ffffff50",
    },
  },
});

export { lightTheme, darkTheme };
