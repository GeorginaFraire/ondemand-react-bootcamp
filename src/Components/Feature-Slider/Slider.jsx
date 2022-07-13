import React, { useState } from "react";
//import { Banners } from "../../mocks/featured-banners";
import "./Slider.css";
import LoadingSpiner from "../spiner/LoadingSpiner";
import BtnSlider from "./BtnSlider";
import {useFeaturedBanners} from '../../utils/hooks/useFeaturedBanners'

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const {isLoading, data} = useFeaturedBanners();

  const nextSlide = () => {
    if (slideIndex < (data.results.length -1)) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.results.length -1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex >= 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(data.results.length -1);
    }
  };

  return (
    <>
      <div className="slide-container">
        {isLoading ? <LoadingSpiner /> :
        data.results.map((item, itemIndex) => {
          if (itemIndex === slideIndex) {
            return (
              <div key={item.id} className="slide">
                <img
                  src={item.data.main_image.url}
                  alt={item.data.main_image.alt}
                />
              </div>
            );
          }
          return "";
        })}
        <BtnSlider direction="left" movement={prevSlide}></BtnSlider>
        <BtnSlider direction="rigth" movement={nextSlide}></BtnSlider>
      </div>
    </>
  );
}



export default Slider;
