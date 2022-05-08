import React from "react";
import LandingPage from "../../Components/TopPage";
import Video from "../../Components/VideoSection";
import MidSection from "../../Components/MidSection";
import Carousel from "../../Components/Swiper";
import FullPortfoltio from "../../Components/FullPortfolio";

//imges here
import Image from "../../Assets/media/images/home-page/3.jpg"
import Image2 from "../../Assets/media/images/home-page/1.jpg"

const Index = () => {
  return (
    <>
      <LandingPage img={Image} img2={Image2}/>
      <Video />
      <MidSection />
      <Carousel />
      <FullPortfoltio />
    </>
  );
};
export default Index;
