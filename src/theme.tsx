import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    accent: {
      400: "#FB9088",
      500: "#fa7268",
      600: "#FA6B61",
      700: "#F9584D",
    },
    dark: {
      50: "#c2cace",
      100: "#7c8c9c",
      200: "#7c949c",
      300: "#5f747e",
      400: "#3c5c64",
      500: "#294352",
      600: "#1c3c4a",
      700: "#143444",
    },
  },
  breakpoints,
});

export default theme;
