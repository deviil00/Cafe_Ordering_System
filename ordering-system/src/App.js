import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import OrderStatus from './Pages/OrderStatus';
import AdminLogin from './Pages/AdminLogin';
import AdminPanel from './Pages/AdminPanel';
import Orders from "./Pages/Order";
import Terms from "./Pages/Terms";
import NavBar from "./Components/NavBar";
import AdminNavbar from "./Components/AdminNavbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname === "/orders";

  return (
    <>
      {!isAdminRoute && <NavBar />}
      {isAdminRoute && location.pathname !== "/admin" && <AdminNavbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>  {/* ✅ Move Layout outside Routes to ensure correct rendering */}
        <Routes>
          {/* ✅ Admin Login Route (No Layout) */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* ✅ User & Admin Routes (With Layout) */}
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-status" element={<OrderStatus />} />

          {/* ✅ Admin Routes */}
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
