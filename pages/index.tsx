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
        href="https://github.com/umarluqman/focusmode-webext"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        FocusMode v2 <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        The next iteration of Focus Mode web extension based on users feedbacks,
        comes with new features and polished look. Made with Plasmo, Framer
        Motion & Tailwind.
      </Text>
      <Link
        href="https://focusmode.app"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        FocusMode <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        A Chrome extension to add confirmation popup when accessing distracting
        website. Crossed 9,000+ users with 4++/5 ratings.
      </Text>

      {/* <Link
        href="https://github.com/umarluqman/geo-nft"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        Generative on-chain NFT in Harmony ONE blockchain{" "}
        <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        My experimental Web 3.0 project, it&apos;s a submission for Harmony ONE
        hackathon, built with NextJS, Hardhat, Mapbox, Solidity & TypeScript.
      </Text>

      <Link
        href="https://github.com/umarluqman/dashboard"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        Anti Sybils Dashboard
        <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        Won 3rd place in Open Data Hackathon 2023 by Gitcoin.
      </Text> */}

      <Link
        href="https://usrahdd.my/"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        UsraHDD Landing Page
        <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor}>
        Static landing Page for a mobile application, built with NextJS, Taiwind
        & TypeScript, & Ghost Content API.
      </Text>
    </chakra.div>
  );
}
