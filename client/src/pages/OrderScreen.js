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
  height: 100vh;
  width: 100vw;
  background: ${p => p.theme.colors.primary};
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

const StyledHeader = styled.h2`
  color: ${p => p.theme.colors.text};
`;

const optionsNoInput = ["10%", "15%", "20%"];

function OrderScreen() {
  const [order, setOrder] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState([]);
  const [tipPercent, setTipPercent] = useState(optionsNoInput[0]);
  const [sessionName, setSessionName] = useState("LettuceEat");
  const [sessionId, setSessionId] = useState("");

  const fetchSessionData = async () => {
    return axios.get(
      `${serverURL + localStorage.getItem("sessionPath")}/order-screen`
    );
  };

  const fetchMenu = async () => {
    return axios.get(`${serverURL}/menu/${menuId}`);
  };

  // TODO: send order to server & attach userId
  // eslint-disable-next-line no-unused-vars
  const sendOrder = () => {};

  // TODO: get group total (including tips) from server
  // eslint-disable-next-line no-unused-vars
  const getGroupTotals = () => {};

  // TODO: history.push to next page with data
  // eslint-disable-next-line no-unused-vars
  const consolidateOrder = () => {};

  const updateQuantity = (name, quantity) => {
    const updatedOrder = order;
    const idx = order.findIndex(i => i.name === name);
    updatedOrder[idx].quantity = quantity;
    setOrder(updatedOrder);
    setSubtotal(
      updatedOrder.reduce((total, i) => total + i.price * i.quantity, 0)
    );
  };

  useEffect(() => {
    axios.put('/session/update_order', order)
  }, [order])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // TODO: Perhaps implement webhook (socket) to listen for additional users
    const initializeOrder = async () => {
      const {data: {items: latestMenu}} = await fetchMenu();
      setMenu(latestMenu);
      return latestMenu.map(item => ({ ...item, quantity: 0 }));
    };
    const {
      data: { name, _id }
    } = await fetchSessionData();
    setSessionId(_id);
    setSessionName(name);
    setOrder(await initializeOrder());
  }, []);

  return (
    <Theme>
      <OrderContext.Provider value={[order, setOrder]}>
        <PageContainer>
          <TopTitleBar
            title={sessionName}
            setTitle={setSessionName}
            backUrl={"/create-session"}
            copyUrl={`${window.location.host}${localStorage.getItem("sessionPath")}`}
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
                        options={optionsNoInput}
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
                        label={"confirm order"}
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
                      <TextIcon
                        textLetter={"t"}
                        size={"default"}
                        color={"#31B4DB"}
                      >
                        test user
                      </TextIcon>
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
                        label={"consolidate"}
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
