import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const CopyUrlStyle = styled.div`
  margin: 8px;
`;

const CopyURL = ({ size, type, disabled, onClick, placeholder }) => (
    <CopyUrlStyle>
        <Input
          size={size}
          placeholder={placeholder}
          margin="auto"
        />
        <Button
          margin-left="0px"
          size={size} 
          type={type} 
          disabled={disabled} 
          onClick={() =>  navigator.clipboard.writeText(placeholder)}
          label="Copy">
        </Button>
    </CopyUrlStyle>
);

export default CopyURL;