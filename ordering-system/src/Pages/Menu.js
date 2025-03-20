import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
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
  width: 250px;
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
  background:#781F1F;
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
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

const VariantText = styled.p`
  font-size: 1rem;
  margin: 0;
  flex: 1;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: green;
  font-weight: bold;
  margin-right: 20px;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  padding: 5px;
  margin-right: 20px;
`;

const AddToCartButton = styled.button`
  background-color: #781F1F;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #333;
  }
`;

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { setOrder } = useContext(OrderContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState({});
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    let filtered = menuItems;
    if (category !== "All") {
      filtered = filtered.filter(item => item.category === category);
    }
    if (searchQuery) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setFilteredItems(filtered);
  }, [category, searchQuery, menuItems]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleQuantityChange = (itemId, variantName, value) => {
    if (value < 0) return;
    setQuantities((prev) => ({
      ...prev,
      [`${itemId}-${variantName}`]: value,
    }));
  };

  const handleAddToCart = (item, variant) => {
    const key = `${item._id}-${variant.name}`;
    const itemQuantity = quantities[key];

    if (itemQuantity === 0) return;

    const newItem = {
      ...item,
      selectedVariant: variant.name,
      price: variant.price,
      quantity: itemQuantity,
    };

    setOrder((prevOrder) => [...prevOrder, newItem]);
  };

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
          <option value="Jain's Special">Jain's Special</option>
          <option value="Pizza">Pizza</option>
          <option value="Bhajiya">Bhajiya</option>
          <option value="Mumbaiya Bhel">Mumbaiya Bhel</option>
          <option value="Misal Pav">Misal Pav</option>
          <option value="Samosa">Samosa</option>
          <option value="Chaat">Chaat</option>
          <option value="Chai">Chai</option>
          <option value="Pav Bhaji">Pav Bhaji</option>
          <option value="Chole Bhature">Jain's Special</option>
          <option value="Fries">Fries</option>
          <option value="Burger">Jain's Special</option>
          <option value="Cooler's">Cooler's</option>
          <option value="Refreshment">Refreshment</option>
          <option value="Mojito">Mojito</option>
          <option value="Pulao">Pulao</option>
          <option value="Special's">Special's</option>
        </Select>
      </FiltersContainer>
      <GridContainer>
        {filteredItems.map((item) => (
          <Collapser key={item._id}>
            <CollapserHeader onClick={() => toggleExpand(item._id)}>
              <span>{item.name}</span>
              <span>{expanded[item._id] ? "▲" : "▼"}</span>
            </CollapserHeader>
            <CollapserContent isOpen={expanded[item._id]}>
              {item.variants.map((variant) => (
                <Variant key={variant.name}>
                  <VariantText>{variant.name}</VariantText>
                  <Price>₹{variant.price}</Price>
                  <QuantityInput
                    type="number"
                    min="0"
                    value={quantities[`${item._id}-${variant.name}`] || 0}
                    onChange={(e) => handleQuantityChange(item._id, variant.name, parseInt(e.target.value) || 0)}
                  />
                  <AddToCartButton onClick={() => handleAddToCart(item, variant)}>
                    Add to Cart
                  </AddToCartButton>
                </Variant>
              ))}
            </CollapserContent>
          </Collapser>
        ))}
      </GridContainer>
    </MenuContainer>
  );
};

export default Menu;
