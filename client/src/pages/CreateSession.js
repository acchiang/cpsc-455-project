import React, { useEffect, useState } from "react";
import axios from "axios";
import Theme from "styles/Theme";
import styled from "styled-components";
import Button from "components/Button";
import Input, {Label} from "components/Input";
import { Title, H2, Logo } from "styles/styleUtils";
import { useHistory } from "react-router-dom";
import lettuce from "assets/lettuce.png";
import Dropdown from "components/Dropdown";

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
  const history = useHistory();

  // TODO: Ask server for a session and navigate to custom session ??? unscoped
  const generateSession = async () => {
    const { data: sessionId } = await axios.post('/session', {
      sessionName: document.getElementById("input-session-name").value
      // sessionOwner: document.getElementById("input-session-owner).value
    });
    history.push(`session/${sessionId}/registered`);
  };

  const [menuOptions, setMenuOptions] = useState([])

  const fetchMenus = async () => {
    return axios.get(
      `${serverURL}/api/menus/`
    );
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <InputContainer>
        {<Label size="medium">Menu:</Label>}
          <Dropdown
            options={menuOptions}
            defaultOption={"15%"}
            width={"238px"}
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
