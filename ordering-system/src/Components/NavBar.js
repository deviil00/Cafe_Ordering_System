import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { OrderContext } from "../Context/OrderContext";
import logo from "../assets/Logo.jpeg"; // Import the logo

const Nav = styled.nav`
  background: rgb(237, 19, 19); /* Light reddish color */
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between logo and title */
  margin-bottom: 12px; /* Spacing below */
`;

const Logo = styled.img`
  width: 50px; /* Adjust size as needed */
  height: auto;
`;

const Title = styled.h2`
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const AdminNav = styled.nav`
  background: black;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Navbar = () => {
  const { isAdmin } = useContext(OrderContext);
  const location = useLocation();

  // If admin panel is accessed, show admin-specific Navbar
  if (location.pathname.startsWith("/admin")) {
    return (
      <AdminNav>
        <h2>Admin Panel</h2>
        <div>
          <StyledLink to="/admin/dashboard">Dashboard</StyledLink> | 
          <StyledLink to="/admin/orders">Orders</StyledLink> | 
          <StyledLink to="/admin/settings">Settings</StyledLink>
        </div>
      </AdminNav>
    );
  }

  // Default User Navbar
  return (
    <Nav>
      <LogoContainer>
        <Logo src={logo} alt="Bombay Misal Logo" />
        <Title>Bombay Misal-Vada Pav</Title>
      </LogoContainer>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink> | 
        <StyledLink to="/menu">Menu</StyledLink> | 
        <StyledLink to="/cart">Cart</StyledLink> | 
        <StyledLink to="/terms">Terms and Conditions</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;



