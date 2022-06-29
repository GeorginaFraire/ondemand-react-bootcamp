import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <Header
        GoHome={() => {
          setToggle(true);
        }}
      ></Header>
      {toggle ? <HomePage> </HomePage> : <ProductList></ProductList>}
      <div style={{ marginBottom: "80px" }}>
        {toggle && (
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            View all products
          </button>
        )}
      </div>
      <Footer text="Ecommerce created during Wizeline's Academy React Bootcamp"></Footer>
    </div>
  );
}

export default App;
