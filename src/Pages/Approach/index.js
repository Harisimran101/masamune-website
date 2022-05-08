import React from "react";
import LandingPage from "../../Components/TopPage";
import Approach from "../../Components/Approach_section"


//images
import Image from "../../Assets/media/images/careers-page/cores/1.jpg"
import Image2 from "../../Assets/media/images/careers-page/cores/5.jpg"


const Index = () => {
  return (
    <>
      <LandingPage img2={Image} img={Image2}/>
      <Approach/>
    </>
  );
};
export default Index;
