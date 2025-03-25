import React from "react";
import heroImage from "../../assets/hero.jpeg";
import OurTrastedPartner from "@/components/OurTrastedPartner/OurTrastedPartner";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import MaterialWeOffer from "@/components/MaterialWeOffer/MaterialWeOffer";
import HighPrecision from "@/components/HighPrecision/HighPrecision";
import Faqs from "@/components/Faqs/Faqs";
import WhatOurClientSay from "@/components/WhatOurClientSay/WhatOurClientSay";
import CustomGasket from "@/components/CustomGasket/CustomGasket";
const page = () => {
  return (
    <>
      <div
        className="min-h-[70vh] "
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      ></div>
      <HowItWorks/>
      <OurTrastedPartner/>
      <CustomGasket/>
      <MaterialWeOffer/>
      <HighPrecision/>
      <Faqs/>
      {/* <WhatOurClientSay/> */}
    </>
  );
};

export default page;
