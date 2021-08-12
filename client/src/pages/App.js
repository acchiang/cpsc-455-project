import "./App.css";
import Charcuterie from "pages/Charcuterie";
import CreateSession from "pages/CreateSession";
import FinalOrder from "pages/FinalOrder";
import OrderScreen from "pages/OrderScreen";
import JoinSession from "pages/JoinSession";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Register from "pages/Register";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register userFailedString={t("user-failed-alert")} />
        </Route>
        <Route path="/order-screen">
          <OrderScreen />
        </Route>
        <Route path="/final-order">
          <FinalOrder />
        </Route>
        <Route path="/sessions/:sessionId" component={JoinSession} />
        <Route path="/charcuterie">
          <Charcuterie />
        </Route>
        <Route path="/" component={CreateSession}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
