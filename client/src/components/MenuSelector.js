import styled from "styled-components";
import { useState, useEffect } from "react";
import QuantitySelector from "./QuantitySelector";

const MenuSelectorContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 5px;
  border: ${(p) => p.border ?? "1px solid black"};
  max-width: 400px;
  max-height: 400px;
  overflow: scroll;
`;

const MenuItemRow = styled.tr`
  border: ${(p) => p.border ?? "1px solid black"};
  padding: 7px;
`;

const MenuItemRowData = styled.td``;

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
  return (
    <MenuSelectorContainer>
      <table>
        <tbody>
          {orderItems.map((orderItem) => {
            return (
              <MenuRow
                key={orderItem.name}
                orderItem={orderItem}
                // HACK
                updateQuantity={updateQuantity ?? ((a,b) => null)}
              />
            );
          })}
        </tbody>
      </table>
    </MenuSelectorContainer>
  );
};

export default MenuSelector;
