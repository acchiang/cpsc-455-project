import Charcuterie from "pages/Charcuterie";
import CreateSession from "pages/CreateSession";
import FinalOrder from "pages/FinalOrder";
import OrderScreen from "pages/OrderScreen";
import JoinSession from "pages/JoinSession";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterUser from "./RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register-user">
          <RegisterUser />
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
