import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Headphones from "./components/headphones/Headphones";
import Speakers from "./components/speakers/Speakers";
import Earphones from "./components/earphones/Earphones";
import Product from "./components/Product/Product";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
