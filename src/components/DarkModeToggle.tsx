import { theme, useColorMode } from "@chakra-ui/react";
import { motion, SVGMotionProps } from "framer-motion";
import React from "react";

const Circle = (props: SVGMotionProps<SVGCircleElement>) => {
  console.log({ props });
  return <motion.circle id="Oval" r="17.5px" initial={false} {...props} />;
};

export const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <label
      htmlFor={"toggleDarkMode"}
      style={{ width: "24px", cursor: "pointer", display: "table" }}
    >
      <input
        id={"toggleDarkMode"}
        type="checkbox"
        style={{ display: "none" }}
        aria-label={"Toggle light mode"}
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <motion.svg
        width="40px"
        height="40px"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        variants={{
          light: { rotate: 0 },
          dark: { rotate: colorMode === "dark" ? 180 : 0 },
        }}
        initial={false}
        animate={colorMode}
        style={{ originX: "50%", originY: "50%", translateY: "0%" }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 50,
        }}
      >
        <Circle
          cx="200.5"
          cy="292.5px"
          variants={{
            light: { cy: "220.5px", scale: 0, opacity: 0 },
            dark: { cy: "292.5px", scale: 1, opacity: 1, fill: "white" },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "dark" ? 0.1 : 0,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="114.5px"
          cy="251.5"
          variants={{
            light: { cx: "150px", scale: 0, opacity: 0 },
            dark: { cx: "114.5px", scale: 1, opacity: 1, fill: "white" },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "dark" ? 0.2 : 0,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="114.5px"
          cy="169.5px"
          variants={{
            light: { cx: "150px", scale: 0, opacity: 0 },
            dark: { cx: "114.5px", scale: 1, opacity: 1, fill: "white" },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "dark" ? 0.3 : 0,
            type: "spring",
            stiffness: 100,
          }}
        />

        <Circle
          cx="200.5"
          cy="105.5px"
          variants={{
            light: { cy: "160px", scale: 0, opacity: 0 },
            dark: { cy: "111.5px", scale: 1, opacity: 1, fill: "white" },
          }}
          transition={{
            duration: 0,
            delay: colorMode === "dark" ? 0.4 : 0,
            type: "spring",
            stiffness: 100,
          }}
          animate={colorMode}
        />
        <Circle
          cx="285.5px"
          cy="169.5"
          variants={{
            light: { cx: "230px", scale: 0, opacity: 0 },
            dark: { cx: "285.5px", scale: 1, opacity: 1, fill: "white" },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "dark" ? 0.5 : 0,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="285.5px"
          cy="251.5"
          variants={{
            light: { cx: "240px", scale: 0, opacity: 0 },
            dark: { cx: "285.5px", scale: 1, opacity: 1, fill: "white" },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "dark" ? 0.6 : 0,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="200"
          cy="200"
          r="58px"
          variants={{
            light: { r: "90px", fill: theme.colors.gray[900] },
            dark: { r: "58px", fill: "white" },
          }}
          animate={colorMode}
          initial={false}
          transition={{ duration: 0.7 }}
        />
        <Circle
          cx="250"
          cy="150"
          r="0px"
          variants={{
            light: {
              r: "90px",
              cx: 250,
              opacity: 1,
              transition: { duration: 0.4, type: "spring", stiffness: 50 },
              fill: "white",
            },
            dark: {
              r: "40px",
              cx: 450,
              opacity: 0,
              transition: { duration: 0.4 },
              fill: "rgba(139, 140, 145, 0.129)", // mid point between gray.900 and white with less opacity
            },
          }}
          animate={colorMode}
          initial={false}
        />
      </motion.svg>
    </label>
  );
};
