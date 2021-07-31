import { ThemeProvider } from "styled-components";

const screenBreakpoints = {
  smallMobile: 400,
  mobile: 680,
  tablet: 768,
  desktop: 992,
}

const defaultTheme = {
  colors: {
    background: "#ffffff",
    primary: "#faf1e6",
    secondary: "#e4efe7",
    neutral: "#fdfaf6",
    accent: "#064420",
    text: "#000000"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "12px",
    medium: "24px",
    large: "36px",
    default: "24px",
    title: "64px"
  },
  fontWeight: "normal",
  mediaQueries: {
    smallMobile: `@media only screen and (max-width: ${screenBreakpoints.smallMobile}px)`,
    mobile: `@media only screen and (max-width: ${screenBreakpoints.mobile}px)`,
    tablet: `@media only screen and (max-width: ${screenBreakpoints.tablet}px)`,
    desktop: `@media only screen and (max-width: ${screenBreakpoints.desktop}px)`,
  },
}

const darkTheme = {
  colors: {
    background: "#000000",
    primary: "#3d3d3d",
    secondary: "#3c3c3c",
    neutral: "#064420",
    accent: "#96C77F",
    text: "#ffffff"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "12px",
    medium: "24px",
    large: "36px",
    default: "24px",
    title: "64px"
  },
  fontWeight: "normal",
  mediaQueries: {
    smallMobile: `@media only screen and (max-width: ${screenBreakpoints.smallMobile}px)`,
    mobile: `@media only screen and (max-width: ${screenBreakpoints.mobile}px)`,
    tablet: `@media only screen and (max-width: ${screenBreakpoints.tablet}px)`,
    desktop: `@media only screen and (max-width: ${screenBreakpoints.desktop}px)`,
  },
}
const THEMES = { defaultTheme, darkTheme }

const Theme = ({ children }) => {
  let localTheme = window.localStorage.getItem('localTheme')
  if (!Object.keys(THEMES).includes(localTheme)) {
    localTheme = 'defaultTheme'
  }
  const selectedTheme = localTheme ? THEMES[localTheme] : darkTheme
  return (
    <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
  )
};

export default Theme;
