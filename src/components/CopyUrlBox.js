import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const BoxContainer = styled.div`
  visibility: ${(p) => {return p.showElement ? 'visible' : 'hidden'}}
`;

const CopyUrlBox = ({ url }) => {
  return (
    <BoxContainer showElement={url && url.length > 0}>
      <Input size={"default"} value={url}/>
      <Button size={"medium"} type={"secondary"} label={"Copy"} onClick={() =>  navigator.clipboard.writeText(url)}/>
    </BoxContainer>
  );
};

export default CopyUrlBox;
