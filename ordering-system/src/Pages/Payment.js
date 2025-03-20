import React, { useContext, useState } from "react";
import { OrderContext } from "../Context/OrderContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PaymentContainer = styled.div`
  background: rgb(240, 49, 49);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
`;

const Heading = styled.h1`
  color: black;
  margin-bottom: 15px;
`;

const AmountBox = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
`;

const PayButton = styled.button`
  background: #4a4a4a;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: black;
  }
`;

const ProcessingText = styled.p`
  color: green;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
`;

const Payment = () => {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = order.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const handlePayment = () => {
    setIsProcessing(true); // Show processing message

    // Simulate payment process (3s delay before redirect)
    setTimeout(() => {
      navigate("/order-status");
    }, 3000);
  };

  return (
    <PaymentContainer>
      <PaymentCard>
        <Heading>Complete Your Payment</Heading>
        <AmountBox>Total: ₹{totalPrice}</AmountBox>
        <PayButton onClick={handlePayment} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay with PhonePe"}
        </PayButton>
        {isProcessing && <ProcessingText>Processing Payment... Please wait.</ProcessingText>}
      </PaymentCard>
    </PaymentContainer>
  );
};

export default Payment;
