import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2 } from "styles/styleUtils";
import lettuce from "assets/lettuce.png";
import apis from "api";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

function LoginEventName({ ...props }) {
  const history = useHistory();
  const s = window.location.search;
  const param = new URLSearchParams(s);
  const email = param.get("email");
  let user;
  const [name, setName] = useState("Welcome");

  async function callGetUserByEmailAPI() {
    user = await apis.getUserByEmail(email);
  }

  useEffect(async () => {
    await callGetUserByEmailAPI();
    setName(user.data.data.name);
  }, []);

  const generateSession = async () => {
    const { data: sessionId } = await axios.post(`${SERVER_URL}/session`, {
      sessionName: document.getElementById("input-session-name").value
    });
    history.push(`session/${sessionId}/registered`);
    window.location.href = "/order-screen";
  };

  async function callUpdateUsersBySessionIdAPI(sessionId) {
    const newUser = await callGetUserByEmailAPI(email);
    await apis.updateSessionUsersById(sessionId, newUser).then(res => {
      window.alert(`Users updated successfully`);
    });
  }

  async function callGetAllSessionsAPI() {
    let sessions = await apis.getAllSessions();
    console.log(sessions, "sessions");
    let sessionId;
    for (let i = 0; i < sessions.length; i++) {
      if (sessions[i].data.data.name === name) {
        sessionId = sessions[i]._id;
      }
    }
    await callUpdateUsersBySessionIdAPI(sessionId);
  }

  const joinSession = async () => {
    await callGetAllSessionsAPI();
    window.location.href = "/order-screen";
  };

  return (
    <Theme>
      <PageContainer>
        <img id="logo" alt="LettuceEat logo" width="200" src={lettuce} />
        <Title>LettuceEat</Title>
        <H2>Easy bill splitting</H2>
        <br />
        <H2>
          <b>{name}</b>
        </H2>
        <InputContainer>
          <Input
            id={"input-session-name"}
            size={"medium"}
            label={"Event Name"}
            placeholder={"nw++ Picnic"}
          />
        </InputContainer>
        <InputContainer>
          <Button
            size={"medium"}
            type={"primary"}
            label={"Join Session"}
            onClick={joinSession}
          />
          <Button
            size={"medium"}
            type={"primary"}
            label={"Create Session"}
            onClick={generateSession}
          />
        </InputContainer>
      </PageContainer>
    </Theme>
  );
}

export default LoginEventName;
