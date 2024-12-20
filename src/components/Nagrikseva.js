import React from "react";
// import { motion } from "framer-motion";

const Nagrikseva = () => {
  return (
    <section className=" py-12 bg-yellow-50 overflow-hidden sm:py-12 lg:py-5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col items-center">
          
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj"></p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              NAGRIKSEVA
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
            </div>

            <div className=" relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {[
                {
                  title: "Property Tax",
                  content:
                    "Demo नगर पंचायत के नागरिकों के जीवन स्तर को उठाने में सभी नागरिकों को सम्पतिकर का भुगतान आवश्यक है। वित्तिय वर्ष के 1 अप्रैल से 30 जून तक भुगतान पर नागरिकों को 5% की छुट एवं वर्षा-जल संयोजन पर 5% की अतिरिक्त छुट का प्रावधान है। जबकि वित्तिय वर्ष के 1 अक्टूबर से 1.5% प्रतिशत प्रतिमाह दण्ड का प्रावधान है। अतः नागरिकों से अनुरोध है कि वे अपना संपत्तिकर ससमय भुगतान कर हमें बेहतर सेवा देने के योग्य बनाए। नागरिक अपने भुगतान संबंधि जानकारी पोर्टल से प्राप्त कर सकते है तथा वे ऑनलाईन भी भुगतान कर सकते है.",
                },
                {
                  title: "TradeLicence",
                  content:
                    "  बिहार नगरपालिका अधिनियम की धारा 342,129 (ख) एंव (ग) तथा धारा-421 के अंतर्गत Demo नगर पंचायत क्षेत्रान्तर्गत गैर आवासीय प्रयोग के लिए परिवारों के उपयोग के लिए अनुज्ञप्ति आवश्यक है। बिना अनुज्ञप्ति व्यावसायिक प्रयोजन प्रतिबंधित हैं। अतः सभी नागरिकों से अनुरोध किया जाता है कि बिना अनुज्ञप्ति व्यावसायिक कार्य नहीं करेंगें। व्यावसायिक अनुज्ञप्ति प्राप्त करने के लिए नागरिक ऑन लाईन पोर्टल का उपयोग कर सकते हैं, अथवा विशेष जानकारी के लिए कार्यालय से संपर्क स्थापित कर सकते हैं।",
                },
                {
                  title: "Building Permission",
                  content:
                    "  दैनिक प्रकोप एवं भूकंप आदि से नागरिकों को होने वाले नुकसान से बचाने के लिए बिहार नगरपालिका अधिनियम 2007 की धारा 321 एवं Bihar Urban Planning & Development Act 2012 की धारा 81(2) (W) के अंतर्गत शहरी क्षेत्र में सभी नागरिकों के लिए आवश्यक है कि वे अपने भवन का निर्माण Bihar Building Bye Laws-2014 के अनुरूप करेंगें। क्षेत्र में अंतर्गत बिना स्वीकृत नक्शा के निर्माण को प्रतिबंधित किया गया है। इस संबंध में संपूर्ण जानकारी एवं आलेख कार्यालय में संपर्क कर प्राप्त कर सकते है।",
                },
                {
                  title: "Day-NULM",
                  content:
                    "Demo नगर पंचायत शहर के नागरिकों के जीवन स्तर को ऊपर उठाने के साथ-साथ शहर के आम नागरिकों को महत्वपूर्ण जानकारी और सेवाएं प्रदान करके शहर की गुणवत्ता में सुधार करने का प्रयास करता है। हमारा लक्ष्य Demo नगर पंचायत की गौरवशाली, शक्तिशाली और आकर्षक छवि को बनाए रखना है।",
                },
                {
                  title: "Rent & Lease",
                  content:
                    " Demo नगर पंचायत शहर के नागरिकों के जीवन स्तर को ऊपर उठाने के साथ-साथ शहर के आम नागरिकों को महत्वपूर्ण जानकारी और सेवाएं प्रदान करके शहर की गुणवत्ता में सुधार करने का प्रयास करता है। हमारा लक्ष्य Demo नगर पंचायत की गौरवशाली, शक्तिशाली और आकर्षक छवि को बनाए रखना है।",
                },
                {
                  title: "Birth & Death",
                  content:
                    " Demo नगर पंचायत शहर के नागरिकों के जीवन स्तर को ऊपर उठाने के साथ-साथ शहर के आम नागरिकों को महत्वपूर्ण जानकारी और सेवाएं प्रदान करके शहर की गुणवत्ता में सुधार करने का प्रयास करता है। हमारा लक्ष्य Demo नगर पंचायत की गौरवशाली, शक्तिशाली और आकर्षक छवि को बनाए रखना है।",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden shadow-xl transition-transform transform duration-500 hover:scale-105 hover:bg-green-200 focus:bg-green-200 active:bg-green-300"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-green lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex justify-center">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {item.title}
                        </p>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {item.content}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nagrikseva;
