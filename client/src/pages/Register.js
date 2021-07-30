import axios from "axios";
import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2 } from "styles/styleUtils";
import { useHistory } from "react-router-dom";
import lettuce from "assets/lettuce.png";

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
  const history = useHistory();

  //   // TODO: Ask server for a session and navigate to custom session ??? unscoped
  //   const generateSession = async () => {
  //     const { data: sessionId } = await axios.post(`${SERVER_URL}/session`, {
  //       sessionName: document.getElementById("input-session-name").value
  //       // sessionOwner: document.getElementById("input-session-owner).value
  //     });
  //     history.push(`session/${sessionId}/registered`);
  //   };

  const register = async () => {
    window.location.href = "/login-event-name";
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
            id={"input-session-first-name"}
            size={"medium"}
            label={"First Name*"}
            placeholder={"John"}
          />
          <Input
            id={"input-session-last-name"}
            size={"medium"}
            label={"Last Name*"}
            placeholder={"Doe"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-session-email"}
            size={"medium"}
            label={"Email*"}
            placeholder={"johndoe@gmail.com"}
          />
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
