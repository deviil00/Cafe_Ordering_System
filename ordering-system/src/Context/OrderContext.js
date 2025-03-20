import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Preparing');

  return (
    <OrderContext.Provider value={{ order, setOrder, orderStatus, setOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};
