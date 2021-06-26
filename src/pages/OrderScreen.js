import React, { useEffect, useState } from "react";
import Theme from 'styles/Theme'
import { OrderContext } from "utils/Context";
import sampleMenu from "assets/sampleMenu";
import BackButton from "components/BackButton";
import MenuSelector from "components/MenuSelector"
import styled from 'styled-components'

function OrderScreen() {
  const [order, setOrder] = useState(null);

  // TODO: get menu from server
  const fetchMenu = () => {
    return sampleMenu;
  };

  // TODO: send order to server & attach userId
  const sendOrder = () => {};

  // TODO: get group total (including tips) from server
  const getGroupTotals = () => {};

  // TODO: history.push to next page with data
  const consolidateOrder = () => {}

  useEffect(() => {
    // TODO: Perhaps implement webhook (socket) to listen for additional users
    const initializeOrder = () => {
      const menu = fetchMenu();
      return menu.map((item) => ({ ...item, quantity: 0 }));
    };
    setOrder(initializeOrder());
  }, []);


  const PanelContainer = styled.table`
    margin: 20px;
  `

  const Panel = styled.td`
  `
  
  return (
    <Theme>
    <OrderContext.Provider value={[order, setOrder]}>
      <BackButton url={"/create-session"}/>
      <PanelContainer>
        <tr>
          <Panel>
            <h2>Menu</h2>
            <MenuSelector order={order} />
          </Panel>
        </tr>
      </PanelContainer>
    </OrderContext.Provider>
    </Theme>
  );
}

export default OrderScreen;
