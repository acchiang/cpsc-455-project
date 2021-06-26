import styled from "styled-components";
import backButton from "../assets/back_arrow.svg";
import { useHistory } from "react-router-dom";

const BackButtonContainer = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const BackButton = ({ url, ...props }) => {
  const history = useHistory();
  return (
    <BackButtonContainer>
      <img
        src={backButton}
        alt="navigate to last page"
        onClick={() => history.push(url)}
      />
    </BackButtonContainer>
  );
};

export default BackButton;
