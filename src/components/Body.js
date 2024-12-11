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




const Body = () => {
  return (
    <div>


      <Slider />
      <NigamCard />
      <Services />
      <Importantlink />
      <Nagrikseva />
      <About />


    </div>


  );
};

export default Body;
