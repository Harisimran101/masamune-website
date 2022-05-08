import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swipper.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import swiper1 from "../../Assets/media/images/home-page/image-square-1.jpg"
import swiper2 from "../../Assets/media/images/home-page/image-square-2.jpg"
import swiper3 from "../../Assets/media/images/home-page/image-square-3.jpg"

export default function App() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
      <div className="swiper-div">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide><img src={swiper1} /></SwiperSlide>
          <SwiperSlide><img src={swiper2} /></SwiperSlide>
          <SwiperSlide><img src={swiper3} /></SwiperSlide>
          <SwiperSlide><img src={swiper1} /></SwiperSlide>
          <SwiperSlide><img src={swiper2} /></SwiperSlide>
          <SwiperSlide><img src={swiper3} /></SwiperSlide>
        </Swiper>
      </div>
        </div>
          </div>
      </div>
    );
  }