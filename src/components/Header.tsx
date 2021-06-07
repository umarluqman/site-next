import { Flex, Grid, HStack } from "@chakra-ui/react";
import { Link } from "./Link";
import React from "react";

const URLs = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/bookmarks",
    title: "Bookmarks",
  },
];

export const Header = () => {
  return (
    <Flex as="header" w="full" align="center" justify="center">
      <HStack
        maxW={800}
        w="full"
        justify={{ base: "space-between", sm: "flex-end" }}
        p={4}
        as="nav"
        spacing={8}
      >
        {URLs.map(({ url, title }) => (
          <Link href={url} key={url}>
            {title}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
