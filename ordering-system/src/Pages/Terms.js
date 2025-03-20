import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TermsContainer = styled.div`
  background: #781F1F;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TermsCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Heading = styled.h1`
  color: black;
  margin-bottom: 20px;
  text-align: center;
`;

const SubHeading = styled.h2`
  color: black;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  text-align: justify;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 100%;
  &:hover {
    background: #0056b3;
  }
`;

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <TermsContainer>
      <TermsCard>
        <Heading>Welcome</Heading>
        <p>Please read the following terms and conditions carefully:</p>
        <List>
          <ListItem>By placing an order, you agree to our policies.</ListItem>
          <ListItem>All orders are subject to availability and confirmation.</ListItem>
          <ListItem>Payment must be made before order processing begins.</ListItem>
          <ListItem>Once an order is placed, modifications may not be possible.</ListItem>
          <ListItem>Delivery times are estimates and may vary.</ListItem>
          <ListItem>Refunds and returns are subject to our refund policy.</ListItem>
        </List>
        
        <SubHeading>Privacy Policy</SubHeading>
        <Paragraph>
          <strong>Introduction:</strong> This Privacy Policy describes how Bombay Misal Vada Pav ("we", "our", "us") collects, uses, shares, and protects your personal data through our website ("Platform").
        </Paragraph>
        <Paragraph>
          By visiting this Platform, you agree to be bound by this Privacy Policy and the Terms of Use. We do not offer products/services outside India, and your personal data is stored and processed in India.
        </Paragraph>
        
        <SubHeading>Collection of Information</SubHeading>
        <Paragraph>
          We collect personal data when you interact with our Platform. This includes name, date of birth, address, phone number, email ID, payment details, and other necessary information.
        </Paragraph>
        
        <SubHeading>Usage of Information</SubHeading>
        <Paragraph>
          Your data is used to process orders, enhance customer experience, resolve disputes, and prevent fraud. We may also use it for marketing purposes, with an option to opt out.
        </Paragraph>
        
        <SubHeading>Sharing of Information</SubHeading>
        <Paragraph>
          We may share your data with business partners, third-party service providers, and law enforcement agencies if required by law.
        </Paragraph>
        
        <SubHeading>Security Precautions</SubHeading>
        <Paragraph>
          We implement reasonable security practices to protect your data. However, data transmission over the internet carries inherent risks, and users are responsible for safeguarding their login credentials.
        </Paragraph>
        
        <SubHeading>Data Deletion & Retention</SubHeading>
        <Paragraph>
          You can delete your account through profile settings. However, we may retain certain data to comply with legal obligations or prevent fraud.
        </Paragraph>
        
        <SubHeading>Your Rights</SubHeading>
        <Paragraph>
          You have the right to access, update, and rectify your personal data. By using our Platform, you consent to the collection, use, and processing of your data per this Privacy Policy.
        </Paragraph>
      </TermsCard>
    </TermsContainer>
  );
};

export default TermsAndConditions;
