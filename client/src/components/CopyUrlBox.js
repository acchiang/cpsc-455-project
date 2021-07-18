import styled from "styled-components";
import Input from "./Input";
import { FaRegCopy } from "react-icons/fa";

const CopyButtonStyle = styled.span`
  cursor: pointer;
  vertical-align: middle;
`;

const BoxContainer = styled.div`
  visibility: ${(p) => {
    return p.showElement ? "visible" : "hidden";
  }};
  display: flex;
  align-items: center;
`;

const CopyUrlBox = ({ url }) => {
  return (
    <BoxContainer showElement={url && url.length > 0}>
      <Input size={"default"} width={"500px"} value={url} disabled />
      <CopyButtonStyle>
        <FaRegCopy
          size={35}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </CopyButtonStyle>
    </BoxContainer>
  );
};

export default CopyUrlBox;
