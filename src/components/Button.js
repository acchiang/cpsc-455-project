import styled from "styled-components";
import { transitionCss } from "../styles/styleUtils";

const buttonSize = {
  small: 12,
  medium: 24,
  large: 36,
  default: 24,
};

const primary = {
  color: "white",
  background: "#064420"
};

const secondary = {
  color: "#064420",
  background: "#e4efe7"
};

const text = {
  color: "#064420",
  background: `none`
};

const StyledButton = styled.button`
  color: ${(props) => {
    if (props.type == "secondary") return secondary["color"];
    if (props.type == "text") return text["color"];
    return primary["color"];
  }};
  background: ${(props) => {
    if (props.type == "secondary") return secondary["background"];
    if (props.type == "text") return text["background"];
    return primary["background"];
  }};
  font-size: ${(props) => props.size ? buttonSize[`${props.size}`] : buttonSize["default"]}px;
  cursor: ${props => props.disabled ? "not-allowed": "auto"};
  opacity: ${props => props.disabled ? "0.5": "1"};
  border: ${(props) => (props.type == "text" ? "none" : "default")};
  border-radius: 5px;
  margin: 0.25em;
  padding: 0.25em 1em;
  ${transitionCss}
  :hover {
    opacity: 0.65;
  }
`;

const Button = ({ size, type, label, disabled, ...props }) => (
    <StyledButton size={size} type={type} disabled={disabled}>{label}</StyledButton>
);

export default Button;