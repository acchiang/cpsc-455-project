import Theme from 'styles/Theme'
import TextIcon from 'components/TextIcon'
import Button from 'components/Button'
import Input from "components/Input";
import BackButton from 'components/BackButton';

function Charcuterie({ children }) {
  return (
    <Theme>
      <h2>User Icons</h2>
      <TextIcon textLetter={'a'} size={'small'} color={'#8EDB31'}>small</TextIcon>
      <TextIcon textLetter={'b'} size={'default'} color={'#31B4DB'}>default</TextIcon>
      <h2>Buttons</h2>
      <p>small</p>
      <Button size={"small"} type={"primary"} label={"primary"} />
      <Button size={"small"} type={"secondary"} label={"secondary"} />
      <Button size={"small"} type={"text"} label={"text"} />
      <p>medium</p>
      <Button size={"medium"} type={"primary"} label={"primary"} />
      <Button size={"medium"} type={"secondary"} label={"secondary"} />
      <Button size={"medium"} type={"text"} label={"text"} />
      <p>large</p>
      <Button size={"large"} type={"primary"} label={"primary"} />
      <Button size={"large"} type={"secondary"} label={"secondary"} />
      <Button size={"large"} type={"text"} label={"text"} />
      <p>others</p>
      <Button label={"default"} />
      <Button label={"click me!"} onClick={() => { alert("button clicked"); }} />
      <br />
      <Button label={"disabled"} disabled />
      <Button label={"disabled"} type={"secondary"} disabled />
      <h2>User Inputs</h2>
      <Input size={"small"} placeholder={"Password"} type={"password"} />
      <Input size={"large"} 
        border={"2px solid green"}
        fontColor={"grey"}/>
      <br />
      <Input
        size={"default"}
        label={"default"}
        placeholder={"disabled"}
        disabled
      />
      <br />
      <Input size={"medium"} label={"side by side"} placeholder={"username"} />
      <p>Back button</p>
      <BackButton url={'create-session'} />
    </Theme>
  );
}

export default Charcuterie;
