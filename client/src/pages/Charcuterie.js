import { useState } from "react";
import styled from "styled-components";
import Theme from "styles/Theme";
import TextIcon from "components/TextIcon";
import Button from "components/Button";
import Input from "components/Input";
import DollarAmount from "components/DollarAmount";
import TotalAmount from "components/TotalAmount";
import Dropdown from "components/Dropdown";
import BackButton from "components/BackButton";
import QuantitySelector from "components/QuantitySelector";
import { I18N_LANGUAGE } from "../i18n"

import { useTranslation } from 'react-i18next';

function Charcuterie({ children }) {

  const { t, i18n } = useTranslation();

  const [showInput, setShowInput] = useState(false);
  const optionsWithInput = ["10%", "15%", "20%", "Other"];
  const optionsNoInput = ["10%", "15%", "20%"];

  const Container = styled.div`
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.text};
  `;

  const [selectorValue1, setSelectorValue1] = useState(0);
  return (
    <Theme>
      <Container>
        <Button
          size={"medium"}
          type={"primary"}
          label={t("light")}
          onClick={() => {
            window.localStorage.setItem("localTheme", "defaultTheme");
            window.location.reload();
          }}
        />
        <Button
          size={"medium"}
          type={"primary"}
          label={t("dark")}
          onClick={() => {
            window.localStorage.setItem("localTheme", "darkTheme");
            window.location.reload();
          }}
        />
        <Button
          size={"medium"}
          type={"primary"}
          label={t("toggle-lang")}
          onClick={() => {
            if(i18n.language === "en") {
              i18n.changeLanguage("fr"); 
              window.localStorage.setItem(I18N_LANGUAGE, "fr");
            } else {
              i18n.changeLanguage("en");
              window.localStorage.setItem(I18N_LANGUAGE, "en");
            }
          }}
        />
        <Button
          size={"medium"}
          type={"primary"}
          label={t("front-page")}
          onClick={() => (window.location.href = "/")}
        />
        <h2>{t("user-icons")}</h2>
        <TextIcon textLetter={"a"} size={"small"} color={"#8EDB31"}>
          {t("small")}
        </TextIcon>
        <TextIcon textLetter={"b"} size={"default"} color={"#31B4DB"}>
          {t("default")}
        </TextIcon>
        <h2>{t("buttons")}</h2>
        <p>{t("small")}</p>
        <Button size={"small"} type={"primary"} label={t("primary")} />
        <Button size={"small"} type={"secondary"} label={t("secondary")} />
        <Button size={"small"} type={"text"} label={t("text")} />
        <p>{t("medium")}</p>
        <Button size={"medium"} type={"primary"} label={t("primary")} />
        <Button size={"medium"} type={"secondary"} label={t("secondary")} />
        <Button size={"medium"} type={"text"} label={t("text")} />
        <p>{t("large")}</p>
        <Button size={"large"} type={"primary"} label={t("primary")} />
        <Button size={"large"} type={"secondary"} label={t("secondary")} />
        <Button size={"large"} type={"text"} label={t("text")} />
        <p>{t("others")}</p>
        <Button label={t("default")} />
        <Button
          label={t("click-me")}
          onClick={() => {
            alert(t("button-clicked"));
          }}
        />
        <br />
        <Button label={t("disabled")} disabled />
        <Button label={t("disabled")} type={"secondary"} disabled />
        <h2>{t("user-inputs")}</h2>
        <Input size={"small"} placeholder={t("password")} type={"password"} />
        <Input size={"large"} border={"2px solid green"} />
        <br />
        <Input
          size={"default"}
          label={"default"}
          placeholder={t("disabled")}
          disabled
        />
        <br />
        <Input
          size={"medium"}
          label={t("side-by-side")}
          placeholder={t("username")}
        />
        <h2>{t("dollar-amt-component")}</h2>
        <DollarAmount size={"medium"} label={t("subtotal")} amount={"12.99"} />
        <h2>{t("total-amt-component")}</h2>
        <TotalAmount size={"medium"} menuAmount={"12.99"} tipAmount={"1.50"} />
        <h2>{t("dropdown")}</h2>
        <p>{t("small")}</p>
        <Dropdown
          size={"small"}
          options={optionsNoInput}
          defaultOption={"15%"}
        ></Dropdown>
        <p>{t("medium")}</p>
        <Dropdown options={optionsNoInput}></Dropdown>
        <p>{t("large")}</p>
        <Dropdown
          size={"large"}
          options={optionsWithInput}
          defaultOption={"20%"}
          showInput={showInput}
          setShowInput={setShowInput}
          customValue={t("other")}
        ></Dropdown>
        <p>{t("back-button")}</p>
        <BackButton url={"create-session"} />
        <QuantitySelector value={selectorValue1} setValue={setSelectorValue1} />
      </Container>
    </Theme>
  );
}

export default Charcuterie;
