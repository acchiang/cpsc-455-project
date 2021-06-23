import React, { useEffect, useState } from "react";
import { OrderContext } from "utils/Context";
import sampleMenu from "assets/sampleMenu";

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

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {JSON.stringify(order)}
    </OrderContext.Provider>
  );
}

export default OrderScreen;
