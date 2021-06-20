import { chakra, Text, Link } from "@chakra-ui/react";
import { Codesandbox, Github, Linkedin, Twitter } from "emotion-icons/feather";
import React from "react";

export const Footer = () => {
  return (
    <chakra.footer
      display="flex"
      p={8}
      pt={{ base: 20, sm: 8 }}
      width="full"
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ md: "flex-end" }}
      alignItems="center"
      maxW={800}
      w="full"
      m="0 auto"
    >
      <chakra.ul
        display={{ base: "flex", lg: "none" }}
        listStyleType="none"
        w="full"
        justifyContent={{ base: "space-between", sm: "flex-start" }}
      >
        <Link href="https://www.linkedin.com/in/umarluqman/" isExternal>
          <chakra.li mr={2} ml={4}>
            <Linkedin width={24} strokeWidth={1.8}></Linkedin>
          </chakra.li>
        </Link>
        <Link href="https://codesandbox.io/u/umarluqman" isExternal>
          <chakra.li mx={2}>
            <Codesandbox width={24} strokeWidth={1.8}></Codesandbox>
          </chakra.li>
        </Link>
        <Link href="https://github.com" isExternal>
          <chakra.li mx={2}>
            <Github width={24} strokeWidth={1.8}></Github>
          </chakra.li>
        </Link>
        <Link href="https://twitter.com/umarlqmn" isExternal>
          <chakra.li mx={2}>
            <Twitter width={24} strokeWidth={1.8}></Twitter>
          </chakra.li>
        </Link>
      </chakra.ul>
    </chakra.footer>
  );
};
