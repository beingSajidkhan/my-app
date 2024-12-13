import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img_1 from "../Photo/slider_1.jpg";
import img_2 from "../Photo/slider_2.jpg";
import img_3 from "../Photo/slider_3.jpg";
import img_4 from "../Photo/slider_4.jpg";
import img_5 from "../Photo/slider_5.jpg";
import img_6 from "../Photo/slider_6.jpg";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageCarousel = () => {
  return (
    <div className="bg-grey-600 text-center text-white bg-yellow-50 overflow-hidden:bg-neutral-600 dark:text-neutral-600">
      <div className="container mx-auto p-10" style={{ maxWidth: "100vw", height: "600px" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Only one image at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // Set the autoplay delay to 2 seconds
            disableOnInteraction: false, // Autoplay continues even if the user interacts with the slider
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            // 1024: { slidesPerView: 1 },
          }}
          style={{ height: "100%" }}
        >
          {/* Slides */}
          {[img_1, img_2, img_3, img_4, img_5, img_6].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                className="w-full h-full object-cover rounded-md shadow-lg"
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;









