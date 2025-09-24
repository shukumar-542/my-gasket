import React from "react";
import img1 from "../../assets/material.png";
import img2 from "../../assets/thikness.png";
import img3 from "../../assets/question.png";
import Image from "next/image";
const OurService = () => {
  return (
    <div className="bg-[#B7C9E2]">
      <div className="xl:container mx-auto py-14 text-[#172554] px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="flex flex-col items-center bg-white py-14 rounded-3xl shadow-2xl">
            <Image
              className="h-24 w-24"
              src={img1}
              height={400}
              width={400}
              alt="img"
            />
            <p className="text-[30px] font-semibold my-2">Special Materials</p>
            <p className="text-center px-6">
              Choose from a wide range of high-performance materials, including
              rubber, silicone, metal, and composite gaskets, designed for
              durability and efficiency{" "}
            </p>
          </div>
          <div className="flex flex-col items-center bg-white py-14 rounded-3xl shadow-2xl">
            <Image
              className="h-24 w-24"
              src={img2}
              height={400}
              width={400}
              alt="img"
            />
            <p className="text-[30px] font-semibold my-2">Custom Thickness</p>
            <p className="text-center px-6">
              Get the exact thickness you need for a perfect fit. Whether you require ultra-thin or heavy-duty thickness, we tailor each product to match your exact requirements.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center bg-white py-14 rounded-3xl shadow-2xl">
            <Image
              className="h-24 w-24"
              src={img3}
              height={400}
              width={400}
              alt="img"
            />
            <p className="text-[30px] font-semibold my-2">Any Further Questions?</p>
            <p className="text-center px-6">
              Have specific requirements or need expert advice? Contact our team, and well guide you through selecting the best materials and customization options for your project.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
