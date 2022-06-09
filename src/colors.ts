const colors: { [key: string]: { [key: string]: string } } = {
  light: {
    base: "#000",
    green: "#03C197",
    red: "#C30010",
    primary: "#EDF2F7",
    primaryLight: "#ABE1E7",
  },
  dark: {
    base: "#FFF",
    green: "#fc3e68",
    red: "#3cffef",
    primary: "#EDF2F7",
    primaryLight: "#ABE1E7",
  },
};

export const modeCol = (colorMode: string, color: string) =>
  colorMode === "light" ? colors.light[color] : colors.dark[color];

export default colors;
