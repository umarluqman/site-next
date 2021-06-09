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
    brand: {
      500: "#fa7268",
    },
  },
  breakpoints,
  styles: {
    global: {
      // "*": {
      //   margin: 0,
      // },
      // "* + *": {
      //   margin: "1.2em 0 0",
      // },
    },
  },
});

export default theme;
