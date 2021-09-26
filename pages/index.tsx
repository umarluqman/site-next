import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  chakra,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function Home(): ReactNode {
  const textColor = useColorModeValue("gray.800", "gray.400");
  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={4} mt={20} as="h1" size="2xl">
        Umar Luqman
      </Heading>
      <Text color={textColor}>
        Life-long learner, front-end developer, and into calisthenics.
      </Text>

      <Heading mb={5} mt={20} as="h2" size="xl">
        Projects
      </Heading>
      <Link
        href="https://focusmode.app"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        FocusMode <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={8}>
        A Chrome extension to add confirmation popup when accessing distracting
        website if the Focus mode is on.
      </Text>

      <Link
        href="https://github.com/umarluqman/geo-nft"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        NFT Marketplace in Harmony ONE blockchain{" "}
        <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor}>
        My experimental Web 3.0 project, it&apos;s a submission for Harmony ONE
        hackathon, built with NextJS, Hardhat & TypeScript.
      </Text>

      <Heading mb={5} mt={20} as="h2" size="xl">
        What I&apos;m up to now?
      </Heading>
      <List spacing={3} color={textColor}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="accent.700" />
          Bought a calisthenics e-book,{" "}
          <Link
            href="https://g.co/kgs/o3rkyq"
            isExternal
            color="accent.700"
            fontWeight={500}
          >
            Complete Calisthenics
            <ExternalLinkIcon ml="3px" mt={-1} />
          </Link>
          . Excited to dive in!
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="accent.700" />
          Looking for a full-time job in Web 3.0 space.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="accent.700" />
          Learning about Web 3.0.
        </ListItem>
      </List>

      <Text textAlign="right" mt={4} fontStyle="italic">
        Last updated in 24th September 2021
      </Text>
    </chakra.div>
  );
}
