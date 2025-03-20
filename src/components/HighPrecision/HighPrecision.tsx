import React from "react";
import img from "../../assets/custom.png";
import Image from "next/image";
const HighPrecision = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gradient-to-r from-[#F7F7F7] via-[#F7D8C3] to-[#F7F7F7] p-10  md:flex gap-20 items-center">
        <div className="">
          <Image
            src={img}
            height={400}
            width={400}
            className="h-full  w-[1000px]" 
            alt="img"
          />
        </div>
        <div className=" w-full h-full">
          <h2 className="text-[32px] font-bold">HIGH PRECISION CUTTING</h2>
          <p className="text-[20px] mt-2 max-w-2xl">
            Our advanced software calculates your gasket's cost in real time,
            providing an accurate quote instantly. No waiting, no hassle—just
            fast, efficient, and reliable service.
          </p> 
        </div>
      </div>
    </div>
  );
};

export default HighPrecision;
