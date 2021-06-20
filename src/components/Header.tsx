import { Flex, HStack } from "@chakra-ui/react";
import { DarkModeToggle } from "components/DarkModeToggle";
import React from "react";
import { Link } from "./Link";

const URLs = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/shorts",
    title: "Shorts",
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
        spacing={2}
      >
        {URLs.map(({ url, title }) => (
          <Link href={url} key={url} p={1}>
            {title}
          </Link>
        ))}
        <DarkModeToggle />
      </HStack>
    </Flex>
  );
};
