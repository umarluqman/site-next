import { chakra, Grid, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue("white", "gray.900");
  return (
    <Grid templateRows="auto 1fr auto" bg={bg}>
      <Header />
      <chakra.main minHeight={"82vh"}>{children}</chakra.main>
      <Footer />
    </Grid>
  );
};
