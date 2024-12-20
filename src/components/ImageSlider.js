import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { Splide as SplideComponent, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

import img_1 from "../Photo/slider_1.jpg";
import img_2 from "../Photo/slider_2.jpg";
import img_3 from "../Photo/slider_3.jpg";
import img_4 from "../Photo/slider_4.jpg";
import img_5 from "../Photo/slider_5.jpg";
import img_6 from "../Photo/slider_6.jpg";

const ImageSlider = () => {
  useEffect(() => {
    // Initialize Splide sliders after the component mounts
    const mainSlider = new Splide('#main-slider', {
      type       : 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows     : false,
      cover      : true,
    });

    const thumbnailSlider = new Splide('#thumbnail-slider', {
      rewind          : true,
      fixedWidth      : 104,
      fixedHeight     : 58,
      isNavigation    : true,
      gap             : 10,
      focus           : 'center',
      pagination      : false,
      cover           : true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    mainSlider.sync(thumbnailSlider);
    mainSlider.mount();
    thumbnailSlider.mount();
  }, []);

  return (
    <div className="bg-grey-600 text-center text-white bg-yellow-50 overflow-hidden:bg-neutral-600 dark:text-neutral-600">
      <div className="container mx-auto p-10" style={{ maxWidth: "100vw", height: "600px" }}>
        {/* Main Slider */}
        <SplideComponent id="main-slider" style={{ height: '100%' }}>
          {[img_1, img_2, img_3, img_4, img_5, img_6].map((image, index) => (
            <SplideSlide key={index}>
              <img
                src={image}
                className="w-full h-full object-cover rounded-md shadow-lg"
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </SplideComponent>

        {/* Thumbnail Slider */}
        <SplideComponent id="thumbnail-slider" style={{ marginTop: '20px' }}>
          {[img_1, img_2, img_3, img_4, img_5, img_6].map((image, index) => (
            <SplideSlide key={index}>
              <img
                src={image}
                className="w-full h-full object-cover rounded-md"
                alt={`Thumbnail ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </SplideComponent>
      </div>
    </div>
  );
};

export default ImageSlider;
