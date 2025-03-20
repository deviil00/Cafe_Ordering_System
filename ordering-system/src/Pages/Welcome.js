import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import streetFoodImage from "../assets/street-food.jpg"; // Background Image
import logo from "../assets/Logo.jpeg"; // Ensure your logo is in the assets folder

// Styled Components
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${streetFoodImage}) no-repeat center center/cover;
  color: white;
  text-align: center;
`;

const Overlay = styled.div`
  background: rgba(255, 0, 0, 0.6); /* Red overlay with transparency */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px black;
`;

const Button = styled(Link)`
  background: #ffcc00;
  color: black;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
`;

const Welcome = () => {
  return (
    <Container>
      <Overlay>
        <Logo src={logo} alt="Bombay Misal Logo" />
        <Title>Welcome</Title>
        <Button to="/menu">Explore Menu</Button>
      </Overlay>
    </Container>
  );
};

export default Welcome;
