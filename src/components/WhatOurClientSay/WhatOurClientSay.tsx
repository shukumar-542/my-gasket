import React from "react";
import img from "../../assets/Avatar.png";
import img1 from "../../assets/Avatar2.png";
import img3 from "../../assets/Avatar3.png";
import img4 from "../../assets/meterial.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Button from "../Button/Button";
const WhatOurClientSay = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[48px] font-extrabold text-center my-10 uppercase pb-10">
        what our customers say
      </h1>

      <div className="grid grid-cols-12 mt-10 bg-white shadow-2xl justify-between items-center shadow-blue-200  p-10 rounded-2xl max-w-5xl mx-auto">
        <div className="col-span-8">
          <div className="flex items-center gap-5">
            <Image
              src={img}
              height={200}
              width={200}
              className="w-20"
              alt="img"
            />
            <div>
              <p className="text-[20px] text-[#061C3D]">Arlene McCoy</p>
              <div className="flex items-center gap-3 mt-2">
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#C4C4C4" size={22} />
                <p className="text-[#C4C4C4]">4.5(5.0)</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] text-[#061C3D] mt-5">
            “ Great quality and timely delivery. We have been working with them
            for over a year, and they consistently meet our needs. Highly
            recommended! ”
          </p>
          <div className="flex items-center gap-3 mt-5 text-xl">
            <SlCalender />
            <p>02/02/2025 </p>
          </div>
        </div>
        <div className="relative col-span-4 h-full w-full cursor-pointer group overflow-hidden rounded-lg">
          {/* Image */}
          <Image
            src={img4}
            height={400}
            width={400}
            className="w-full h-full object-cover"
            alt="img"
          />

          {/* Overlay and Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity duration-300">
            <button className="bg-orange-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10 bg-white shadow-2xl justify-between items-center shadow-blue-200  p-10 rounded-2xl max-w-5xl mx-auto">
        <div className="col-span-8">
          <div className="flex items-center gap-5">
            <Image
              src={img1}
              height={200}
              width={200}
              className="w-20"
              alt="img"
            />
            <div>
              <p className="text-[20px] text-[#061C3D]">Arlene McCoy</p>
              <div className="flex items-center gap-3 mt-2">
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#C4C4C4" size={22} />
                <p className="text-[#C4C4C4]">4.5(5.0)</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] text-[#061C3D] mt-5">
            “ Great quality and timely delivery. We have been working with them
            for over a year, and they consistently meet our needs. Highly
            recommended! ”
          </p>
          <div className="flex items-center gap-3 mt-5 text-xl">
            <SlCalender />
            <p>02/02/2025 </p>
          </div>
        </div>
        <div className="relative col-span-4 h-full w-full cursor-pointer group overflow-hidden rounded-lg">
          {/* Image */}
          <Image
            src={img4}
            height={400}
            width={400}
            className="w-full h-full object-cover"
            alt="img"
          />

          {/* Overlay and Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity duration-300">
            <button className="bg-orange-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10 bg-white shadow-2xl justify-between items-center shadow-blue-200  p-10 rounded-2xl max-w-5xl mx-auto">
        <div className="col-span-8">
          <div className="flex items-center gap-5">
            <Image
              src={img3}
              height={200}
              width={200}
              className="w-20"
              alt="img"
            />
            <div>
              <p className="text-[20px] text-[#061C3D]">Arlene McCoy</p>
              <div className="flex items-center gap-3 mt-2">
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#FFD600" size={22} />
                <FaStar color="#C4C4C4" size={22} />
                <p className="text-[#C4C4C4]">4.5(5.0)</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] text-[#061C3D] mt-5">
            “ Great quality and timely delivery. We have been working with them
            for over a year, and they consistently meet our needs. Highly
            recommended! ”
          </p>
          <div className="flex items-center gap-3 mt-5 text-xl">
            <SlCalender />
            <p>02/02/2025 </p>
          </div>
        </div>
        <div className="relative col-span-4 h-full w-full cursor-pointer group overflow-hidden rounded-lg">
          {/* Image */}
          <Image
            src={img4}
            height={400}
            width={400}
            className="w-full h-full object-cover"
            alt="img"
          />

          {/* Overlay and Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity duration-300">
            <button className="bg-orange-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientSay;
