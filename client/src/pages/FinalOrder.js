import React, { useState, useEffect } from "react";
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

  // TODO: get menu from server
  const fetchMenu = () => {
    return sampleMenu;
  };

  const PageContainer = styled.div`
    height: 110vh;
    width: 100vw;
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

  useEffect(() => {
    // TODO: Perhaps implement webhook (socket) to listen for additional users
    const initializeOrder = () => {
      const menu = fetchMenu();
      return menu.map(item => ({ ...item, quantity: 0 }));
    };
    setOrder(initializeOrder());
  }, []);

  return (
    <Theme>
      <OrderContext.Provider value={[order, setOrder]}>
        <PageContainer>
          <TopTitleBar title={"nw++ Picnic"} backUrl={"/order-screen"} />
          <TextIcon textLetter={"A"} size={"default"} color={"#31B4DB"}>
            Allison
          </TextIcon>
          <TextIcon textLetter={"N"} size={"default"} color={"#91F4CA"}>
            Nick
          </TextIcon>
          <TextIcon textLetter={"R"} size={"default"} color={"#49C4AB"}>
            Rebecca
          </TextIcon>
          <TextIcon textLetter={"C"} size={"default"} color={"#61F4DB"}>
            Christy
          </TextIcon>
          <StyledHeader>Final Order Summary</StyledHeader>
          <MenuContainer>
            <MenuSelector order={order} />
          </MenuContainer>
          <TotalAmount
            size={"medium"}
            menuAmount={"12.99"}
            tipAmount={"1.50"}
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
