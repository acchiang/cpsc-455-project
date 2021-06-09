import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Charcuterie from 'pages/Charcuterie';
import reportWebVitals from './utils/reportWebVitals';
import Button from 'components/Button'

ReactDOM.render(
  <React.StrictMode>
    <Charcuterie >
      <p>Hi</p>
      <TextIcon textLetter={'a'} size={'small'} color={'#8EDB31'}>small</TextIcon>
      <TextIcon textLetter={'b'} size={'default'} color={'#31B4DB'}>default</TextIcon>
      <h3>small</h3>
      <Button size={"small"} type={"primary"} label={"primary"} />
      <Button size={"small"} type={"secondary"} label={"secondary"} />
      <Button size={"small"} type={"text"} label={"text"} />
      <h3>medium</h3>
      <Button size={"medium"} type={"primary"} label={"primary"} />
      <Button size={"medium"} type={"secondary"} label={"secondary"} />
      <Button size={"medium"} type={"text"} label={"text"} />
      <h3>large</h3>
      <Button size={"large"} type={"primary"} label={"primary"} />
      <Button size={"large"} type={"secondary"} label={"secondary"} />
      <Button size={"large"} type={"text"} label={"text"} />
      <h3>others</h3>
      <Button label={"default"} />
      <Button label={"click me!"} onClick={() => { alert("button clicked"); }} />
      <br />
      <Button label={"disabled"} disabled />
      <Button label={"disabled"} type={"secondary"} disabled />
    </Charcuterie>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
