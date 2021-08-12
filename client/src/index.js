import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "pages/App";
import reportWebVitals from "./utils/reportWebVitals";

import "./index.css";

// import i18n (needs to be bundled ;)) 
import './i18n';

ReactDOM.render(
  <Suspense fallback="loading">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
