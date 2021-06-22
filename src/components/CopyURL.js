import styled from "styled-components";
import { transitionCss } from "../styles/styleUtils";
import Input from "./Input";

const ButtonStyle = styled.button`
  background: ${(p) => (p.theme.colors.secondary)};
  color: ${(p) => (p.theme.colors.text)};
  opacity: ${p => p.disabled ? "0.5" : "1"};
  cursor: ${p => p.disabled ? "not-allowed" : "auto"};
  font-size: ${(p) => p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  border: ${(p) => p.type === "text" ? "none" : "default"};
  border-radius: 5px;
  padding: 0.25em 0.25em;
  ${transitionCss}
  :hover {
    opacity: 0.65;
  }
`;

const inputSize = {
    medium: 24,
    large: 36,
    default: 24,
  };

const InputBox = styled.input`
  width: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) * 9}px;
  height: ${(p) => inputSize[`${p.size}`] ?? inputSize["default"]}px;
  font-size: ${(p) => inputSize[`${p.size}`] ?? inputSize["default"]}px;
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  color: ${(p) => p.fontColor ?? "black"};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "text")};
  padding: 10px;
  border: ${(p) => p.border ?? "1px solid black"};
  border-radius: 3px;
  
  :placeholder{
    color: ${(p) => p.placeholderColor ?? "black"}
  }
  :disabled {
    background: #EEEEEE;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-size: ${(p) => inputSize[`${p.size}`] ?? inputSize["default"]}px;
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  min-width: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) * 6}px;
  max-width: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) * 6}px;
  text-align: left;
`;

const CopyUrlStyle = styled.div`
  margin: 8px;
`;

const CopyURL = ({ size, type, label, disabled, onClick, placeholder }) => (
    <>
    <CopyUrlStyle>
        {label && <Label size={size}>{label}:</Label>}
        <InputBox
        size={size}
        name={label ?? placeholder}
        placeholder={placeholder}
        />
        <ButtonStyle 
            size={size} 
            type={type} 
            disabled={disabled} 
            onClick={() =>  navigator.clipboard.writeText(placeholder)}>
        Copy
        </ButtonStyle>
    </CopyUrlStyle>
    </>
);

export default CopyURL;