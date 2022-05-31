import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColourModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
};

export default ColourModeToggle;
