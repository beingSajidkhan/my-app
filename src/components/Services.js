import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section class="py-4 bg-yellow-50 overflow-hidden">
      {/* <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"> */}
      <div class="text-center">
        <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Our Services
        </h2>
        <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
          Describe The Nagar Parishad Services Demo
        </p>
      </div>

      <div class="grid grid-cols-1 mt-8 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-4 ">
       
        <div class="md:p-8 lg:p-14 hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-30 transition-colors duration-300 " style={{ borderRadius: "10" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              fill="currentColor"
              class="bi bi-buildings"
              viewBox="0 0 16 16"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
              <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
            </svg>
          </div>
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Property
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Property Tax It is an annual charge levied by the Government of
            India on property owners.
          </p>
        </div>

        

        <div class="md:p-8 lg:p-14 hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-30 transition-colors duration-300 md:border-l md:border-gray-200">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </div>
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Waste</h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Waste Tax the owner of the landfill pays the tax and then passes the
            cost on to the public through fees for waste reception.
          </p>
        </div>

        <div class="md:p-8 lg:p-14 hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-30 transition-colors duration-300 md:border-l md:border-gray-200">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              fill="currentColor"
              class="bi bi-water"
              viewBox="0 0 16 16"
            >
              <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65" />
            </svg>
          </div>
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Water</h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Water Tax a mandatory registration for starting a business, a tax
            levied by the municipal corporation, and a tax paid by water
            companies:
          </p>
        </div>

        <div class="md:p-8 lg:p-14 hover:bg-green-200 transition-colors duration-300 md:border-t md:border-gray-200">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              fill="currentColor"
              class="bi bi-shop"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
            </svg>
          </div>
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Shop</h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Shop taxes are a type of municipal tax that are levied on shop
            owners
          </p>
        </div>

        <div class="md:p-8 lg:p-14 hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-30 transition-colors duration-300 md:border-l md:border-gray-200 md:border-t addHover">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              fill="currentColor"
              class="bi bi-graph-up-arrow"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Trade</h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Municipal trade taxes are calculated based on a business's trade
            income,
          </p>
        </div>

        {/* hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-300 */}

        <div class="md:p-8 lg:p-14 hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-30 transition-colors duration-300 md:border-l md:border-gray-200 md:border-t">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              fill="currentColor"
              class="bi bi-megaphone-fill"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
            </svg>
          </div>
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Advertisement
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Section 172(2)(h) gives powers to the municipal corporation to levy
            a tax on advertisement not being advertisements published in
            newspapers.
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
