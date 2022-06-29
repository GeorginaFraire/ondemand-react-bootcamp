import React from "react";
import "../App.css"
import Slider from "../Components/Feature-Slider/Slider";
import Grid from "../Components/Feature-Category/Grid";
import FeatureProducts from "../Components/Feature-Product/Feature-Product";

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