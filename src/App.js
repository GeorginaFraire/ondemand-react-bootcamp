import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage.jsx";
import ProductList from "./Pages/ProductListPage.jsx";
import Search  from "./Pages/SearchPage.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetailsPage.jsx";

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exac path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/products" element={<ProductList></ProductList>} />
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>} />
        <Route path="/search" element={<Search></Search>} />
      </Routes>
      <Footer text="Ecommerce created during Wizeline's Academy React Bootcamp"></Footer>
    </div>
  );
}

export default App;
