import React, { useState } from "react";
import "./App.css";
// import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  const [toggle, setToggle] = useState(true);
  
  return ( 
    <div className="App">
      <Header GoHome={()=> {setToggle(true)}}></Header>
      {toggle ? <HomePage> </HomePage> : <ProductList></ProductList>}  
      <button onClick={()=> {setToggle(!toggle)}}>{toggle ? "View all products" : 'Home Page'}</button>
      {/* <Footer text="Ecommerce created during Wizeline's Academy React Bootcamp"></Footer> */}
    </div>
  );
}

export default App;
