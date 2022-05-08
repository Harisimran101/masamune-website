import React from "react";
import LandingPage from "../../Components/TopPage";
import Magazine from "../../Components/Magazine-Section"


//images
import Image from "../../Assets/media/images/magazine-page/item-cover-1.jpg"


const Index = () => {
  return (
    <>
      <LandingPage img2={Image}/>
      <Magazine />
    </>
  );
};
export default Index;
