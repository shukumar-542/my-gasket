import React from "react";
import heroImage from "../../assets/hero.jpeg";
import OurTrastedPartner from "@/components/OurTrastedPartner/OurTrastedPartner";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import MaterialWeOffer from "@/components/MaterialWeOffer/MaterialWeOffer";
import HighPrecision from "@/components/HighPrecision/HighPrecision";
import Faqs from "@/components/Faqs/Faqs";
import WhatOurClientSay from "@/components/WhatOurClientSay/WhatOurClientSay";
import CustomGasket from "@/components/CustomGasket/CustomGasket";
import OurService from "@/components/OurService/OurService";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Link from "next/link";
const page = () => {
  const faqs = [
    {
      item: "item-1",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
    {
      item: "item-2",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
    {
      item: "item-3",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
    {
      item: "item-4",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
  ];

  return (
    <>
      <div
        className="min-h-[92vh] mt-20 flex flex-col  justify-center relative"
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        {/* Apply background opacity correctly */}
        <div className="absolute inset-0 bg-[#000232] opacity-40"></div>

        <div className="container mx-auto text-white px-2 md:px-0 relative">
          <h1 className="text-[25px] md:text-[52px] text-white font-bold md:font-extrabold">
            WELCOME TO MYGASKET
          </h1>
          <p className="md:text-[18px] md:mt-10">
            Simplify your event planning with powerful, easy-to-use <br />
            features designed to enhance guest experience and <br />
            streamline management.
          </p>
          <button className="bg-[#F97316] mt-10 px-6 py-3 shadow-2xl rounded-md text-[18px] cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
      <HowItWorks />
      <OurTrastedPartner />

      <CustomGasket />
      <MaterialWeOffer />
      <HighPrecision />
      <div>
        <h1 className="text-[30px] md:text-[48px] font-extrabold text-center py-10">
          Most frequently asked questions
        </h1>
        <Faqs faqs={faqs} />
        <div className="flex justify-center items-center">
          <Link
            className="bg-[#20B7CC] px-10 py-3 rounded-sm shadow-2xl"
            href={"/faqs"}
          >
            See All
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <h1 className="text-[25px] md:text-[48px] font-extrabold text-center my-10 uppercase pb-10">
          what our customers say
        </h1>
        <WhatOurClientSay />
      </div>
      <GetInTouch />
      <OurService />
    </>
  );
};

export default page;
