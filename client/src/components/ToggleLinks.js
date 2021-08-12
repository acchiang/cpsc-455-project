import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { I18N_LANGUAGE } from "../i18n";
import { Toggle } from "react-toggle-component";
import { useState } from "react";

const inputSize = {
  small: 12,
  medium: 24,
  large: 36,
  default: 24
};

const Label = styled.label`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
  font-size: ${p =>
    p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeight};
  color: ${p => p.fontColor ?? p.theme.colors.text};
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${inputSize["small"] * 1.5}px;
    text-align: right;
  }
`;

const Padding = styled.div`
  padding: 8px;
`;

function ToggleLinks({ ...props }) {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light-mode");

  const changeLanguage = () => {
    language === "English" ? setLanguage("French") : setLanguage("English");
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
      window.localStorage.setItem(I18N_LANGUAGE, "fr");
    } else {
      i18n.changeLanguage("en");
      window.localStorage.setItem(I18N_LANGUAGE, "en");
    }
  };

  const changeTheme = () => {
    theme === "Light-mode" ? setTheme("Dark-mode") : setTheme("Light-mode");
    if (window.localStorage.getItem("localTheme") === "defaultTheme") {
      window.localStorage.setItem("localTheme", "darkTheme");
    } else {
      window.localStorage.setItem("localTheme", "defaultTheme");
    }
    window.location.reload();
  };

  return (
    <>
      <Padding>
        <Label>
          {language}
          <Toggle
            leftBackgroundColor="blue"
            rightBackgroundColor="green"
            borderColor="black"
            knobColor="white"
            name="toggle-language"
            onToggle={() => changeLanguage()}
          />
        </Label>
      </Padding>
      <Label>
        {theme}
        <Toggle
          leftBackgroundColor="grey"
          rightBackgroundColor="black"
          borderColor="black"
          knobColor="white"
          name="toggle-theme"
          onToggle={() => changeTheme()}
        />
      </Label>
    </>
  );
}

export default ToggleLinks;
