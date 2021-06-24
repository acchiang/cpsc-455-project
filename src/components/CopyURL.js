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

const CopyUrlStyle = styled.div`
  margin: 8px;
`;

const CopyURL = ({ size, type, label, disabled, onClick, placeholder }) => (
    <CopyUrlStyle>
        <Input
          size={size}
          placeholder={placeholder}
          margin="auto"
        />
        <ButtonStyle 
            size={size} 
            type={type} 
            disabled={disabled} 
            onClick={() =>  navigator.clipboard.writeText(placeholder)}>
        Copy
        </ButtonStyle>
    </CopyUrlStyle>
);

export default CopyURL;