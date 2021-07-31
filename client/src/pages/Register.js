import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2 } from "styles/styleUtils";
import { useHistory, Link } from "react-router-dom";
import lettuce from "assets/lettuce.png";
import apis from "api";

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

const SERVER_URL = "http://localhost:9000";

function Register({ ...props }) {
  let params;

  async function callRegisterUserAPI() {
    let name = document.getElementById("input-session-name").value;
    let email = document.getElementById("input-session-email").value;
    let password = document.getElementById("input-session-password").value;
    let newUser = {
      name,
      email,
      password
    };
    params = new URLSearchParams({
      email: email
    });
    await apis.registerUser(newUser).then(res => {
      if (res.status === 400) {
        window.alert("Unable to create user");
      } else {
        console.log(res.data)
        window.alert(`User created successfully`);
      }
    });
  }

  const register = async () => {
    await callRegisterUserAPI();
    window.location.href = "/login-event-name?" + params.toString();
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
            id={"input-session-name"}
            size={"medium"}
            label={"Name*"}
            placeholder={"John Doe"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-session-email"}
            size={"medium"}
            label={"Email*"}
            placeholder={"johndoe@gmail.com"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-session-password"}
            size={"medium"}
            label={"Password"}
            placeholder={"optional"}
          />
        </InputContainer>
        <br />
        <Button
          size={"medium"}
          type={"primary"}
          label={"Register"}
          onClick={register}
        />
      </PageContainer>
    </Theme>
  );
}

export default Register;
