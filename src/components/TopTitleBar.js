import styled from "styled-components";

import BackButton from "components/BackButton";
import CopyUrlBox from "components/CopyUrlBox";

const TopTitleBarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const TopTitleBar = ({ title, backUrl, copyUrl }) => (
  <TopTitleBarContainer>
    <BackButton url={backUrl} />
    <h1>{title}</h1>
    <CopyUrlBox url={copyUrl} />
  </TopTitleBarContainer>
  
);

export default TopTitleBar;