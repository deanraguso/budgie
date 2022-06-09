import { ColorSchemeProps } from "./types";
import { modeCol } from "./colors";

const budgieTheme = {
  colors: {
    green: "#03C197",
    red: "#C30010",
  },
  bg: {
    colours: {
      primary: "EDF2F7",
      primaryLight: "ABE1E7",
    },
  },
  components: {
    Button: {
      baseStyle: ({ colorMode: cM }: ColorSchemeProps) => ({
        color: modeCol(cM, "base"),
        fontWeight: "bold",
      }),
    },
  },
};

export default budgieTheme;
