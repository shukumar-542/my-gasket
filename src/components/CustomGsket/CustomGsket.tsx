import React from "react";
import gasket from "../../assets/custom.png";
import Image from "next/image";
const CustomGsket = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-gradient-to-r from-[#F7F7F7] via-[#BCE5EB] to-[#F7F7F7] p-10  md:flex gap-20 items-center">
        <div className="">
          <Image
            src={gasket}
            height={400}
            width={400}
            className="h-full  w-[1000px]"
            alt="img"
          />
        </div>
        <div className=" w-full h-full">
          <h2 className="text-[32px] font-bold">CUSTOM GASKETS, MADE EASY</h2>
          <p className="text-[20px] mt-2 max-w-2xl">
            Get the perfect gasket for your needs with our precision
            manufacturing and automated quoting system. Simply upload your
            design, choose materials, and get an instant price!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomGsket;
