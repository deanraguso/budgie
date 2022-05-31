import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ColourModeToggle from "./ColourModeToggle";
import FeatureHero from "./components/FeatureHero";
import UserForm from "./components/UserForm";
import theme from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColourModeToggle />
      <FeatureHero />
      <UserForm />
    </ChakraProvider>
  );
};

export default App;
