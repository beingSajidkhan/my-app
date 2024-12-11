import React from 'react';
import Eo from '../Photo/Eo.jpg';

const NigamCard = () => {
    return (
        <>
            <section class="py-12 bg-yellow-50 overflow-hidden sm:py-16 lg:py-8">
                <div class="px-6 mx-auto sm:px-8 lg:px-8 max-w-7x2">
                    <div class="max-w-md mx-auto text-center">
                        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">OFFICIALS</h2>
                        <p class="mt-4 text-base font-normal leading-7 text-gray-600">Domo Nagar Panchyat OFFICIALS</p>
                    </div>

                    <div class="grid grid-cols-3 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
                        <div class="relative group">
                            <div class="overflow-hidden aspect-w-1 aspect-h-1">
                                <img class="object-cover w-full h-full rounded-full transition-all duration-300 group-hover:scale-125" src={Eo} alt="Eo" />
                            </div>

                            <div class="flex items-start justify-center mt-4 space-x-4">
                                <div>
                                    <h3 class="text-xs font-bold text-gray-1000 sm:text-sm md:text-base" >
                                        <a href="" title="">
                                            Chairman Lorem
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                   </h3>
                                </div>
                            </div>
                        </div>

                        <div class="relative group">
                            <div class="overflow-hidden aspect-w-1 aspect-h-1">
                                <img class="object-cover w-full h-full rounded-full transition-all duration-300 group-hover:scale-125" src={Eo} alt="Eo" />
                            </div>
                            <div class="flex items-start justify-center mt-4 space-x-4">
                                <div>
                                    <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <a href="#" title="">
                                            Executive Officer Lorem
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                </div>

                            </div>
                        </div>

                        <div class="relative group">
                            <div class="overflow-hidden aspect-w-1 aspect-h-1">
                                <img class="object-cover w-full h-full rounded-full transition-all duration-300 group-hover:scale-125" src={Eo} alt="Eo" />
                            </div>
                            <div class="flex items-start justify-center mt-4 space-x-4">
                                <div>
                                    <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <a href="#" title="">
                                            Vicechairman Lorem
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default NigamCard