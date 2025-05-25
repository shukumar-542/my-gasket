import React from "react";
import img1 from "../../assets/material.png";
import img2 from "../../assets/thikness.png";
import img3 from "../../assets/question.png";
import Image from "next/image";
const OurService = () => {
  return (
    <div className="bg-[#B7C9E2]">
      <div className="container mx-auto py-20 text-[#172554]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="flex flex-col items-center">
            <Image
              className="h-24 w-24"
              src={img1}
              height={400}
              width={400}
              alt="img"
            />
            <p className="text-[30px] font-semibold my-2">Special Materials</p>
            <p className="text-center">
              Choose from a wide range of high-performance materials, including
              rubber, silicone, metal, and composite gaskets, designed for
              durability and efficiency{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="h-24 w-24"
              src={img2}
              height={400}
              width={400}
              alt="img"
            />
            <p className="text-[30px] font-semibold my-2">Special Materials</p>
            <p className="text-center">
              Choose from a wide range of high-performance materials, including
              rubber, silicone, metal, and composite gaskets, designed for
              durability and efficiency{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="h-24 w-24"
              src={img3}
              height={400}
              width={400}
              alt="img"
            />
            <p className="text-[30px] font-semibold my-2">Special Materials</p>
            <p className="text-center">
              Choose from a wide range of high-performance materials, including
              rubber, silicone, metal, and composite gaskets, designed for
              durability and efficiency{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
