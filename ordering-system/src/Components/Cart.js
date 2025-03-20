import React, { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";

function Cart() {
  const { cart, removeFromCart } = useContext(OrderContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : null}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
