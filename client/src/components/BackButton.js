import styled from "styled-components";
import backButton from "assets/back_arrow.svg";
import { useHistory } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { withTheme } from 'styled-components'

const BackButtonContainer = styled.div`
  cursor: pointer;
  width: 300px;
  height: 50px;
  padding: 10px;
`;

const BackButton = ({ url, ...props }) => {
  const history = useHistory();
  return (
    <BackButtonContainer>
      <FaArrowCircleLeft
        color={props.theme.colors.text}
        size={35}
        src={backButton}
        alt="navigate to last page"
        onClick={() => history.push(url)}
      />
    </BackButtonContainer>
  );
};

export default withTheme(BackButton);
