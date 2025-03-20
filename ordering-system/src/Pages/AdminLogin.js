import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import streetFoodImage from "../assets/street-food.jpg";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background: url(${streetFoodImage}) no-repeat center center/cover;
  position: relative;
`;

// Red Overlay on Background
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(220, 29, 29, 0.7); /* Red with transparency */
`;

// Smaller Sidebar for "Bombay Misal"
const Sidebar = styled.div`
  width: 250px;
  height: 80px; /* Reduced Height */
  background-color: rgba(220, 29, 29, 0.7); /* Dark sidebar */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  left: 20px; /* Adjust position from left */
  top: 20px; /* Adjust position from top */
  border-radius: 10px; /* Optional rounded corners */
  z-index: 2;
`;

// Login Box Styling
const LoginBox = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 90%;
  padding: 9px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: rgba(250, 168, 17, 0.84);
  color: white;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: darkred;
  }
`;

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <LoginContainer>
      <Overlay />
      <Sidebar>Bombay Misal</Sidebar>
      <ContentWrapper>
        <LoginBox>
          <Heading>Admin Login</Heading>
          <Input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </LoginBox>
      </ContentWrapper>
    </LoginContainer>
  );
};

export default AdminLogin;
