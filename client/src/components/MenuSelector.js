import styled from "styled-components";
import React, { useState, useEffect } from "react";
import QuantitySelector from "./QuantitySelector";

const MenuSelectorContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 5px;
  border: ${(p) => p.border ?? "1px solid black"};
  max-width: 400px;
  max-height: 400px;
  overflow: scroll;
`;

const MenuTable = styled.table`
  width: 100%;`

const ToggleRow = styled.td.attrs({
  colSpan: 4
})` 
  width: 100%;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 7px;
  color: ${(p) => p.theme.colors.text};
`;

const MenuItemRow = styled.tr`
  border: ${(p) => p.border ?? "1px solid black"};
  padding: 7px;
`;

const MenuItemRowData = styled.td`
  color: ${(p) => p.theme.colors.text}
`;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

formatter.format(2500); /* $2,500.00 */

const MenuRow = ({ orderItem, updateQuantity }) => {
  const [quantity, setQuantity] = useState(orderItem.quantity);
  useEffect(() => {
    updateQuantity(orderItem.name, quantity);
  }, [quantity, orderItem.name, updateQuantity]);
  return (
    <MenuItemRow key={orderItem.name}>
      <MenuItemRowData>{orderItem.name}</MenuItemRowData>
      <MenuItemRowData>{formatter.format(orderItem.price)}</MenuItemRowData>
      <MenuItemRowData>
        <QuantitySelector value={quantity} setValue={setQuantity} />
      </MenuItemRowData>
    </MenuItemRow>
  );
};

const MenuSelector = ({ order, updateQuantity }) => {
  const orderItems = order ?? [];
  const categorizeItems = (items) => {
    const categorizedItems = {}
    for (const item of items) {
      categorizedItems[item.category] = categorizedItems[item.category] ?  [...categorizedItems[item.category], item] : [item]
    }
    return categorizedItems;
  }

  const categorizedOrderItems = categorizeItems(orderItems);
  
  return (
    <MenuSelectorContainer>
      <MenuTable>
        <tbody>
        {Object.keys(categorizedOrderItems).map((category) => {
          const categoryItems = categorizedOrderItems[category]
          return (
            <React.Fragment>
              <tr>
                <ToggleRow key={category}>
                  {category}
                </ToggleRow>
              </tr>
              {categoryItems.map((orderItem) => {
                return (
                  <MenuRow
                    key={orderItem._id}
                    orderItem={orderItem}
                    // HACK
                    updateQuantity={updateQuantity ?? ((a,b) => null)}
                  />
                )
              })}
              </React.Fragment>
          )})}
        </tbody>
      </MenuTable>
    </MenuSelectorContainer>
  );
};

export default MenuSelector;
