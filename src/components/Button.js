import styled from "styled-components";
import { transitionCss } from "../styles/styleUtils";
import Theme from 'styles/Theme';

const ButtonStyle = styled.button`
  background: ${(p) => {
        if (p.type == "secondary") return p.theme.colors.lightGreen;
        if (p.type == "text") return "none";
        return p.theme.colors.darkGreen;
    }};
  color: ${(p) => ((p.type == "secondary" || p.type == "text") ? p.theme.colors.darkGreen : "white")};
  opacity: ${p => p.disabled ? "0.5" : "1"};
  cursor: ${p => p.disabled ? "not-allowed" : "auto"};
  font-size: ${(p) => p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  border: ${(p) => p.type == "text" ? "none" : "default"};
  border-radius: 5px;
  margin: 0.25em;
  padding: 0.25em 1em;
  ${transitionCss}
  :hover {
    opacity: 0.65;
  }
`;

const Button = ({ size, type, label, disabled, ...props }) => (
    <Theme>
        <ButtonStyle size={size} type={type} disabled={disabled}>{label}</ButtonStyle>
    </Theme>
);

export default Button;