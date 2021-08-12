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
          label={"light"}
          onClick={() => {
            window.localStorage.setItem("localTheme", "defaultTheme");
            window.location.reload();
          }}
        />
        <Button
          size={"medium"}
          type={"primary"}
          label={"dark"}
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
          label={"Take me to the front page"}
          onClick={() => (window.location.href = "/")}
        />
        <h2>User Icons</h2>
        <TextIcon textLetter={"a"} size={"small"} color={"#8EDB31"}>
          small
        </TextIcon>
        <TextIcon textLetter={"b"} size={"default"} color={"#31B4DB"}>
          default
        </TextIcon>
        <h2>Buttons</h2>
        <p>small</p>
        <Button size={"small"} type={"primary"} label={"primary"} />
        <Button size={"small"} type={"secondary"} label={"secondary"} />
        <Button size={"small"} type={"text"} label={"text"} />
        <p>medium</p>
        <Button size={"medium"} type={"primary"} label={"primary"} />
        <Button size={"medium"} type={"secondary"} label={"secondary"} />
        <Button size={"medium"} type={"text"} label={"text"} />
        <p>large</p>
        <Button size={"large"} type={"primary"} label={"primary"} />
        <Button size={"large"} type={"secondary"} label={"secondary"} />
        <Button size={"large"} type={"text"} label={"text"} />
        <p>others</p>
        <Button label={"default"} />
        <Button
          label={"click me!"}
          onClick={() => {
            alert("button clicked");
          }}
        />
        <br />
        <Button label={"disabled"} disabled />
        <Button label={"disabled"} type={"secondary"} disabled />
        <h2>User Inputs</h2>
        <Input size={"small"} placeholder={"Password"} type={"password"} />
        <Input size={"large"} border={"2px solid green"} />
        <br />
        <Input
          size={"default"}
          label={"default"}
          placeholder={"disabled"}
          disabled
        />
        <br />
        <Input
          size={"medium"}
          label={"side by side"}
          placeholder={"username"}
        />
        <h2>Dollar Amount Component</h2>
        <DollarAmount size={"medium"} label={"Subtotal"} amount={"12.99"} />
        <h2>Total Amount Component</h2>
        <TotalAmount size={"medium"} menuAmount={"12.99"} tipAmount={"1.50"} />
        <h2>Dropdown</h2>
        <p>small</p>
        <Dropdown
          size={"small"}
          options={optionsNoInput}
          defaultOption={"15%"}
        ></Dropdown>
        <p>medium (default)</p>
        <Dropdown options={optionsNoInput}></Dropdown>
        <p>large</p>
        <Dropdown
          size={"large"}
          options={optionsWithInput}
          defaultOption={"20%"}
          showInput={showInput}
          setShowInput={setShowInput}
          customValue={"Other"}
        ></Dropdown>
        <p>Back button</p>
        <BackButton url={"create-session"} />
        <QuantitySelector value={selectorValue1} setValue={setSelectorValue1} />
      </Container>
    </Theme>
  );
}

export default Charcuterie;
