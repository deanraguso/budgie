import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import FeatureHero from "./components/FeatureHero";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <ChakraProvider>
      <FeatureHero/>
      <UserForm/>
    </ChakraProvider>
  );
}

export default App;
