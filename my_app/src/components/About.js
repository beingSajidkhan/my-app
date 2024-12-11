import React from "react";
import about from "../Photo/about_1.jpg";


const About = () => {
    return (
        <>
            <section>
                <div class="relative">
                    <header class="absolute inset-x-0 top-0 z-10 w-full">
                        <div class="px-4 mx-auto sm:px-6 lg:px-8">
                            <div class="flex items-center justify-between h-16 lg:h-20">
                                <div class="flex-shrink-0">
                                    <a href="#" title="" class="flex">
                                        {/* <img class="w-auto h-8" src="#" alt="Logo" /> */}
                                    </a>
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
                                       
                                    </p>
                                </div>
                            </div>

                            {/* Image Area */}
                            <div class="relative w-full overflow-hidden lg:order-1 h-[500px] lg:h-[550px] lg:w-9/12">
                                <div class="absolute inset-0 ">
                                    <img
                                        class="object-cover w-full h-full"
                                        src={about}
                                        alt="about"
                                    />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div class="absolute bottom-0 left-0">
                                    <div class="p-4 sm:p-6 lg:p-8" style={{paddingLeft:"8rem"}}>
                                        <div class="flex items-center">
                                            <svg
                                                class="w-10 h-10 text-orange-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <h2 class="font-bold text-white text-7xl ml-2.5">365 Day's</h2>
                                        </div>
                                        <p class="max-w-xs mt-1.5 text-xl text-white">
                                            About Nagar Parishad
                                        </p>
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
