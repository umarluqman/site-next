import { chakra, ChakraProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type BleedProps = {
  children?: ReactNode;
};

export const Bleed: React.FC = ({ children }: BleedProps & ChakraProps) => {
  return (
    <chakra.div
      w="100vw"
      pos="relative"
      h="200px"
      left="50%"
      right="50%"
      mr="-50vw"
      ml="-50vw"
    >
      {children}
    </chakra.div>
  );
};
