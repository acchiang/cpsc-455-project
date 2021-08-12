import styled from "styled-components";
import Input from "./Input";
import { FaRegCopy } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CopyButtonStyle = styled.span`
  cursor: pointer;
  vertical-align: middle;
`;

const BoxContainer = styled.div`
  visibility: ${p => {
    return p.showElement ? "visible" : "hidden";
  }};
  display: flex;
  align-items: center;
`;

function copyURL(url, successText, failText) {
  navigator.clipboard.writeText(url).then(
    function() {
      /* clipboard successfully set */
      window.alert(successText);
    },
    function() {
      /* clipboard write failed */
      window.alert(failText);
    }
  );
}

const CopyUrlBox = ({ url }) => {
  const { t } = useTranslation();
  return (
    <BoxContainer showElement={url && url.length > 0}>
      <Input size={"default"} width={"500px"} value={url} disabled />
      <CopyButtonStyle>
        <FaRegCopy size={35} onClick={() => copyURL(url,t("link-alert"),t("link-fail-alert"))} />
      </CopyButtonStyle>
    </BoxContainer>
  );
};

export default CopyUrlBox;
