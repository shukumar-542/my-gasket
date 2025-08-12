"use client";
import React, { useState } from "react";
import hero from "../../../../assets/detailsHero.png";
import img from "../../../../assets/details1.png";
import Image from "next/image";
import details1 from "../../../../assets/details2.png";
import details2 from "../../../../assets/details3.png";
import details3 from "../../../../assets/details4.png";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import ShareExprience from "@/components/ShareExprience/ShareExprience";
import WhatOurClientSay from "@/components/WhatOurClientSay/WhatOurClientSay";
import Button from "@/components/Button/Button";
import FeatureDetails from "@/components/FeatureDetails/FeatureDetails";
import UserReview from "@/components/UserReview/UserReview";
import QuoteModal from "@/components/QuoteModal/QuoteModal";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoMdStarOutline } from "react-icons/io";
import { useParams } from "next/navigation";
import { useMaterialsDetailsQuery } from "@/redux/Api/products";
import { imageUrl } from "@/redux/baseApi";

const ProductDetailsPage = () => {
  const params = useParams();
  const { data: getMeaterialsDetails } = useMaterialsDetailsQuery(params?.id);


  /// Separate features based on their type: pros, cons, and main_features
  const prosFeatures: any[] = [];
  const consFeatures: any[] = [];
  const mainFeatures: any[] = [];

  getMeaterialsDetails?.data?.features?.forEach((feature: any) => {
    if (feature?.feature_type === "pros") prosFeatures.push(feature);
    else if (feature?.feature_type === "cons") consFeatures.push(feature);
    else if (feature?.feature_type === "main_features")
      mainFeatures.push(feature);
  });

  console.log(getMeaterialsDetails?.data?.image);

  return (
    <div>
      <div
        className="pt-[110px] bg-[#BEDBF6]"
      // style={{
      //   backgroundImage: `url(${hero.src})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      >
        <div className="container mx-auto text-[#000624] md:flex items-center mt-10 px-2 md:px-0">
          <div className="w-full">
            <p className="text-[48px] font-extrabold uppercase">{getMeaterialsDetails?.data?.name}</p>
            <p className="text-xl mt-10 max-w-2xl">
              Simplify your event planning with powerful, easy-to-use features
              designed to enhance guest experience and streamline management.
            </p>

            <div className="flex items-center justify-center md:justify-start pb-4 gap-5 text-black mt-10">
              <Link href={"/materials-quote"}>
                <button
                  // onClick={() => setOpenModal(true)}
                  className="bg-[#F97316] px-2 md:px-8 py-3  rounded-sm shadow-2xl cursor-pointer"
                >
                  Get Instant Quote
                </button>
              </Link>
              <button
                className="border border-[#F97316] bg-[#FED7AA] px-8 py-3 rounded-sm shadow-2xl cursor-pointer"
                onClick={() => {
                  if (getMeaterialsDetails?.data?.datasheet) {
                    window.open(
                      `${imageUrl}${getMeaterialsDetails.data.datasheet}`,
                      "_blank"
                    );
                  } else {
                    alert("No datasheet available");
                  }
                }}
              >
                Datasheet
              </button>
            </div>
          </div>
          <div>
            <Image src={`${imageUrl}${getMeaterialsDetails?.data?.image}`} height={600} width={600} className=" w-full pb-20 rounded-md overflow-hidden" alt="img" />
          </div>
        </div>
      </div>

      {/* Feature sections */}

      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-10 py-16">
          <div className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-10">
            <h1 className="text-[#16A34A] text-[38px] font-bold mb-10">PROS</h1>

            {prosFeatures?.map((feature, i) => (
              <div key={i + 1} className="flex items-center gap-2 mb-2">
                <MdCheck size={20} className="text-green-600" />

                <p className="text-xl">{feature?.title}</p>
              </div>
            ))}

          </div>

          <div className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-10">
            <h1 className="text-red-500 text-[38px] font-bold mb-10">CONS</h1>
            {consFeatures?.map((feature, i) => (
              <div key={i + 1} className="flex items-center gap-2 mb-2">
                <RxCross2 size={20} className="text-red-500" />
                <p className="text-xl">{feature?.title}</p>
              </div>
            ))}

          </div>

          <div className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-10">
            <h1 className="text-[#3B82F6] text-[38px] font-bold mb-10">
              MAIN FEATURES
            </h1>

            {mainFeatures?.map((feature, i) => (
              <div key={i + 1} className="flex items-center gap-2 mb-2">
                <IoMdStarOutline size={20} className="text-[#3B82F6]" />
                <p className="text-xl">{feature?.title}</p>
              </div>
            ))}
            
          </div>
        </div>

        {/* main feature details */}

          {getMeaterialsDetails?.data?.info_sections?.map((item : any, index : number) => (
            <FeatureCard
              key={item.id}
              image={`${imageUrl}/${item.image}`}
              title={item.title}
              description={item.description}
              borderColor={index % 2 === 0 ? "#20B7CC" : "#F97316"}
              reverse={index % 2 !== 0}
            />
          ))}

      
        <FeatureDetails />

        {/* Customer review section */}
        <div className="py-20">
          <p className="text-[32px]">Reviews</p>
          <UserReview />
        </div>

        <WhatOurClientSay />
        <div className="flex justify-center py-5">
          <Link href={"/customer-review"}>
            <Button className="inline-block px-8">View More</Button>
          </Link>
        </div>
        <ShareExprience />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
