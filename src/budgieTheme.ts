import { ColorSchemeProps } from "./types";
import { modeCol } from "./colors";
import colors from "./colors";

const { light } = colors;

const budgieTheme = {
  colors: {
    green: light.green,
    red: light.red,
  },
  bg: {
    colours: {
      primary: light.primary,
      primaryLight: light.primaryLight,
    },
  },
  components: {
    Button: {
      baseStyle: ({ colorMode: cM }: ColorSchemeProps) => ({
        color: modeCol(cM, "base"),
      }),
    },
  },
};

export default budgieTheme;
