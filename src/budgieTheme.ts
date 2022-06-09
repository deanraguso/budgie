interface Props {
  colorMode: "light" | "dark" | null;
}

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
      baseStyle: ({ colorMode }: Props) => ({
        color: colorMode === "light" ? "black" : "white",
        fontWeight: "bold",
      }),
    },
  },
};

export default budgieTheme;
