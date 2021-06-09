import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      primary: "#faf1e6",
      secondary: "#e4efe7",
      neutral: "#fdfaf6",
      accent: "#064420"
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
