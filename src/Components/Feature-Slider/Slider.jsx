import React, { useState } from "react";
import { Banners } from "../../mocks/featured-banners";
import "../../styles/css/Slider.css";

import BtnSlider from "./BtnSlider";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = Banners.results.length - 1;

  const nextSlide = () => {
    if (slideIndex < length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex >= 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(length);
    }
  };

  return (
    <>
      <div className="slide-container">
        {Banners.results.map((item, itemIndex) => {
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
