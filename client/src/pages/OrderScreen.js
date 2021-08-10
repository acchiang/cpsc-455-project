import React, { useEffect, useState } from "react";
import axios from "axios";
import Theme from "styles/Theme";
import { OrderContext } from "utils/Context";
import Button from "components/Button";
import MenuSelector from "components/MenuSelector";
import DollarAmount from "components/DollarAmount";
import TipAmount from "components/TipAmount";
import TotalAmount from "components/TotalAmount";
import styled from "styled-components";
import TextIcon from "components/TextIcon";
import TopTitleBar from "components/TopTitleBar";

const serverURL = "http://localhost:9000";
const menuId = "6103677a11c316178047f1f1";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${p => p.theme.colors.primary};
  overflow: hidden;
`;

const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Panel = styled.td`
  width: 400px;
  vertical-align: top;
`;

const DividerPanel = styled.td`
  vertical-align: top;
`;

const Divider = styled.div`
  height: 90vh;
  width: 1px;
  background-color: ${p => p.theme.colors.text};
  margin-left: 50px;
  margin-right: 50px;
`;

const SubtotalContainer = styled.div`
  text-align: right;
`;

const IconsContainer = styled.div``;

const FinalOrderContainer = styled.div`
  text-align: center;
`;

const tipOptions = ["10%", "15%", "20%", "Other"];
const StyledHeader = styled.h2`
  color: ${p => p.theme.colors.text};
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${p => p.theme.fontSizes.small};
  }
`;

function OrderScreen() {
  const [order, setOrder] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [tipPercent, setTipPercent] = useState(tipOptions[0]);
  const [showInput, setShowInput] = useState(false);
  const [sessionName, setSessionName] = useState("LettuceEat");
  const [sessionId, setSessionId] = useState("");
  const [sessionUser, setSessionUser] = useState(null);
  const [sessionUsers, setSessionUsers] = useState([]);

  const fetchSessionData = async () => {
    return axios.get(
      `${serverURL + "/api/sessions/" + localStorage.getItem("sessionId")}/order-screen`
    );
  };

  const fetchMenu = async () => {
    return axios.get(`${serverURL}/menu/${menuId}`);
  };

  // TODO: get group total (including tips) from server
  // eslint-disable-next-line no-unused-vars
  const getGroupTotals = () => { };

  // TODO: history.push to next page with data
  // eslint-disable-next-line no-unused-vars
  const consolidateOrder = () => { };

  const findOrUpdateOrder = async (order) => {
    return await axios.put(`${serverURL}/api/sessions/${sessionId}/update_order`, { sessionUser, order})
  }

  const updateQuantity = (name, quantity) => {
    const updatedOrder = order;
    const idx = order.findIndex(({item}) => item.name === name);
    if (updatedOrder[idx].quantity !== quantity) {
      updatedOrder[idx].quantity = quantity;
      setOrder(updatedOrder);
      findOrUpdateOrder(updatedOrder);
      setSubtotal(
        updatedOrder.reduce((total, i) => total + i.item.price * i.quantity, 0)
      );
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const {
      data: { name, _id, users }
    } = await fetchSessionData();
    setSessionId(_id);
    setSessionName(name);
    setSessionUsers(users);
    setSessionUser(JSON.parse(localStorage.getItem("user")))
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const initializeOrder = async () => {
      const { data } = await findOrUpdateOrder(null);
      if (data && !data.length) {
        const { data: { items: latestMenu } } = await fetchMenu();
        return latestMenu.map(item => ({ item, quantity: 0 }));
      }
      return data
    };
    if (sessionUser && sessionId) {
      setOrder(await initializeOrder());
    }
  }, [sessionUser, sessionId]);

  return (
    <Theme>
      <OrderContext.Provider value={[order, setOrder]}>
        <PageContainer>
          <TopTitleBar
            title={sessionName}
            setTitle={setSessionName}
            backUrl={"/create-session"}
            copyUrl={`${window.location.host}/sessions/${localStorage.getItem("sessionId")}`}
            sessionId={sessionId}
          />
          <PanelContainer>
            <table>
              <tbody>
                <tr>
                  <Panel>
                    <StyledHeader>Menu</StyledHeader>
                    <MenuSelector
                      order={order}
                      updateQuantity={updateQuantity}
                    />
                    <SubtotalContainer>
                      <DollarAmount
                        size={"medium"}
                        label={"Subtotal"}
                        amount={subtotal}
                      />
                      <TipAmount
                        size={"medium"}
                        label={"Tip"}
                        options={tipOptions}
                        showInput={showInput}
                        setShowInput={setShowInput}
                        feedValueToParent={setTipPercent}
                      />
                      <DollarAmount
                        size={"medium"}
                        label={"Order total"}
                        amount={
                          subtotal +
                          subtotal * 0.01 * tipPercent.replace(/\D/g, "")
                        }
                      />
                      <Button
                        size={"medium"}
                        type={"primary"}
                        label={"Confirm Order"}
                        onClick={() => (window.location.href = "/final-order")}
                      />
                    </SubtotalContainer>
                  </Panel>
                  <DividerPanel>
                    <Divider />
                  </DividerPanel>
                  <Panel>
                    <StyledHeader>Users</StyledHeader>
                    <IconsContainer>
                      {sessionUsers.map((u) => (
                        <TextIcon
                        key={u.name+u.date}
                        textLetter={u.name?.charAt(0).toUpperCase()}
                        size={"default"}
                        color={"#31B4DB"}
                      >
                        {u.name}
                      </TextIcon>
                      ))}
                      
                    </IconsContainer>
                    <FinalOrderContainer>
                      <StyledHeader>Group Total So Far</StyledHeader>
                      <TotalAmount
                        size={"medium"}
                        menuAmount={"12.99"}
                        tipAmount={"1.50"}
                      />
                      <Button
                        size={"medium"}
                        type={"primary"}
                        label={"Consolidate"}
                        onClick={() => (window.location.href = "/final-order")}
                      />
                    </FinalOrderContainer>
                  </Panel>
                </tr>
              </tbody>
            </table>
          </PanelContainer>
        </PageContainer>
      </OrderContext.Provider>
    </Theme>
  );
}

export default OrderScreen;
