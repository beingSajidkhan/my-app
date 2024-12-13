
import React from 'react';
import link_1 from '../Photo/link_1.jpg'
import link_2 from '../Photo/link_2.jpg'
import link_3 from  '../Photo/link_3.jpg'


const Importantlink = () => {

    return (

        <div className="important-links-box border-4 bg-white p-2 my-3 mx-auto rounded-lg">
            {/* Header */}
            <div className="bg-orange-700 text-black text-center py-3 text-xl font-bold">
                Important Links
            </div>

            {/* Links Section */}
            <div className="important-links-section">
                <div className="container mx-auto py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Link 1 */}
                        <a
                            target="_blank"
                            href="https://www.india.gov.in/"
                            rel="noopener noreferrer"
                            className="relative rounded p-4 flex items-center justify-between bg-cover bg-center border-2 border-gray-300 text-black text-decoration-none hover:shadow-md"
                            style={{
                                // backgroundImage: "url('/assets/img/dash/background.jpg')",
                                // height: "120px",
                            }}
                        >
                            <img
                                src={link_1}
                                alt="Govt. Of India"
                                className="w-16 h-16"
                            />
                            <h6 className="text-sm font-semibold">Govt. Of India</h6>
                        </a>

                        {/* Link 2 */}
                        <a
                            target="_blank"
                            href="https://www.eci.gov.in/"
                            rel="noopener noreferrer"
                            className="relative rounded p-4 flex items-center justify-between bg-cover bg-center border-2 border-gray-300 text-black text-decoration-none hover:shadow-md"
                            style={{
                                backgroundImage: "url('/assets/img/dash/background.jpg')",
                                height: "120px",
                            }}
                        >
                            <img
                                src={link_2}
                                alt="ECI"
                                className="w-16 h-16"
                            />
                            <h6 className="text-sm font-semibold">ECI</h6>
                        </a>

                        {/* Link 3 */}
                        <a
                            target="_blank"
                            href="https://www.ceir.gov.in/Home/index.jsp"
                            rel="noopener noreferrer"
                            className="relative rounded p-4 flex items-center justify-between bg-cover bg-center border-2 border-gray-300 text-black text-decoration-none hover:shadow-md"
                            style={{
                                backgroundImage: "url('/assets/img/dash/background.jpg')",
                                height: "120px",
                            }}
                        >
                            <img
                                src={link_1}
                                alt="CEIR"
                                className="w-16 h-16"
                            />
                            <h6 className="text-sm font-semibold">CEIR</h6>
                        </a>

                        {/* Link 4 */}
                        <a
                            target="_blank"
                            href="https://state.bihar.gov.in/main/CitizenHome.html"
                            rel="noopener noreferrer"
                            className="relative rounded p-4 flex items-center justify-between bg-cover bg-center border-2 border-gray-300 text-black text-decoration-none hover:shadow-md"
                            style={{
                                backgroundImage: "url('/assets/img/dash/background.jpg')",
                                height: "120px",
                            }}
                        >
                            <img
                                src={link_3}
                                alt="Govt. Of Bihar"
                                className="w-20 h-20"
                            />
                            <h6 className="text-sm font-semibold">Govt. Of Bihar</h6>
                        </a>

                        {/* Link 5 */}
                        <a
                            target="_blank"
                            href="https://cm.bihar.gov.in/users/home.aspx"
                            rel="noopener noreferrer"
                            className="relative rounded p-4 flex items-center justify-between bg-cover bg-center border-2 border-gray-300 text-black text-decoration-none hover:shadow-md"
                            style={{
                                backgroundImage: "url('/assets/img/dash/background.jpg')",
                                height: "120px",
                            }}
                        >
                            <img
                                src={link_3}
                                alt="CM Bihar"
                                className="w-20 h-20"
                            />
                            <h6 className="text-sm font-semibold">CM Bihar</h6>
                        </a>

                        {/* Link 6 */}
                        <a
                            target="_blank"
                            href="https://state.bihar.gov.in/urban/CitizenHome.html"
                            rel="noopener noreferrer"
                            className="relative rounded p-4 flex items-center justify-between bg-cover bg-center border-2 border-gray-300 text-black text-decoration-none hover:shadow-md"
                            style={{
                                backgroundImage: "url('/assets/img/dash/background.jpg')",
                                height: "120px",
                            }}
                        >
                            <img
                                src={link_3}
                                alt="UDHD"
                                className="w-20 h-20"
                            />
                            <h6 className="text-sm font-semibold">UDHD</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    );
    
};

export default Importantlink