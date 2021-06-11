import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Charcuterie from 'pages/Charcuterie';
import reportWebVitals from './utils/reportWebVitals';
import TextIcon from 'components/TextIcon'
import Input from "./components/Input";
import Button from 'components/Button'

ReactDOM.render(
  <React.StrictMode>
    <Charcuterie >
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
    </Charcuterie>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
