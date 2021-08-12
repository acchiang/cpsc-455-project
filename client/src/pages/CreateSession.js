/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input, {Label} from "components/Input";
import { Title, H2, Logo } from "styles/styleUtils";
import lettuce from "assets/lettuce.png";
import Dropdown from "components/Dropdown";
import apis from "api";

const serverURL = "http://localhost:9000";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding-top: 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: ${p => p.theme.colors.primary};
  ${p => p.theme.mediaQueries.mobile} {
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
    }
  };

  const validateInput = () => {
    const name = document.getElementById("input-user-name").value;
    const password = document.getElementById("input-user-password").value;
    const sessionName = document.getElementById("input-session-name").value;
    if (password && (password.length < 6 || password.length > 30)) {
      window.alert("Password must be at between 6 to 30 characters.");
      return false;
    }
    if (!name || !sessionName) {
      window.alert("Please fill in the required fields.");
      return false;
    }
    return true;
  };

  const generateUser = async sessionId => {
    const user = {
      name: document.getElementById("input-user-name").value,
      password: document.getElementById("input-user-password").value
    };

    try {
      const res = await apis.registerUser(sessionId, user);
      if (res) window.location.href = "/order-screen";
      return JSON.stringify(res.data);
    } catch (e) {
      const {
        response: { data: message }
      } = e;
      window.alert(JSON.stringify(message));
    }
  };

  const generateSession = async () => {
    const payload = {
      sessionName: document.getElementById("input-session-name").value,
      menuId: document.getElementById("menu-dropdown").value
    };

    const { data: sessionId } = await apis.createSession(payload);
    return sessionId;
  };

  const [menuOptions, setMenuOptions] = useState([])

  const fetchMenus = async () => {
    return axios.get(
      `${serverURL}/api/menus/`
    );
  };

  useEffect(async () => {
      const { data } = await fetchMenus();
      const incomingMenuOptions = data.map(
        (menu) => {
          return {value: menu.name, id: menu._id};
        })
      setMenuOptions(incomingMenuOptions);
  }, []);  

  return (
    <Theme>
      <PageContainer>
        <Logo id="logo" alt="LettuceEat logo" width="200" src={lettuce}></Logo>
        <Title>LettuceEat</Title>
        <H2>Easy ordering and bill splitting</H2>
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
        <InputContainer>
        {<Label size="medium">Menu:</Label>}
          <Dropdown
            id={"menu-dropdown"}
            options={menuOptions}
            defaultOption={"15%"}
            width={"238px"}
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
