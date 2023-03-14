import React from "react";
import Header from "../components/header/Header";
import Shop from "../components/shop/Shop";
import MainContent from "../components/mainContent/MainContent";
import Blog from "../components/blog/Blog";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <Shop />
      <MainContent />
      <Blog />
      <Footer />
      <Outlet />
    </div>
  );
};

export default HomePage;
