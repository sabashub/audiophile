import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import MainContent from "./components/mainContent/MainContent";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

const Rout = () => {
  return (
    <BrowserRouter>
      <Shop />
      <MainContent />
      <Blog />
      <Footer />
    </BrowserRouter>
  );
};

export default Rout;
