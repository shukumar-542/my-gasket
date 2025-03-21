import React from "react";
import heroImage from "../../assets/hero.jpeg";
import OurTrastedPartner from "@/components/OurTrastedPartner/OurTrastedPartner";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import CustomGsket from "@/components/CustomGsket/CustomGsket";
import MaterialWeOffer from "@/components/MaterialWeOffer/MaterialWeOffer";
import HighPrecision from "@/components/HighPrecision/HighPrecision";
import Faqs from "@/components/Faqs/Faqs";
import WhatOurClientSay from "@/components/WhatOurClientSay/WhatOurClientSay";
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
      <OurTrastedPartner/>
      <HowItWorks/>
      <CustomGsket/>
      <MaterialWeOffer/>
      <HighPrecision/>
      <Faqs/>
      <WhatOurClientSay/>
    </>
  );
};

export default page;
