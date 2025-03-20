import React from "react";
import styled from "styled-components";
import { FiHome, FiList, FiUsers, FiLogOut } from "react-icons/fi";

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1b1b1b;
  color: white;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #222;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100vh;
`;

const SidebarHeader = styled.h2`
  margin-bottom: 40px;
  color: #ffcc00;
  text-transform: uppercase;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const SidebarItem = styled.li`
  width: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;
  color: #ddd;

  &:hover {
    background-color: #333;
    color: #ffcc00;
  }

  svg {
    margin-right: 12px;
  }
`;

const ContentArea = styled.div`
  margin-left: 250px;
  flex: 1;
  padding: 40px;
  background-color: #282828;
`;

const DashboardHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  
  &:hover {
    background: #444;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
  color: #ffcc00;
`;

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const AdminPanel = () => {
  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarHeader>Admin Panel</SidebarHeader>
        <SidebarMenu>
          <SidebarItem>
            <FiHome /> Dashboard
          </SidebarItem>
          <SidebarItem>
            <FiList /> Orders
          </SidebarItem>
          <SidebarItem>
            <FiUsers /> Users
          </SidebarItem>
          <SidebarItem>
            <FiLogOut /> Logout
          </SidebarItem>
        </SidebarMenu>
      </Sidebar>

      <ContentArea>
        <DashboardHeader>Welcome, Admin</DashboardHeader>
        <CardsContainer>
          <Card>
            <CardTitle>Total Orders</CardTitle>
            <CardValue>120</CardValue>
          </Card>
          <Card>
            <CardTitle>Revenue</CardTitle>
            <CardValue>₹85,000</CardValue>
          </Card>
          <Card>
            <CardTitle>Active Users</CardTitle>
            <CardValue>500</CardValue>
          </Card>
          <Card>
            <CardTitle>Pending Orders</CardTitle>
            <CardValue>15</CardValue>
          </Card>
        </CardsContainer>
      </ContentArea>
    </DashboardContainer>
  );
};

export default AdminPanel;

