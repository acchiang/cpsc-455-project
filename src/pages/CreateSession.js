import Theme from 'styles/Theme'
import styled from 'styled-components'
import Button from 'components/Button'
import Input from 'components/Input'
import { Title, H2 } from 'styles/styleUtils';
import { useHistory } from 'react-router-dom';

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center; 
position: absolute; 
padding-top: 100px;
height: 100vh; 
width: 100vw; 
overflow: hidden;
background: ${p => p.theme.colors.primary};
`;

const InputContainer = styled.div`
flex-direction: row;
`;

function CreateSession({ ...props }) {
    const history = useHistory();

    // TODO: Ask server for a session and navigate to custom session ??? unscoped
    const generateSession = () => {
        history.push('/order-screen')
    }

    return (
        <Theme>
            <PageContainer>
                <img id="logo" alt="LettuceEat logo" width="200" src="https://lh3.googleusercontent.com/proxy/wnjwUBl43KN-3GFcp3U-w_OCHSa2JkzeGS8ofOt0xwTM1m8EH7K1C7kMp6Bxd9WrBB1Ngom1cFhTPQ6A9EuUR5kvrA2bVaXLdULZhElkr2H-WGa7-5gAsCu40BnFWX81snu4QP6x496ebNA47eQAPRyXiRwwnVTe8Q" />
                <Title>LettuceEat</Title>
                <H2>Easy bill splitting</H2>
                <br />
                <br />
                <InputContainer>
                    <Input size={"medium"} label={"Your Name"} placeholder={"John Doe"} />
                </InputContainer>
                <InputContainer>
                    <Input size={"medium"} label={"Event Name"} placeholder={"Dine Out"} />
                </InputContainer>
                <br />
                <Button size={"medium"} type={"primary"} label={"Create Session"} onClick={generateSession}/>
            </PageContainer>
        </Theme>
    );
}

export default CreateSession;
