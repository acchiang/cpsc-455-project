import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Theme from "styles/Theme";
import { OrderContext } from "utils/Context";
import sampleMenu from "assets/sampleMenu";
import styled from "styled-components";
import MenuSelector from "components/MenuSelector";
import TotalAmount from "components/TotalAmount";
import Button from "components/Button";
import TopTitleBar from "components/TopTitleBar";
import TextIcon from "components/TextIcon";

function FinalOrder() {
  const [order, setOrder] = useState(null);
  const location = useLocation();

  // TODO: get menu from server
  const fetchMenu = () => {
    return sampleMenu;
  };

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

  useEffect(() => {
    // TODO: Perhaps implement webhook (socket) to listen for additional users
    const initializeOrder = () => {
      const menu = fetchMenu();
      return menu.map(item => ({ item, quantity: 0 }));
    };
    setOrder(initializeOrder());
  }, []);

  return (
    <Theme>
      <OrderContext.Provider value={[order, setOrder]}>
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
            <MenuSelector order={order} />
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
