import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import { useScrollIndicator } from "react-use-scroll-indicator";

export const ScrollIndicator = () => {
  const scrollbarBg = useColorModeValue("gray.300", "gray.100");

  const [state] = useScrollIndicator();
  return (
    <chakra.div
      pos="fixed"
      top={"30%"}
      right={"18%"}
      display={"flex"}
      width="1px"
      h={300}
      background="accent.500"
      _after={{
        content: "''",
        height: (state.value / 100) * 300,
        width: "1px",
        background: scrollbarBg,
        margin: "0 auto",
      }}
    ></chakra.div>
  );
};
