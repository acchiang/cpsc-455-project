import styled from "styled-components";

import BackButton from "components/BackButton";
import CopyUrlBox from "components/CopyUrlBox";

const TopTitleBarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${(p) => p.theme.colors.text};
`;

const TopTitleBar = ({ title, backUrl, copyUrl }) => (
  <TopTitleBarContainer>
    <BackButton url={backUrl} />
    <Title>{title}</Title>
    <CopyUrlBox url={copyUrl} />
  </TopTitleBarContainer>
  
);

export default TopTitleBar;
