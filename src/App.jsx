import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";
import ProductListContainer from "./components/Products/ProductListContainer";
import ItemDetailContainer from "./components/SingleProduct/ItemDetailContainer";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <BrowserRouter>
        {/* layout */}
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <ProductListContainer
                greeting={"Welcome to Gaming Components!"}
              />
            }
          />
          <Route
            path="/category/:category"
            element={
              <ProductListContainer
                greeting={"Welcome to Gaming Components!"}
              />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
