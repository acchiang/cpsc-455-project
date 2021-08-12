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
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: ${(p) => p.theme.fontSizes.small};
  }
`;

const MenuTable = styled.table`
  width: 100%;
`;

const ToggleRow = styled.td.attrs({
  colSpan: 4,
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
  color: ${(p) => p.theme.colors.text};
`;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

formatter.format(2500); /* $2,500.00 */

const MenuRow = ({ className, orderItem, updateQuantity, initQuantity, disableSelect }) => {
  const [quantity, setQuantity] = useState(initQuantity);
  useEffect(() => {
    updateQuantity(orderItem.name, quantity);
  }, [quantity, orderItem.name, updateQuantity]);
  return (
    <MenuItemRow className={className} key={orderItem.name}>
      <MenuItemRowData>{orderItem.name}</MenuItemRowData>
      <MenuItemRowData>{formatter.format(orderItem.price)}</MenuItemRowData>
      <MenuItemRowData>
        <QuantitySelector value={quantity} setValue={setQuantity} disable={disableSelect} />
      </MenuItemRowData>
    </MenuItemRow>
  );
};

const handleHideCategory = (category) => {
  const rowsToHide = document.getElementsByClassName(`${category}Row`);
  for (const row of rowsToHide) {
    row.style.display = row.style.display === "none" ? "" : "none";
  }
};

const MenuSelector = ({ order, updateQuantity, disableSelect }) => {
  const orderItems = order ?? [];
  const categorizeItems = (orders) => {
    const categorizedItems = {};
    for (const order of orders) {
      const { item } = order;
      categorizedItems[item.category] = categorizedItems[item.category]
        ? [...categorizedItems[item.category], order]
        : [order];
    }
    return categorizedItems;
  };

  const categorizedOrderItems = categorizeItems(orderItems);

  return (
    <MenuSelectorContainer>
      <MenuTable>
        <tbody>
          {Object.keys(categorizedOrderItems).map((category) => {
            const categoryItems = categorizedOrderItems[category];
            return (
              <>
                <tr>
                  <ToggleRow
                    key={category}
                    onClick={() => handleHideCategory(category)}
                  >
                    {category}
                  </ToggleRow>
                </tr>
                {categoryItems.map(({ item, quantity }) => {
                  return (
                    <MenuRow
                      className={`${category}Row`}
                      key={item._id}
                      orderItem={item}
                      initQuantity={quantity}
                      updateQuantity={updateQuantity ?? ((a, b) => null)}
                      disableSelect={disableSelect}
                    />
                  );
                })}
              </>
            );
          })}
        </tbody>
      </MenuTable>
    </MenuSelectorContainer>
  );
};

export default MenuSelector;
