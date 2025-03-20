import React from "react";

function FoodItem({ name, price, image, onAddToCart }) {
  return (
    <div className="food-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
