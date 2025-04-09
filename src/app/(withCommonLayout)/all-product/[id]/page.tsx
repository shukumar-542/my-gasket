"use client"
import React, { useState } from "react";
import hero from "../../../../assets/detailsHero.png";
import img from "../../../../assets/details1.png";
import Image from "next/image";
import arrowGreen from "../../../../assets/arrow-green.png";
import arrowBlue from "../../../../assets/arrow-blue.png";
import arrowRed from "../../../../assets/arrow-red.png";
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

const ProductDetailsPage = () => {
  const [openModal , setOpenModal] = useState(false)

  return (
    <div>
      <div
        className="pt-[110px]"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto text-white md:flex items-center mt-10 px-2 md:px-0">
          <div className="w-full">
            <p className="text-[48px] font-extrabold uppercase">Gomma PARA</p>
            <p className="text-xl mt-10 max-w-2xl">
              Simplify your event planning with powerful, easy-to-use features
              designed to  enhance guest experience and streamline
              management.
            </p>

            <div className="flex items-center justify-center md:justify-start pb-4 gap-5 text-black mt-10">
              <button onClick={()=> setOpenModal(true)} className="bg-[#F97316] px-2 md:px-8 py-3  rounded-sm shadow-2xl cursor-pointer">
                Get Instant Quote
              </button>
              <button className=" border border-[#F97316] bg-[#FED7AA]  px-8 py-3 rounded-sm shadow-2xl cursor-pointer">
                Datasheet
              </button>
            </div>
          </div>
          <div>
            <Image src={img} height={600} width={600} alt="img" />
          </div>
        </div>
      </div>

      {/* Feature sections */}

      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 py-16">
          <div className="w-full">
            <h1 className="text-[#16A34A] text-[38px] font-bold mb-10">PROS</h1>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={arrowGreen}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">High-Temperature Resistance</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={arrowGreen}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">Superior Sealing Performance</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={arrowGreen}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">Long-Lasting & Durable</p>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-red-500 text-[38px] font-bold mb-10">CONS</h1>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={arrowRed}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">High-Temperature Resistance</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={arrowRed}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">Superior Sealing Performance</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={arrowRed}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">Long-Lasting & Durable</p>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-[#3B82F6] text-[38px] font-bold mb-10">
              MAIN FEATURES
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={arrowBlue}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">High-Temperature Resistance</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={arrowBlue}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">Superior Sealing Performance</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={arrowBlue}
                height={600}
                width={600}
                className="h-6 w-6"
                alt="img"
              />
              <p className="text-xl">Long-Lasting & Durable</p>
            </div>
          </div>
        </div>

        {/* main feature details */}

        <FeatureCard
          image={details1}
          title={" High-Temperature Resistance"}
          description="Designed to endure extreme heat without compromising performance, making it ideal for automotive engines, industrial machinery, and high-pressure applications."
          borderColor="#20B7CC"
        />
        <FeatureCard
          image={details2}
          title={" High-Temperature Resistance"}
          description="Designed to endure extreme heat without compromising performance, making it ideal for automotive engines, industrial machinery, and high-pressure applications."
          borderColor="#F97316"
          reverse={true}
        />
        <FeatureCard
          image={details3}
          title={" High-Temperature Resistance"}
          description="Designed to endure extreme heat without compromising performance, making it ideal for automotive engines, industrial machinery, and high-pressure applications."
          borderColor="#20B7CC"
        />

        <FeatureDetails/>
        <UserReview/>

        <WhatOurClientSay />
        <div className="flex justify-center py-5">
          <Button className="inline-block px-8">View More</Button>
        </div>
        <ShareExprience />
     
      </div>
      <QuoteModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default ProductDetailsPage;
