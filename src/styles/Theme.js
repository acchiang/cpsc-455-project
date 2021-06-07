import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      darkGreen: "#064420",
      lightGreen: "#e4efe7",
      beige: "#faf1e6",
      lightBeige: "#fdfaf6"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "12px",
      medium: "24px",
      large: "36px",
      default: "24px"
    }
  }

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
