

import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Feature-Slider/Slider";
import Grid from "./Grid";
import FeatureProducts from "./Feature-Product";

function HomePage() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Slider></Slider>
          <hr></hr>
          <Grid></Grid>
          <hr></hr>
          <FeatureProducts></FeatureProducts>
        </div>
        <Footer text="Ecommerce created during Wizeline's Academy React Bootcamp"></Footer>
      </div>
    );
  }
  
  export default HomePage;