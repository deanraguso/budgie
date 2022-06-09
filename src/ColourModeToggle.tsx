import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonStars, Sun } from "phosphor-react";
import React from "react";

const ColourModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex pos="absolute" w="100%" justifyContent="flex-end" pt={2}>
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none", bg: "" }}
        _hover={{ boxShadow: "none", bg: "" }}
        _active={{ boxShadow: "none", bg: "" }}
        w="fit-content"
        bg=""
      >
        {colorMode === "light" ? (
          <MoonStars fill="solid" size={28} />
        ) : (
          <Sun fill="solid" size={28} />
        )}
      </Button>
    </Flex>
  );
};

export default ColourModeToggle;
