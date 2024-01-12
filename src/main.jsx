import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartContextProvider } from "./context/CartContext.jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster richColors/>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
