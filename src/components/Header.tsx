import { Flex, useColorMode, HStack, Button } from "@chakra-ui/react";
import { Link } from "./Link";
import React from "react";
import { Sun, Moon } from "emotion-icons/feather";

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
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

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
        <Button onClick={toggleColorMode} borderRadius="none">
          {isDark ? (
            <Sun width={20} strokeWidth={1.6} />
          ) : (
            <Moon width={20} strokeWidth={1.8} />
          )}
        </Button>
      </HStack>
    </Flex>
  );
};
