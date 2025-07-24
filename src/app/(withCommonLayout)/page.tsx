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
import HeroText from "@/components/HeroText/HeroText";
const page = async() => {
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

        <HeroText />
      </div>
      <HowItWorks />
      {/* <OurTrastedPartner /> */}

      <CustomGasket />
      {/* <MaterialWeOffer /> */}

      <HighPrecision />
      <div>

        <Faqs faqs={faqs} />
        <div className="flex justify-center">
          <Link
            className="bg-[#F97316] px-10 py-3 rounded-sm text-white shadow-2xl"
            href={"/faqs"}
          >
            See ALL
          </Link>
        </div>


      </div>
      <div className="pt-10">

        <WhatOurClientSay />
        <div className="flex justify-center items-center">

        </div>
      </div>
      <GetInTouch />
      <OurService />
    </>
  );
};

export default page;
