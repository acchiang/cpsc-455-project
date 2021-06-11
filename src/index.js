import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Charcuterie from 'pages/Charcuterie';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to="/">Charcuterie</Link>
      <Link to="/create-session">Create Session</Link>
      <Switch>
        <Route path="/create-session">
          {/* <CreateSession /> */}
        </Route>
        <Route path="/">
          <Charcuterie />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
