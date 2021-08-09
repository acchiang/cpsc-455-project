import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2, Logo } from "styles/styleUtils";
import lettuce from "assets/lettuce.png";
import apis from "api";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding-top: 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: ${(p) => p.theme.colors.primary};
  ${(p) => p.theme.mediaQueries.mobile} {
    padding-top: 50px;
  }
`;

const InputContainer = styled.div`
  flex-direction: row;
`;

function CreateSession({ ...props }) {
  const register = async () => {
    const isValid = validateInput();
    if (isValid) {
      const sessionId = await generateSession();
      const user = await generateUser(sessionId);

      localStorage.setItem("sessionId", sessionId);
      localStorage.setItem("user", user);

      window.location.href = "/order-screen";
    } else {
      window.alert("Please check the required fields");
    }
  };

  const validateInput = () => {
    const name = document.getElementById("input-user-name").value;
    const sessionName = document.getElementById("input-session-name").value;
    return !!name && !!sessionName;
  };

  const generateUser = async (sessionId) => {
    const user = {
      name: document.getElementById("input-user-name").value,
      password: document.getElementById("input-user-password").value,
    };

    try {
      const res = await apis.registerUser(sessionId, user);
      return JSON.stringify(res.data);
    } catch (e) {
      window.alert("Unable to create user or username is taken");
    } 
  };

  const generateSession = async () => {
    const payload = {
      sessionName: document.getElementById("input-session-name").value,
    };

    const { data: sessionId } = await apis.createSession(payload);
    return sessionId;
  };

  return (
    <Theme>
      <PageContainer>
        <Logo id="logo" alt="LettuceEat logo" width="200" src={lettuce}></Logo>
        <img />
        <Title>LettuceEat</Title>
        <H2>Easy bill splitting</H2>
        <br />
        <br />
        <InputContainer>
          <Input
            id={"input-session-name"}
            size={"medium"}
            label={"Event Name*"}
            placeholder={"Dine Out (required)"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-user-name"}
            size={"medium"}
            label={"Your Name*"}
            placeholder={"John Doe (required)"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-user-password"}
            size={"medium"}
            label={"Password"}
            placeholder={"optional"}
            type={"password"}
          />
        </InputContainer>
        <br />
        <Button
          size={"medium"}
          type={"primary"}
          label={"Create"}
          onClick={register}
        />
      </PageContainer>
    </Theme>
  );
}

export default CreateSession;
