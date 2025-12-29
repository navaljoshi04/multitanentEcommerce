import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
