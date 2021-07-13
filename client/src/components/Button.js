import styled from "styled-components";
import { transitionCss } from "styles/styleUtils";

const ButtonStyle = styled.button`
  background: ${(p) => {
    if (p.type === "secondary") return p.theme.colors.secondary;
    if (p.type === "text") return "none";
    return p.theme.colors.accent;
  }};
  color: ${(p) => ((p.type === "secondary" || p.type === "text") ? p.theme.colors.accent : p.theme.colors.background)};
  opacity: ${p => p.disabled ? "0.5" : "1"};
  cursor: ${p => p.disabled ? "not-allowed" : "auto"};
  font-size: ${(p) => p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  border: ${(p) => p.type === "text" ? "none" : "default"};
  border-radius: 5px;
  margin: 0.25em;
  padding: 0.25em 1em;
  ${transitionCss}
  :hover {
    opacity: 0.65;
  }
`;

const Button = ({ size, type, label, disabled, onClick, ...props }) => (
  <ButtonStyle size={size} type={type} disabled={disabled} onClick={onClick}>{label}</ButtonStyle>
);

export default Button;
