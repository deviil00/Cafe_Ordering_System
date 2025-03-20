import React, { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import styled from "styled-components";
import jsPDF from "jspdf";

const StatusContainer = styled.div`
  background: rgb(237, 15, 59);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
`;

const Heading = styled.h1`
  color: black;
  margin-bottom: 15px;
`;

const OrderDetails = styled.div`
  font-size: 16px;
  color: black;
  margin: 10px 0;
`;

const StatusText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ status }) =>
    status === "Delivered" ? "green" : status === "Preparing" ? "orange" : "red"};
`;

const DownloadButton = styled.button`
  background: rgb(237, 15, 59);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;

  &:hover {
    background: darkred;
  }
`;

const OrderStatus = () => {
  const { orderStatus } = useContext(OrderContext);

  const orderData = {
    name: "Aditi",
    email: "aditi2019364@gmail.com",
    phone: "+91 9856231472",
    orderId: "BS_001",
    order: "Burger",
    quantity: 1,
    paymentMethod: "PhonePe",
    dateTime: new Date().toLocaleString(),
  };

  // 📌 Function to Generate the PDF Receipt
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Receipt", 90, 15);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // 📌 Customer Details
    doc.text(`Name: ${orderData.name}`, 20, 30);
    doc.text(`Email: ${orderData.email}`, 20, 40);
    doc.text(`Phone Number: ${orderData.phone}`, 20, 50);

    // 📌 Order Details Table
    doc.text("Order Details:", 20, 65);
    doc.line(20, 68, 180, 68);

    doc.text("Order ID", 20, 75);
    doc.text("Order", 70, 75);
    doc.text("Quantity", 120, 75);
    doc.text("Payment Method", 150, 75);
    doc.line(20, 78, 180, 78);

    doc.text(orderData.orderId, 20, 85);
    doc.text(orderData.order, 70, 85);
    doc.text(orderData.quantity.toString(), 120, 85);
    doc.text(orderData.paymentMethod, 150, 85);

    // 📌 Date & Time
    doc.text(`Date & Time: ${orderData.dateTime}`, 20, 100);

    doc.save("receipt.pdf"); // Downloads the PDF
  };

  return (
    <StatusContainer>
      <StatusCard>
        <Heading>Order Status</Heading>

        {/* Order Details */}
        <OrderDetails><strong>Order ID:</strong> {orderData.orderId}</OrderDetails>
        <OrderDetails><strong>Order:</strong> {orderData.order}</OrderDetails>
        <OrderDetails><strong>Quantity:</strong> {orderData.quantity}</OrderDetails>
        <OrderDetails><strong>Payment Method:</strong> {orderData.paymentMethod}</OrderDetails>

        {/* Status Text */}
        <StatusText status={orderStatus}>{orderStatus}</StatusText>

        {/* Download Bill Button */}
        <DownloadButton onClick={generatePDF}>Download Bill</DownloadButton>
      </StatusCard>
    </StatusContainer>
  );
};

export default OrderStatus;
