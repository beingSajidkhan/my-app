import React, { useState } from "react";
import logo from "../Photo/logo.ico";

const Header = () => {
 
  return (
    <>

    

      <header className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" className="inline-flex">
                <span className="sr-only"> Nigam logo </span>
                <img className="w-auto h-16" src={logo} alt="" />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
              <div className="relative group" style={{ zIndex: "400" }}>
                <a
                  href="#"
                  title=""
                  // onClick={showDropdown}
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Home
                </a>
              </div>

              <div className="relative group" style={{ zIndex: "400" }}>
                <a
                  href="#"
                  title=""
                  // onClick={()=>{showDropdown("property")}}
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Property
                </a>
                {/* {show.property &&  */}
                <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                </div>
                {/* } */}
              </div>

              <div className="relative group" style={{ zIndex: "400" }}>
                <a
                  href="#"
                  title=""
                  // onClick={()=>{showDropdown("waste")}}
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Waste
                </a>
                {/* {show.waste &&  */}
                <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                </div>
                {/* } */}
              </div>

              <div className="relative group" style={{ zIndex: "400" }}>
                <a
                  href="#"
                  title=""
                  // onClick={()=>{showDropdown("water")}}
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Water
                </a>
                {/* {show.water && */}
                 <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                </div>
                {/* } */}
              </div>

              <div className="relative group" style={{ zIndex: "400" }}>
                <a
                  href="#"
                  title=""
                  // onClick={()=>{showDropdown("grievances")}}
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Grievances
                </a>
                {/* {show.grievances&&( */}
                  <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                </div> 
                {/* } */}
              </div>

              <div className="relative group">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Know your Taxcollector
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end ml-auto space-x-2 sm:space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
