import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import FeatureHero from "./components/FeatureHero";
import UserForm from "./components/UserForm";
import theme from "./theme";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark" | undefined>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  return (
    <ChakraProvider theme={theme}>
      <FeatureHero />
      <UserForm />
    </ChakraProvider>
  );
};

export default App;
