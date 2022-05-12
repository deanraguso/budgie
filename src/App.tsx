import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import FeatureHero from "./components/FeatureHero";

const App = () => {
  return (
    <ChakraProvider>
      <FeatureHero/>
    </ChakraProvider>
  );
}

export default App;
