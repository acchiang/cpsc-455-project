import Theme from 'styles/Theme'
import styled from 'styled-components'
import Button from 'components/Button'
import Input from 'components/Input'

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center; 
position: absolute; 
padding-top: 100px;
height: 100vh; 
width: 100vw; 
overflow: hidden;
`;

const InputContainer = styled.div`
flex-direction: row;
`;

function CreateSession({ ...props }) {
    return (
        <Theme>
            <PageContainer>
                <img id="logo" alt="LettuceEat logo" width="200" src="https://lh3.googleusercontent.com/proxy/wnjwUBl43KN-3GFcp3U-w_OCHSa2JkzeGS8ofOt0xwTM1m8EH7K1C7kMp6Bxd9WrBB1Ngom1cFhTPQ6A9EuUR5kvrA2bVaXLdULZhElkr2H-WGa7-5gAsCu40BnFWX81snu4QP6x496ebNA47eQAPRyXiRwwnVTe8Q" />
                <h1>LettuceEat</h1>
                <p>Easy bill splitting</p>
                <InputContainer>
                    <Input size={"medium"} label={"Your Name"} placeholder={"John Doe"} />
                </InputContainer>
                <InputContainer>
                    <Input size={"medium"} label={"Event Name"} placeholder={"Dine Out"} />
                </InputContainer>
                <Button size={"medium"} type={"primary"} label={"Create Session"} />
            </PageContainer>
        </Theme>
    );
}

export default CreateSession;
