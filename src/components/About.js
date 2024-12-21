import React from "react";
import about from "../Photo/about.jpg";

const About = () => {
    
    return (
        <>
            <section>
                <div class="relative">
                    <header class="absolute inset-x-0 top-0 z-10 w-full">
                        <div class="px-4 mx-auto sm:px-6 lg:px-8">
                            <div class="flex items-center justify-between h-16 lg:h-20">
                                <div class="flex-shrink-0">
                                </div>
                                <button
                                    type="button"
                                    class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                                >
                                    <svg
                                        class="block w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>

                    <section class="bg-yellow-50 ">
                        <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[500px]">
                            {/* Main Content Area */}
                            <div class="relative flex items-center justify-center w-full lg:order-2 lg:w-8/12">
                                <div class="relative px-8  pb-20 text-center sm:px-8 md:px-28 2x3:px-36 lg:py-5 lg:text-left">
                                    <h1 class="text-2xl font-bold text-black sm:text-4xl xl:text-7x3">
                                        ABOUT NAGAR PARISHAD
                                    </h1>
                                    <p class="mt-10 text-xl text-black">
                                        A Nagar Panchayat is a form of urban local body (ULB) that governs
                                        a town in transition from rural to urban. It is also known as a
                                        town panchayat or Notified Area Council (NAC).
                                        A Nagar Panchayat is a form of urban local body (ULB) that governs
                                        a town in transition from rural to urban. It is also known as a
                                        town panchayat or Notified Area Council (NAC).
                                        A Nagar Panchayat is a form of urban local body (ULB) that governs
                                        a town in transition from rural to urban. It is also known as a
                                        town panchayat or Notified Area Council (NAC).
                                        A Nagar Panchayat is a form of urban local body (ULB) that governs
                                        a town in transition from rural to urban. It is also known as a
                                        town panchayat or Notified Area Council (NAC).
                                    </p>
                                </div>
                            </div>

                            {/* Image Area */}
                            <div class="relative w-full lg:order-2 h-[500px] lg:h-[490px] lg:w-9/12">
                                <div class="absolute inset-0 ">
                                    <img
                                        class="object-cover w-70px h-full"
                                        src={about}
                                        alt="about"
                                    />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div class="absolute bottom-0 left-0">
                                    <div class="p-4 sm:p-6 lg:p-8" style={{ paddingLeft: "8rem" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default About
