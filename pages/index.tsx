import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  chakra,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Home(): ReactNode {
  const textColor = useColorModeValue("gray.800", "gray.400");
  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={4} mt={20} as="h1" size="2xl">
        Umar Luqman
      </Heading>
      <Text color={textColor}>
        Life-long learner, full-stack developer and into Bitcoin.
      </Text>

      <Heading mb={5} mt={20} as="h2" size="xl">
        Projects
      </Heading>
      <Link
        href="https://gunabitcoin.my"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        GunaBitcoin.MY <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        The most up-to-date business / organization directory that accept
        Bitcoin as payment in Malaysia.
      </Text>
      <Link
        href="https://primal.net/e/note1f7d8n6vfdztnft23tl5lf8a86qldru0us9rgmrhwq9dfmgr6z9js2vkvz9"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        Satsigner <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        Message signer and UTXO management mobile app for Bitcoin. Work in
        progress. (Part timer)
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
        A browser extension to help people being mindful surfing the web.
        Crossed 17,000+ users with 4.7/5 ratings. End-to-end development (Auth,
        Database, Payment Processor - Stripe)
      </Text>

      <Link
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
      </Text>

      <Link
        href="https://dialisis.my"
        isExternal
        fontWeight="700"
        fontSize="lg"
      >
        Dialysis.MY <ExternalLinkIcon mx="2px" mt={-1} />
      </Link>
      <Text mt={1} color={textColor} mb={10}>
        Dialysis center directory in Malaysia. Leveraging programmatic SEO.
      </Text>

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
        Static marketing landing page for a mobile application, built
        TypeScript, & Ghost CMS.
      </Text>
    </chakra.div>
  );
}
