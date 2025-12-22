import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
