import React, { useState } from "react";
import Theme from 'styles/Theme'
import { OrderContext } from "utils/Context";
import BackButton from "components/BackButton";
import styled from 'styled-components'

function FinalOrder() {
  const [order, setOrder] = useState(null);

  const PageContainer = styled.div`
    height: 100vh; 
    width: 100vw; 
    background: ${p => p.theme.colors.primary};
  `;

  
  return (
    <Theme>
    <OrderContext.Provider value={[order, setOrder]}>
      <PageContainer>
      <BackButton url={"/order-screen"}/>
      </PageContainer>
    </OrderContext.Provider>
    </Theme>
  );
}

export default FinalOrder;
