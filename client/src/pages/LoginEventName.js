import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { Title, H2 } from "styles/styleUtils";
import lettuce from "assets/lettuce.png";
import apis from "api";
import { useState, useEffect } from "react";

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

const joinSession = async () => {
  window.location.href = "/order-screen";
};

const createSession = async () => {
  window.location.href = "/order-screen";
};

function LoginEventName({ ...props }) {
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
            onClick={createSession}
          />
        </InputContainer>
      </PageContainer>
    </Theme>
  );
}

export default LoginEventName;
