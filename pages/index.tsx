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
  const textColor = useColorModeValue("gray.800", "gray.100");
  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={4} mt={20} as="h1" size="2xl" textAlign="center">
        Umar Luqman
      </Heading>
      <Text color={textColor} textAlign="center">
        Life-long learner, front-end developer, and practising calisthenics.
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
      <Text mt={1} color={textColor}>
        No more mindlessly browsing, only access distracting website with a
        careful thought.
      </Text>

      <Heading mb={5} mt={20} as="h2" size="xl">
        What I&apos;m up to now?
      </Heading>
      <List spacing={3} color={textColor}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="accent.700" />
          Practising progression exercises to my first muscle-up.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="accent.700" />
          Finishing this website, yeah I know it&apos;s meta.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="accent.700" />
          Learning Web 3.0
        </ListItem>
      </List>
      <Text textAlign="right" mt={4} fontStyle="italic">
        Last updated in 13th June 2021
      </Text>
    </chakra.div>
  );
}
