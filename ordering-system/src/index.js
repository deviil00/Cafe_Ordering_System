import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import "./index.css";
import App from "./App";
import { OrderProvider } from "./Context/OrderContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <React.StrictMode>
    <OrderProvider>
      <App />
    </OrderProvider>
  </React.StrictMode>
);

reportWebVitals();

