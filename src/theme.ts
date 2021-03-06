import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import budgieTheme from "./budgieTheme";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(budgieTheme, { config });

export default theme;
