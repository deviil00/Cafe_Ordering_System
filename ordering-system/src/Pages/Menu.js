import React, { useState, useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import styled from "styled-components";

const MenuContainer = styled.div`
  background: #781F1F;
  min-height: 100vh;
  padding: 40px;
  text-align: center;
`;

const Heading = styled.h1`
  color: #FFD700;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  padding: 10px;
  width: 170px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

const Collapser = styled.div`
  background: white;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  border: 2px solid white;
`;

const CollapserHeader = styled.div`
  background: #781F1F;
  color: white;
  padding: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CollapserContent = styled.div`
  background: #f8f8f8;
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const Variant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  gap: 10px;
  flex-wrap: wrap;
`;

const VariantLeft = styled.div`
  flex: 1;
  text-align: left;
`;

const VariantRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: green;
  font-weight: bold;
  margin: 0;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const QuantityDisplay = styled.div`
  width: 40px;
  text-align: center;
  font-size: 1rem;
  padding: 5px;
  background: #eee;
  border-radius: 5px;
`;

const AddToCartButton = styled.button`
  background-color: #781F1F;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  min-width: 120px;
  text-align: center;
  &:hover {
    background-color: #333;
  }
`;

const menuData = [
  {
    name: "Vada Pav",
    category: "Vada Pav",
    variants: [
      { name: "Bombay Vada Pav", price: 25 },
      { name: "Jain Vada Pav", price: 30 },
      { name: "Jain Butter Grilled Vada Pav", price: 40 },
      { name: "Amul Vada Pav", price: 30 },
      { name: "Spicy Vada Pav", price: 35 },
      { name: "Ulta Vada Pav", price: 35 },
      { name: "Mayo Vada Pav", price: 50 },
      { name: "Cheese Vada Pav", price: 40 },
      { name: "Cheese Burst Vada Pav", price: 70 }
    ],
  },
  {
    name: "Sandwiches",
    category: "Sandwiches",
    variants: [
      { name: "Bombay Kaccha", price: 50 },
      { name: "Veg Grilled", price: 60 },
      { name: "Bombay Masala Grilled", price: 60 },
      { name: "Cheese Chutney", price: 80 },
      { name: "Bumbaiya Club", price: 120 },
      { name: "Tandoori Paneer", price: 120 },
      { name: "Pizza Sandwiches", price: 120 },
      { name: "Jungle Sandwiches", price: 120 },
      { name: "Veg Loaded Sandwizza", price: 90 }
    ],
  },
  {
    name: "Pizza",
    category: "Pizza",
    variants: [
      { name: "Margherita Pizza", price: 129 },
      { name: "Golden Corn  Pizza", price: 149 },
      { name: "Spicy Veg Pizza", price: 150 },
      { name: "Onion, Capsicum, Cheese", price: 160 },
      { name: "Farm House Pizza", price: 189 },
      { name: "Tandoori Paneer Pizza", price: 189 }
    ],
  },
  {
    name: "Bhajiya",
    category: "Bhajiya",
    variants: [
      { name: "Kanda Bhajiya", price: 40 },
      { name: "Potato Bhajiya", price: 40 },
      { name: "Jain Butter Grilled Bhajiya", price: 50 },
      { name: "Crispy Potato Sticks", price: 80 },
      { name: "Crispy Onion Rings", price: 80 },
      { name: "Crispy Paneer Sticks", price: 100 }
    ],
  },
  {
    name: "Jain's Special",
    category: "Jain's Special",
    variants: [
      { name: "Masala Sandwich", price: 60 },
      { name: "Kaccha Sandwich", price: 50 },
      { name: "Katori Chaat", price: 65 },
      { name: "Shahi Basket Chaat", price: 70 },
      { name: "Aloo Tikki Chaat", price: 50 },
      { name: "Plain Maggi", price: 50 },
      { name: "Tomato Maggi", price: 60 },
      { name: "Tawa Pulao", price: 90 },
      { name: "Bhel", price: 40 },
      { name: "Salted Fries", price: 50 }
    ],
  },
  {
    name: "Chaat",
    category: "Chaat",
    variants: [
      { name: "Samosa Chaat", price: 50 },
      { name: "Chaat Shot", price: 70 },
      { name: "Chole Tikki Chaat", price: 60 },
      { name: "Shahi Basket", price: 70 },
      { name: "Katori Chaat", price: 65 }
    ],
  },
  {
    name: "Samosa",
    category: "Samosa",
    variants: [
      { name: "Samosa Pav", price: 30 },
      { name: "Spicy Samosa Pav", price: 35 },
      { name: "Grilled Samosa Pav", price: 35 },
      { name: "Cheese Samosa Pav", price: 45 },
    ],
  },
  {
    name: "Fries",
    category: "Fries",
    variants: [
      { name: "Salted", price: 60 },
      { name: "Peri-Peri", price: 70 },
      { name: "BBQ Fries", price: 80 },
      { name: "Falhari Fries", price: 80 },
    ],
  },
  {
    name: "Mumbaiya Bhel",
    category: "Mumbaiya Bhel",
    variants: [
      { name: "Bhel Puri", price: 50 },
      { name: "Teekha Bhel", price: 50 },
      { name: "Sweet Bhel", price: 50 },
      { name: "Cheesy Bhel", price: 70 },
      { name: "Crispy Maggi Bhel", price: 90 },
    ],
  },
  {
    name: "Chai",
    category: "Chai",
    variants: [
      { name: "Kadak Chai", price: 20 },
      { name: "Adrak Chai", price: 20 },
      { name: "Masala Chai", price: 30 },
      { name: "Elaichi Chai", price: 30 }
    ],
  },
  {
    name: "Misal Pav",
    category: "Misal Pav",
    variants: [
      { name: "Bombay Misal Pav", price: 80 },
      { name: "Schezwan Misal Pav", price: 100 },
      { name: "Dahi Misal Pav", price: 100 },
      { name: "Cheese Misal Pav", price: 110 }
    ],
  },
  {
    name: "Coolers's",
    category: "Coolers's",
    variants: [
      { name: "Butter Milk ", price: 40 },
      { name: "Sweet Lassi", price: 60 },
      { name: "Salted Lassi", price: 60 }
    ],
  },
  {
    name: "Refreshment",
    category: "Refreshment",
    variants: [
      { name: "Lime Soda", price: 60 },
      { name: "Masala Soda", price: 70 },
      { name: "Cola Lemonade", price: 80 }
    ],
  },
  {
    name: "Mojito",
    category: "Mojito",
    variants: [
      { name: "Green Apple", price: 90 },
      { name: "Kala Khatta", price: 90 },
      { name: "Tangy Mango", price: 90 }
    ],
  },
  {
    name: "Pav Bhaji",
    category: "Pav Bhaji",
    variants: [
      { name: "Butter Pav Bhaji", price: 90 },
      { name: "Cheese Pav Bhaji", price: 120 },
      { name: "Jain Pav Bhaji", price: 95 }
    ],
  },
  {
    name: "Chole Bhature",
    category: "Chole Bhature",
    variants: [
      { name: "Chole Bhature", price: 95 },
      { name: "Paneer Chole Bhature", price: 150 },
      { name: "Jain Chole Bhature", price: 100 }
    ],
  },
  ,
  {
    name: "Burger",
    category: "Burger",
    variants: [
      { name: "Aloo Tikki Burger", price: 50 },
      { name: "Veg Cheese Burger", price: 70 },
      { name: "Spicy Veg Supreme Burger", price: 70 }
    ],
  },
  {
    name: "Pulao",
    category: "Pulao",
    variants: [
      { name: "Bombay Tawa Pulao", price: 110 },
      { name: "Bombay Tawa Pulao (With Bhaji", price: 150 }
    ],
  },
  {
    name: "Special's ",
    category: "Special's",
    variants: [
      { name: "Aloo Vada", price: 40 },
      { name: "Dabeli", price: 50 },
      { name: "Misal Thali", price: 150 },
      { name: "Masala Pav", price: 80 },
      { name: "Dhokla Vada Pav", price: 60 },
      { name: "Sabudana Vada", price: 70 },
      { name: "Dahi Sabudana Vada", price: 90 },
      { name: "Chai Thali", price: 129 },
      { name: "Indori Poha ", price: 30 },
      { name: "Ussal Poha", price: 40 },
      { name: "Cold Coffee", price: 50 },
      { name: "Hot Coffee", price: 50 },
      { name: "Bun Masaka", price: 30 }
    ],
  }
];

const Menu = () => {
  const [expandedId, setExpandedId] = useState(menuData[0]._id)
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const { setOrder } = useContext(OrderContext);
  const [quantities, setQuantities] = useState({});

  const toggleExpand = (id) => {
     setExpandedId(expandedId === id ? null : id)
  };

  const handleQuantityChange = (itemId, variantName, delta) => {
    const key = `${itemId}-${variantName}`;
    setQuantities((prev) => {
      const newQty = Math.max(0, (prev[key] || 0) + delta);
      return { ...prev, [key]: newQty };
    });
  };

  const handleAddToCart = (item, variant) => {
    const key = `${item._id}-${variant.name}`;
    const itemQuantity = quantities[key] || 0;
  
    if (itemQuantity === 0) return; // Don't add if quantity is 0
  
    setOrder((prevOrder) => {
      const existingIndex = prevOrder.findIndex(
        (orderItem) => orderItem._id === item._id && orderItem.selectedVariant === variant.name
      );
  
      if (existingIndex !== -1) {
        // If item already exists, update its quantity instead of adding a new entry
        const updatedOrder = [...prevOrder];
        updatedOrder[existingIndex] = {
          ...updatedOrder[existingIndex],
          quantity: itemQuantity,
        };
        return updatedOrder;
      } else {
        // Add new item with proper variant name
        return [
          ...prevOrder,
          {
            ...item,
            name: `${item.name} (${variant.name})`, // Ensure variant is displayed
            price: variant.price,
            quantity: itemQuantity,
            selectedVariant: variant.name,
          },
        ];
      }
    });
  };
  
  const filteredItems = menuData.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MenuContainer>
      <Heading>Explore Our Delicious Menu</Heading>
      <FiltersContainer>
        <SearchBar
          type="text"
          placeholder="Search for food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
          <option value="Vada Pav">Vada Pav</option>
          <option value="Sandwiches">Sandwiches</option>
          <option value="Pizza">Pizza</option>
          <option value="Bhajiya">Bhajiya</option>
          <option value="Jain's Special">Jain's Special</option>
          <option value="Chaat">Chaat</option>
          <option value="Samosa">Samosa</option>
          <option value="Fries">Fries</option>
          <option value="Mumbaiya Bhel">Mumbaiya Bhel</option>
          <option value="Chai">Chai</option>
          <option value="Misal Pav">Misal Pav</option>
          <option value="Cooler's">Cooler's</option>
          <option value="Refreshment">Refreshment</option>
          <option value="Mojito">Mojito</option>
          <option value="Pav Bhaji">Pav Bhaji</option>
          <option value="Chole Bhature">Chole Bhature</option>
          <option value="Burger">Burger</option>
          <option value="Pulao">Pulao</option>
          <option value="Special's">Special's</option>
        </Select>
      </FiltersContainer>
      {filteredItems.length === 0 ? (
        <p style={{ color: "white", fontSize: "1.2rem" }}>
          No items found for the selected criteria.
        </p>
      ) : (
        <GridContainer>
          {filteredItems.map((item) => (
            <Collapser key={item._id}>
              <CollapserHeader onClick={() => toggleExpand(item._id)}>
                <span>{item.name}</span>
                <span>{expandedId === item._id ? "▲" : "▼"}</span>
              </CollapserHeader>
              <CollapserContent isOpen={expandedId === item._id}>
              {item.variants.map((variant) => {
                const key = `${item._id}-${variant.name}`;
                  return (
                    <Variant key={variant.name}>
                      <VariantLeft>
                        <strong>{variant.name}</strong>
                      </VariantLeft>
                      <VariantRight>
                        <Price>₹{variant.price}</Price>
                        <QuantityContainer>
                          <QuantityButton onClick={() => handleQuantityChange(item._id, variant.name, -1)}>-</QuantityButton>
                          <QuantityDisplay>{quantities[key] || 0}</QuantityDisplay>
                          <QuantityButton onClick={() => handleQuantityChange(item._id, variant.name, 1)}>+</QuantityButton>
                        </QuantityContainer>
                        <AddToCartButton onClick={() => handleAddToCart(item, variant)}>Add to Cart</AddToCartButton>
                      </VariantRight>
                    </Variant>
                  );
                })}
              </CollapserContent>
            </Collapser>
          ))}
        </GridContainer>
      )}
    </MenuContainer>
  );
};

export default Menu;
