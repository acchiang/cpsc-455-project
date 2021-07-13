import React, { useState, useEffect } from "react";
import Theme from "../client/src/styles/Theme";
import { OrderContext } from "../client/src/utils/Context";
import BackButton from "../client/src/components/BackButton";
import sampleMenu from "../client/src/assets/sampleMenu";
import styled from "styled-components";
import MenuSelector from "../client/src/components/MenuSelector";
import TotalAmount from "../client/src/components/TotalAmount";
import Button from "../client/src/components/Button";
import TopTitleBar from "../client/src/components/TopTitleBar";
import TextIcon from "../client/src/components/TextIcon";

function FinalOrder() {
  const [order, setOrder] = useState(null);

  // TODO: get menu from server
  const fetchMenu = () => {
    return sampleMenu;
  };

  const PageContainer = styled.div`
    height: 110vh;
    width: 100vw;
    background: ${(p) => p.theme.colors.primary};
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

  useEffect(() => {
    // TODO: Perhaps implement webhook (socket) to listen for additional users
    const initializeOrder = () => {
      const menu = fetchMenu();
      return menu.map((item) => ({ ...item, quantity: 0 }));
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
          <h2>Final Order Summary</h2>
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
