import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Theme from "styles/Theme";
import { OrderContext } from "utils/Context";
import styled from "styled-components";
import MenuSelector from "components/MenuSelector";
import TotalAmount from "components/TotalAmount";
import Button from "components/Button";
import TopTitleBar from "components/TopTitleBar";
import TextIcon from "components/TextIcon";

const serverURL = "http://localhost:9000";

function FinalOrder() {
  const [finalOrders, setOrders] = useState(null);
  const location = useLocation();

  const PageContainer = styled.div`
    height: 100%;
    width: 100%;
    background: ${p => p.theme.colors.primary};
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  `;

  const StyledHeader = styled.h2`
    color: ${p => p.theme.colors.text};
  `;

  const IconsContainer = styled.div``;

  const getUserOrder = async sessionUser => {
    return await axios.put(
      `${serverURL}/api/sessions/${location.state.sessionId}/update_order`,
      { sessionUser }
    );
  };

  useEffect(async () => {
    // TODO: Perhaps implement webhook (socket) to listen for additional users
    const consolidateOrders = async () => {
      let orders = location.state.menu;
      orders.map(item => ({ item, quantity: 0 }));
      location.state.users.map(async (user) => {
        const { data } = await getUserOrder(user);
        data.map(userOrder => {
          if (userOrder.quantity !== 0) {
            const idx = orders.findIndex(({ item }) => item.name === userOrder.item.name)
            orders[idx].quantity += userOrder.quantity;
          }
        })
      })
      return orders;
    };
    setOrders(await consolidateOrders());
  }, []);

  return (
    <Theme>
      <OrderContext.Provider value={[finalOrders, setOrders]}>
        <PageContainer>
          <TopTitleBar title={location.state.sessionName} backUrl={"/order-screen"} />
          <IconsContainer>
            {location.state.users.map(u => (
              <TextIcon
                key={u.name + u.date}
                textLetter={u.name?.charAt(0).toUpperCase()}
                size={"default"}
                color={"#31B4DB"}
              >
                {u.name}
              </TextIcon>
            ))}
          </IconsContainer>
          <StyledHeader>Final Order Summary</StyledHeader>
          <MenuContainer>
            <MenuSelector order={finalOrders} />
          </MenuContainer>
          <TotalAmount
            size={"medium"}
            menuAmount={location.state.menuTotal}
            tipAmount={location.state.tipTotal}
          />
          <Button
            size={"medium"}
            type={"primary"}
            label={"Edit Order"}
            onClick={() => (window.location.href = "/order-screen")}
          />
        </PageContainer>
      </OrderContext.Provider>
    </Theme>
  );
}

export default FinalOrder;
