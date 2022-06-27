import React from "react";
import "../../App.css"
import Slider from "../Feature-Slider/Slider";
import Grid from "../Feature-Category/Grid";
import FeatureProducts from "../Feature-Product/Feature-Product";

function HomePage() {
    return (
      <section>
        <div className="container"> 
          <Slider></Slider>
          <hr></hr>
          <Grid></Grid>
          <hr></hr>
          <FeatureProducts></FeatureProducts>
        </div> 
      </section>
    );
  }
  
  export default HomePage;