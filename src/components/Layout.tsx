import { chakra, Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid templateRows="auto 1fr auto">
      <Header />
      <chakra.main minHeight={"92vh"}>{children}</chakra.main>
      <Footer />
    </Grid>
  );
};
