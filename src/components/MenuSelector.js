import styled from 'styled-components'
import { useState } from 'react'
import QuantitySelector from './QuantitySelector';

const MenuSelectorContainer = styled.div`
  border-radius: 5px;
  border: ${(p) => p.border ?? "1px solid black"};
  max-width: 400px;
  max-height: 400px; 
  overflow: scroll;
`

const MenuItemRow = styled.tr`
  border: ${(p) => p.border ?? "1px solid black"};
  padding: 7px;
`

const MenuItemRowData = styled.td`
`

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

formatter.format(2500); /* $2,500.00 */

const MenuSelector = ({order}) => {
  const orderItems = order ?? [];
  const [quantity, setQuantity] = useState(4)
  return (<MenuSelectorContainer>
    <table>
      {orderItems.map((orderItem)=>{
        return (<MenuItemRow>
          <MenuItemRowData>{orderItem.name}</MenuItemRowData>
          <MenuItemRowData>{formatter.format(orderItem.price)}</MenuItemRowData>
          <MenuItemRowData><QuantitySelector value={quantity} setValue={setQuantity}/></MenuItemRowData>
        </MenuItemRow>)
      })}
    </table>
    
  </MenuSelectorContainer>);
}

export default MenuSelector