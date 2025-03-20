import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #1b2b40;
  color: white;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  color: red;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.3s;

  &:hover {
    color: #f5a623;
  }
`;

const AdminNavbar = () => {
  return (
    <Navbar>
      <Logo>Bombay Misal</Logo>
      <NavLinks>
        <li><StyledLink to="/admin/dashboard">Dashboard</StyledLink></li>
        <li><StyledLink to="/orders">Orders</StyledLink></li>
        <li><StyledLink to="/">Logout</StyledLink></li>
      </NavLinks>
    </Navbar>
  );
};

export default AdminNavbar;
