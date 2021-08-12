import styled from "styled-components";
import axios from "axios";
import BackButton from "components/BackButton";
import CopyUrlBox from "components/CopyUrlBox";
import { FaPen } from "react-icons/fa";

const TopTitleBarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${p => p.theme.colors.text};
  ${p => p.theme.mediaQueries.tablet} {
    font-size: ${p => p.theme.fontSizes.medium};
  }
  ${p => p.theme.mediaQueries.smallMobile} {
    font-size: ${p => p.theme.fontSizes.small};
  }
`;

const handleEditTitle = (title, setTitle, sessionId) => {
  let newTitle;
  let input = prompt("Please enter a new session name:", title);
  if (input != null && input !== "") {
    newTitle = input;
    editSession(newTitle, setTitle, sessionId);
  }
};

const editSession = async (newTitle, setTitle, sessionId) => {
  await axios.put(`/api/sessions/${sessionId}`, {
    name: newTitle
  });
  setTitle(newTitle);
};

const TopTitleBar = ({ title, setTitle, backUrl, copyUrl, sessionId }) => (
  <TopTitleBarContainer>
    <BackButton url={backUrl} />
    <Title>
      {title}
      {sessionId && (
        <FaPen
          size={20}
          onClick={() => {
            handleEditTitle(title, setTitle, sessionId);
          }}
        />
      )}
    </Title>
    <CopyUrlBox url={copyUrl} />
  </TopTitleBarContainer>
);

export default TopTitleBar;
