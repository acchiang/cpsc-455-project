import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2 } from "styles/styleUtils";
import lettuce from "assets/lettuce.png";
import apis from "api";
import { useTranslation } from "react-i18next";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding-top: 100px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${(p) => p.theme.colors.primary};
`;

const InputContainer = styled.div`
  flex-direction: row;
`;


function Register({ ...props }) {
  const { t } = useTranslation();
  async function callRegisterUserAPI() {
    const sessionId = localStorage.getItem("sessionId");
    const user = {
      name: document.getElementById("input-user-name").value,
      password: document.getElementById("input-user-password").value,
    };

    try {
      const res = await apis.registerUser(sessionId, user);
      return JSON.stringify(res.data);
    } catch (e) {
      window.alert(t("user-failed-alert"));
    }
  }

  const validateInput = () => {
    const name = document.getElementById("input-user-name").value;
    const password = document.getElementById("input-user-password").value;
    if (password && (password.length < 6 || password.length > 30)) {
      window.alert(t("password-alert"));
      return false;
    }
    if (!name) {
      window.alert(t("required-alert"));
      return false;
    }
    return true;
  };

  const register = async () => {
    const isValid = validateInput();

    if (isValid) {
      const user = await callRegisterUserAPI();
      if (user) {
        localStorage.setItem("user", user);
        window.location.href = "/order-screen";
      }
    } else {
      window.alert(t("required-alert"));
    }
  };

  return (
    <Theme>
      <PageContainer>
        <img id="logo" alt="LettuceEat logo" width="200" src={lettuce} />
        <Title>LettuceEat</Title>
        <H2>Easy bill splitting</H2>
        <br />
        <br />
        <InputContainer>
          <Input
            id={"input-user-name"}
            size={"medium"}
            label={t("users-name")}
            placeholder={t("users-name-placeholder")}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-user-password"}
            size={"medium"}
            label={t("password")}
            placeholder={t("optional")}
            type={"password"}
          />
        </InputContainer>
        <br />
        <Button
          size={"medium"}
          type={"primary"}
          label={t("join")}
          onClick={register}
        />
      </PageContainer>
    </Theme>
  );
}

export default Register;
