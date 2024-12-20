import React from "react";
import Slider from "./Slider";
import NigamCard from "./NigamCard";
import Services from "./Services";
import Importantlink from "./Importantlink";
import Nagrikseva from "./Nagrikseva";
import About from "./About";
// import pic_1 from "../Photo/pic_1.jpg";
import Eo from "../Photo/Eo.jpg";
import Photo from "../Photo/about.jpg";
import ImageSlider from "./ImageSlider";
import CardHD from "./Card";


const Body = () => {
  return (
    <div>

      <Slider />
      {/* <ImageSlider/> */}
      <NigamCard />
      <div>
      <CardHD/>
      </div>
      {/* <Services /> */}
      {/* <Importantlink /> */}
      {/* <Nagrikseva /> */}
      <About />
      
    </div>

  );
};

export default Body;
