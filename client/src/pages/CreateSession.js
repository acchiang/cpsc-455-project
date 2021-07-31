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

function CreateSession({ ...props }) {
  const history = useHistory();

  // TODO: Ask server for a session and navigate to custom session ??? unscoped
  const generateSession = async () => {
    const { data: sessionId } = await axios.post('/session', {
      sessionName: document.getElementById("input-session-name").value
      // sessionOwner: document.getElementById("input-session-owner).value
    });
    history.push(`session/${sessionId}/registered`);
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
            id={"input-session-owner"}
            size={"medium"}
            label={"Your Name*"}
            placeholder={"John Doe"}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id={"input-session-name"}
            size={"medium"}
            label={"Event Name*"}
            placeholder={"Dine Out"}
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
          label={"Create Session"}
          onClick={generateSession}
        />
      </PageContainer>
    </Theme>
  );
}

export default CreateSession;
