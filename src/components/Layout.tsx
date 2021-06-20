import { chakra, Grid, Link, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Github, Twitter, Codesandbox, Linkedin } from "emotion-icons/feather";

export const Layout = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue("white", "gray.900");

  const lineBg = useColorModeValue("gray.300", "gray.200");
  return (
    <Grid templateRows="auto 1fr auto" bg={bg}>
      <Header />
      <chakra.ul
        bottom="0"
        pos="fixed"
        left={10}
        display={{ base: "none", lg: "flex" }}
        flexDirection="column-reverse"
        listStyleType="none"
        _before={{
          content: "''",
          height: "90px",
          background: lineBg,
          margin: "0 auto",
          width: "1px",
        }}
      >
        <Link href="https://www.linkedin.com/in/umarluqman/" isExternal>
          <chakra.li mt={2} mb={4}>
            <Linkedin width={24} strokeWidth={1.8}></Linkedin>
          </chakra.li>
        </Link>
        <Link href="https://codesandbox.io/u/umarluqman" isExternal>
          <chakra.li my={2}>
            <Codesandbox width={24} strokeWidth={1.8}></Codesandbox>
          </chakra.li>
        </Link>
        <Link href="https://github.com" isExternal>
          <chakra.li my={2}>
            <Github width={24} strokeWidth={1.8}></Github>
          </chakra.li>
        </Link>
        <Link href="https://twitter.com/umarlqmn" isExternal>
          <chakra.li my={2}>
            <Twitter width={24} strokeWidth={1.8}></Twitter>
          </chakra.li>
        </Link>
      </chakra.ul>
      <chakra.main minHeight={"82vh"}>{children}</chakra.main>
      <Footer />
    </Grid>
  );
};
