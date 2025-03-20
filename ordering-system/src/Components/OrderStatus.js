import React, { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";

function OrderStatus() {
  const { orders } = useContext(OrderContext);

  return (
    <div>
      <h2>Order Status</h2>
      {orders.length === 0 ? <p>No orders placed yet.</p> : null}
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            Order #{index + 1} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderStatus;
