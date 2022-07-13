import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { EffectCoverflow, Pagination  } from "swiper";
import { array } from "prop-types";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import './styles.css'
SwiperCore.use([EffectCoverflow, Pagination ]);

export default function Carousel({ images = [] }) {

  return (
  
    <>
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.image.url} alt={image.image.alt} className="image-rezise" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

Carousel.propTypes = {
  images: array,
};
