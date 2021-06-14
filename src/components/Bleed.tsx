import { chakra, StyleProps } from "@chakra-ui/react";
import React from "react";

interface BleedProps extends StyleProps {
  children?: React.ReactNode;
}

export const Bleed = ({ children, ...chakraProps }: BleedProps) => {
  return (
    <chakra.div
      w="100vw"
      pos="relative"
      left="50%"
      right="50%"
      mr="-50vw"
      ml="-50vw"
      {...chakraProps}
    >
      {children}
    </chakra.div>
  );
};
