import React from "react";
import img from "../../assets/Avatar.png";
import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";
import review4 from "../../assets/review4.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const WhatOurClientSay = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[48px] font-extrabold text-center my-10 uppercase pb-10">
        what our customers say
      </h1>

      <div className=" mt-10 bg-white shadow-xl justify-between items-center   p-8 rounded-xl mx-2 md:mx-0">
        <div className="md:flex items-center justify-between gap-5">
          <div>
            <p className="text-[20px] font-semibold">Arlene McCoy</p>
            <div className="flex items-center gap-3 mt-2">
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#C4C4C4" size={22} />
              <p className="text-[#C4C4C4]">4.5(5.0)</p>
            </div>
          </div>
          <p className="text-[#475569]">24 January,2023</p>
        </div>

        <p className="text-[18px] text-[#061C3D] mt-5">
          I was a bit nervous to be buying a secondhand phone from Amazon, but I
          could not be happier with my purchase!! I have a pre-paid data plan so
          I was worried that this phone would not connect with my data plan,
        </p>
        <div className="md:flex items-center gap-5 h-full mt-5">
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review2} height={200} width={200} alt="img"/>
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review4} height={200} width={200} alt="img"/>
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review1} height={200} width={200} alt="img"/>
        </div>
        </div>
      <div className=" mt-10 bg-white shadow-xl justify-between items-center   p-8 rounded-xl mx-2 md:mx-0">
        <div className="md:flex items-center justify-between gap-5">
          <div>
            <p className="text-[20px] font-semibold">Arlene McCoy</p>
            <div className="flex items-center gap-3 mt-2">
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#C4C4C4" size={22} />
              <p className="text-[#C4C4C4]">4.5(5.0)</p>
            </div>
          </div>
          <p className="text-[#475569]">24 January,2023</p>
        </div>

        <p className="text-[18px] text-[#061C3D] mt-5">
          I was a bit nervous to be buying a secondhand phone from Amazon, but I
          could not be happier with my purchase!! I have a pre-paid data plan so
          I was worried that this phone would not connect with my data plan,
        </p>
        <div className="md:flex items-center gap-5 h-full mt-5">
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review2} height={200} width={200} alt="img"/>
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review4} height={200} width={200} alt="img"/>
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review1} height={200} width={200} alt="img"/>
        </div>
        </div>
      <div className=" mt-10 bg-white shadow-xl justify-between items-center   p-8 rounded-xl mx-2 md:mx-0">
        <div className="md:flex items-center justify-between gap-5">
          <div>
            <p className="text-[20px] font-semibold">Arlene McCoy</p>
            <div className="flex items-center gap-3 mt-2">
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#FFD600" size={22} />
              <FaStar color="#C4C4C4" size={22} />
              <p className="text-[#C4C4C4]">4.5(5.0)</p>
            </div>
          </div>
          <p className="text-[#475569]">24 January,2023</p>
        </div>

        <p className="text-[18px] text-[#061C3D] mt-5">
          I was a bit nervous to be buying a secondhand phone from Amazon, but I
          could not be happier with my purchase!! I have a pre-paid data plan so
          I was worried that this phone would not connect with my data plan,
        </p>
        <div className="md:flex items-center gap-5 h-full mt-5">
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review2} height={200} width={200} alt="img"/>
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review4} height={200} width={200} alt="img"/>
          <Image className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl" src={review1} height={200} width={200} alt="img"/>
        </div>
        </div>
    </div>
  );
};

export default WhatOurClientSay;
