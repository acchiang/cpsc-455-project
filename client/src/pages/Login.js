import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2 } from "styles/styleUtils";
import lettuce from "assets/lettuce.png";
import { useTranslation } from "react-i18next";
import ToggleLinks from "components/ToggleLinks";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding-top: 100px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${p => p.theme.colors.primary};
`;

const InputContainer = styled.div`
  flex-direction: row;
`;

function Login({ ...props }) {

  const { t } = useTranslation();
  const login = async () => {
    window.location.href = "/login-event-name";
  };

  return (
    <Theme>
      <PageContainer>
        <img id="logo" alt="LettuceEat logo" width="200" src={lettuce} />
        <Title>{t("title")}</Title>
        <H2>{t("tagline")}</H2>
        <br />
        <br />
        <InputContainer>
          <Input
            id={"input-session-name"}
            size={"medium"}
            label={t("event-name")}
            placeholder={t("event-name-placeholder")}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-session-email"}
            size={"medium"}
            label={t("email")}
            placeholder={"email@gmail.com"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-session-password"}
            size={"medium"}
            label={t("password")}
            placeholder={"optional"}
          />
        </InputContainer>
        <br />
        <Button
          size={"medium"}
          type={"primary"}
          label={t("login")}
          onClick={login}
        />
        <ToggleLinks />
      </PageContainer>
    </Theme>
  );
}

export default Login;
