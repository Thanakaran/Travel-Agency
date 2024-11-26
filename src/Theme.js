// src/theme.js
import { createTheme } from "@mui/material/styles";

const ThemeRandomColors = {
  themeGreen: "#1BBC9B",
  themeBlue: "#14B9D5",
  themeRed: "#F76570",
  themePurple: "#BA71DA",
  themeOrange: "#F3A46B",
  themeYellow: "#FFD205",
};
const ThemeColors = {
  themeGreen: "#1BBC9B",
  themeBlue: "#14B9D5",
  themeRed: "#F76570",
  themePurple: "#BA71DA",
  themeOrange: "#F3A46B",
  themeYellow: "#FFD205",
};
const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.themeGreen,
    },
    text: {
      primary: "#000000", // black
      secondary: "#6E6E6E",
    },
    themeBlue: {
      main: ThemeColors.themeBlue,
    },
    themeRed: {
      main: ThemeColors.themeRed,
    },
    themePurple: {
      main: ThemeColors.themePurple,
    },
    themeOrange: {
      main: ThemeColors.themeOrange,
    },
    themeYellow: {
      main: ThemeColors.themeYellow,
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 300,
    },
    h6: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 200,
    },
    subtitle1: {
      fontFamily: "Reenie Beanie, Arial, sans-serif",
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "Reenie Beanie, Arial, sans-serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 600,
    },
    caption: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 400,
    },
    overline: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: 400,
    },
  },
});

export { theme, ThemeColors, ThemeRandomColors };
