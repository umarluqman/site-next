import { chakra, Text, Link } from "@chakra-ui/react";
import { Github, Twitter } from "emotion-icons/feather";
import React from "react";

export const Footer = () => {
  return (
    <chakra.footer
      display="flex"
      p={8}
      width="full"
      justifyContent="flex-end"
      alignItems="center"
      mt={12}
      maxW={800}
      w="full"
      m="0 auto"
    >
      <Text>Made with love from 🇲🇾</Text>
      <chakra.div w={3}></chakra.div>
      <Link href="https://github.com" isExternal>
        <Github width={24} strokeWidth={1.8}></Github>
      </Link>
      <chakra.div w={3}></chakra.div>

      <Link href="https://twitter.com/umarlqmn" isExternal>
        <Twitter width={24} strokeWidth={1.8}></Twitter>
      </Link>
    </chakra.footer>
  );
};
