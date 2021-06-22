import styled from "styled-components";

const DollarAmountStyle = styled.div`
  color: ${(p) => p.theme.colors.text };
  opacity: ${p => p.disabled ? "0.5" : "1"};
  cursor: ${p => p.disabled ? "not-allowed" : "auto"};
  font-size: ${(p) => p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  border: ${(p) => p.type === "text" ? "none" : "default"};
  border-radius: 5px;
  margin: 0.25em;
`;

const DollarAmount = ({ size, type, amount }) => (
  <DollarAmountStyle size={size} type={type} >Subtotal: ${amount}</DollarAmountStyle>
);

export default DollarAmount;