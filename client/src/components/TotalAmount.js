import styled from "styled-components";
import DollarAmount from "./DollarAmount";
import { useTranslation } from "react-i18next";

const TotalAmountStyle = styled.div`
  color: ${p => p.theme.colors.text};
  opacity: ${p => (p.disabled ? "0.5" : "1")};
  cursor: ${p => (p.disabled ? "not-allowed" : "auto")};
  font-size: ${p =>
    p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeight};
  border: ${p => (p.type === "text" ? "none" : "default")};
  border-radius: 5px;
  margin: 0.25em;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${p => p.theme.fontSizes.small};
  }
`;

const TotalAmount = ({ size, menuAmount, tipAmount }) => {
  
  const { t } = useTranslation();

  return (
  <>
    <TotalAmountStyle>
      <DollarAmount
        size={size}
        label={t("menu-total")}
        amount={menuAmount}
      ></DollarAmount>
      <DollarAmount
        size={size}
        label={t("tip-total")}
        amount={tipAmount}
      ></DollarAmount>
      <DollarAmount
        size={size}
        label={t("final-total")}
        amount={(Number(tipAmount) + Number(menuAmount)).toFixed(2)}
      ></DollarAmount>
    </TotalAmountStyle>
  </>
)};

export default TotalAmount;
