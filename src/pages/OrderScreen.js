import React, { useEffect, useState } from "react";
import Theme from 'styles/Theme'
import { OrderContext } from "utils/Context";
import sampleMenu from "assets/sampleMenu";
import BackButton from "components/BackButton";
import Button from "components/Button";
import MenuSelector from "components/MenuSelector"
import styled from 'styled-components'
import TextIcon from "components/TextIcon";

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

  const PageContainer = styled.div`
    height: 100vh; 
    width: 100vw; 
    background: ${p => p.theme.colors.primary};
  `;


  const PanelContainer = styled.table`
    margin: 20px;
  `

  const Panel = styled.td`
    vertical-align:top
  `

  const Divider = styled.div`
  height: 90vh; 
  width: 1px; 
  background-color: ${(p) => p.theme.colors.text};
  margin-left: 50px;
  margin-right: 50px;
`

  const IconsContainer = styled.div`
  `
  
  return (
    <Theme>
    <OrderContext.Provider value={[order, setOrder]}>
      <PageContainer>
      <BackButton url={"/create-session"}/>
      <PanelContainer>
        <tr>
          <Panel>
            <h2>Menu</h2>
            <MenuSelector order={order} />
          </Panel>
          <Panel>
            <Divider/>
          </Panel>
          <Panel>
            <h2>Users</h2>
            <IconsContainer>
              <TextIcon textLetter={'t'} size={'default'} color={'#31B4DB'}>test user</TextIcon>
            </IconsContainer>
            <Button size={"small"} type={"primary"} label={"consolidate"} onClick={()=> window.location.href='/final-order'} />
      
          </Panel>
        </tr>
      </PanelContainer>
      </PageContainer>
    </OrderContext.Provider>
    </Theme>
  );
}

export default OrderScreen;
