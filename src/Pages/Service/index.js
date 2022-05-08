import React from "react";
import LandingPage from "../../Components/TopPage";
import Intro from "../../Components/Intro";
import ImgSection from "../../Components/ServiceImg"


//images
import Image from "../../Assets/media/images/services-page/1.jpg"
import Image2 from "../../Assets/media/images/services-page/image-cover-2.jpg"

const Index = () => {
  return (
    <>
      <LandingPage img={Image} img2={Image2}/>
      <Intro />
      <ImgSection />
    </>
  );
};
export default Index;
