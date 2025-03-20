import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OrderContext } from "../Context/OrderContext";
import styled from "styled-components";

const CartContainer = styled.div`
  background:#781F1F;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CartCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
`;

const Heading = styled.h1`
  color: black;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const QuantityButton = styled.button`
  background: yellow;
  color: black;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: orange;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => (props.primary ? (props.disabled ? "gray" : "green") : "#007bff")};
  color: white;
  font-weight: bold;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 48%;
  &:hover {
    background: ${(props) => (props.primary && !props.disabled ? "#006400" : props.disabled ? "gray" : "#0056b3")};
  }
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const TermsCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: green;
  margin-right: 8px;
`;

const TermsLink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: darkred;
  }
`;

const Cart = () => {
  const { order, setOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", rating: "" });

  useEffect(() => {
    if (location.state?.fromReview) {
      navigate("/payment");
    }
  }, [location, navigate]);

  const updateQuantity = (index, change) => {
    const updatedOrder = [...order];
    updatedOrder[index].quantity = (updatedOrder[index].quantity || 1) + change;
    if (updatedOrder[index].quantity <= 0) {
      updatedOrder.splice(index, 1);
    }
    setOrder(updatedOrder);
  };

  const totalPrice = order.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const handlePlaceOrder = () => {
    if (agreeToTerms) {
      setShowForm(true);
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.mobile && formData.email && formData.rating) {
      setShowForm(false);
      navigate("/payment");
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <CartContainer>
      <CartCard>
        <Heading>Your Cart</Heading>
        {order.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          order.map((item, index) => (
            <Item key={index}>
              <span>{item.name} - ₹{item.price * (item.quantity || 1)}</span>
              {location.state?.fromReview ? null : (
                <div>
                  <QuantityButton onClick={() => updateQuantity(index, -1)}>-</QuantityButton>
                  {item.quantity || 1}
                  <QuantityButton onClick={() => updateQuantity(index, 1)}>+</QuantityButton>
                </div>
              )}
            </Item>
          ))
        )}
        <h2>Total: ₹{totalPrice}</h2>

        <TermsContainer>
          <TermsCheckbox
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <span>
            I agree to the{" "}
            <TermsLink onClick={() => navigate("/terms")}>Terms and Conditions</TermsLink>

          </span>
        </TermsContainer>

        <ButtonContainer>
          <Button primary disabled={!agreeToTerms} onClick={handlePlaceOrder}>
            Place Order
          </Button>
          <Button onClick={() => navigate("/menu")}>Add More Items</Button>
        </ButtonContainer>
      </CartCard>

      {showForm && (
        <FormOverlay>
          <FormContainer>
            <h3>Complete Your Details</h3>
            <Input
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Mobile Number*"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Rate us*"
              onClick={() => window.open("https://maps.app.goo.gl/6HQjBHj9LFWzF3EE8?g_st=aw", "_blank")}
              readOnly
            />
            <Button primary onClick={handleSubmit}>Submit</Button>
            <CloseButton onClick={() => setShowForm(false)}>Close</CloseButton>
          </FormContainer>
        </FormOverlay>
      )}
    </CartContainer>
  );
};

export default Cart;
