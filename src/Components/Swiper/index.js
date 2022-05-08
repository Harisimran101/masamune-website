import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swipper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import swiper1 from "../../Assets/media/images/home-page/image-square-1.jpg";
import swiper2 from "../../Assets/media/images/home-page/image-square-2.jpg";
import swiper3 from "../../Assets/media/images/home-page/image-square-3.jpg";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="swiper-div">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="row">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="col-lg-6">
                      <div data-aos="fade-up" data-aos-duration="3000" className="text">
                        <span>World padel store</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <img src={swiper1} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-lg-6">
                      <div data-aos="fade-up" data-aos-duration="3000" className="text">
                        <span>Padel Data</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <img src={swiper2} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-lg-6">
                      <div data-aos="fade-up" data-aos-duration="3000" className="text">
                        <span>World store</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <img src={swiper3} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-lg-6">
                      <div data-aos="fade-up" data-aos-duration="3000" className="text">
                        <span>store padel</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <img src={swiper1} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
