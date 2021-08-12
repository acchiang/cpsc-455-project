
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { I18N_LANGUAGE } from "../i18n"

const ToggleLink = styled.a`
  text-decoration: underline;
  color: ${(p) => p.theme.colors.text };
`;


function ToggleLinks({ ...props }) {
    const { i18n, t } = useTranslation();
    return (
        <>
            <ToggleLink 
                style={{"text-decoration": "underline"}}
                onClick={() => {
                    if(i18n.language === "en") {
                    i18n.changeLanguage("fr"); 
                    window.localStorage.setItem(I18N_LANGUAGE, "fr");
                    } else {
                    i18n.changeLanguage("en");
                    window.localStorage.setItem(I18N_LANGUAGE, "en");
                    }
                }}
                >{t("toggle-lang")}</ToggleLink> 
                <ToggleLink
                style={{"text-decoration": "underline"}}
                onClick={() => {
                if (window.localStorage.getItem("localTheme") === "defaultTheme") {
                    window.localStorage.setItem("localTheme", "darkTheme");
                } else {
                    window.localStorage.setItem("localTheme", "defaultTheme");
                }
                window.location.reload();
                }}
            >{t("toggle-theme")}</ToggleLink>
      </>
    );
}

export default ToggleLinks;