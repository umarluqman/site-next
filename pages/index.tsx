import { chakra, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function Home(): ReactNode {
  const textColor = useColorModeValue("gray.800", "gray.100");
  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={4} mt={8} as="h1" size="xl">
        Umar Luqman
      </Heading>
      <Text color={textColor}>
        Life-long learner, front-end developer, and practising calisthenics.
      </Text>

      <Heading mb={4} mt={8} as="h1" size="xl"></Heading>
      <chakra.div h={100}></chakra.div>
    </chakra.div>
  );
}
