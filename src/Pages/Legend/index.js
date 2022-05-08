import React from "react";
import LandingPage from "../../Components/TopPage";
import LegendSection from "../../Components/LegendSection"


//images
import Image from "../../Assets/media/images/services-page/1.jpg"
import Image2 from "../../Assets/media/images/services-page/image-cover-2.jpg"

const Index = () => {
  return (
    <>
      <LandingPage img={Image} img2={Image2}/>
      <LegendSection />
    </>
  );
};
export default Index;
