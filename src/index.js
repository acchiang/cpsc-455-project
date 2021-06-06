import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import Input from "./components/Input";
import Charcuterie from "pages/Charcuterie";
import reportWebVitals from "./utils/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Charcuterie>
      <p>Hi</p>
      <Input size={"small"} placeholder={"Password"} type={"password"} />
      <Input size={"large"} />
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
