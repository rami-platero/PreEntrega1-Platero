import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

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
              <ItemListContainer greeting={"Welcome to Gaming Components!"} />
            }
          />
          <Route
            path="/category/:category"
            element={
              <ItemListContainer greeting={"Welcome to Gaming Components!"} />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
