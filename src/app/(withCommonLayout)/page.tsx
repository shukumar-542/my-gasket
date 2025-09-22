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
import { StepCaurosel } from "@/components/StepCaurosel/StepCaurosel";



async function fetchFaqs() {
  try {
    const res = await fetch("http://103.186.20.115:11000/api/auth/faq", {
      next: { revalidate: 60 },
    });


    if (!res.ok) {
      const errorText = await res.text();
      throw new Error("Failed to fetch FAQs");
    }

    return res.json();
  } catch (error) {
    // console.error("Fetch FAQs failed:", error);
    throw error;
  }
}


async function fetchProductReviews() {
  try {
    const res = await fetch("http://103.186.20.116:9001/api/budget/total_reviews/", {
      next: { revalidate: 60 }, 
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Product Reviews");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Product Reviews failed:", error);
    return [];
  }
}


const page = async() => {

   const data = await fetchFaqs();
   const reviews = await fetchProductReviews();

  const faqs = data?.slice(0, 3)?.map((item: any) => ({
    item: item.id,
    title: item.question,
    des: item.answer,
  }));
  

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
      {/* <HowItWorks /> */}
      <StepCaurosel/>
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

        <WhatOurClientSay reviews={reviews?.reviews?.results?.slice(0,3)} />
        <div className="flex justify-center items-center">

        </div>
      </div>
      <GetInTouch />
      <StepCaurosel/>
      <OurService />
    </>
  );
};

export default page;
