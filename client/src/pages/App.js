import "./App.css";
import Charcuterie from "pages/Charcuterie";
import CreateSession from "pages/CreateSession";
import FinalOrder from "pages/FinalOrder";
import OrderScreen from "pages/OrderScreen";
import JoinSession from "pages/JoinSession";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "pages/Welcome";
import Login from "pages/Login";
import LoginEventName from "pages/LoginEventName";
import Register from "pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login-event-name">
          <LoginEventName />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/create-session">
          <CreateSession />
        </Route>
        <Route path="/order-screen">
          <OrderScreen />
        </Route>
        <Route path="/final-order">
          <FinalOrder />
        </Route>
        <Route path="/session/:sessionId">
          <JoinSession />
        </Route>
        <Route path="/">
          <Charcuterie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
