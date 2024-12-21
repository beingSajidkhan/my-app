import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Gallery = () => {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop", // Enables infinite looping
      perPage: 4,
      gap: "2rem",
      autoplay: true, // Enables automatic sliding
      interval: 2000, // Slide duration: 2 seconds
      speed: 500, // Transition speed: 0.5 seconds
      pauseOnHover: false, // Prevent pausing on hover
      pauseOnFocus: false, // Prevent pausing on focus
      breakpoints: {
        640: {
          perPage: 2,
          gap: ".7rem",
          height: "6rem",
        },
        480: {
          perPage: 1,
          gap: ".7rem",
          height: "6rem",
        },
      },
    });

    splide.mount(); // Mount the Splide instance

    return () => {
      splide.destroy(); // Cleanup on unmount
    };
  }, []);
 
  return (
    
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-center text-white">
      <div className="container p-6">
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                  className="w-full rounded-md shadow-lg transition-transform duration-500 hover:scale-105"
                  alt="Slide 1"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                  className="w-full rounded-md shadow-lg transition-transform duration-500 hover:scale-105"
                  alt="Slide 2"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                  className="w-full rounded-md shadow-lg transition-transform duration-500 hover:scale-105"
                  alt="Slide 3"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                  className="w-full rounded-md shadow-lg transition-transform duration-500 hover:scale-105"
                  alt="Slide 4"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © Copyright © 2023. All rights reserved:
        <a className="dark:text-neutral-400" href="https://tw-elements.com/">
          Design & Develop by Bira Ventures Pvt. Ltd.
        </a>
        
      </div> */}
    </section>

    
  );
};

export default Gallery;
