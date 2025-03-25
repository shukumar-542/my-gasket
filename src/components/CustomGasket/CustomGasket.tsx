import React from "react";
import gasket from "../../assets/gasket.png";
import Image from "next/image";
const CustomGasket = () => {
  return (
    <div className="container mx-auto py-20 ">
      <div className="md:flex items-center bg-[#F97316] gap-20 rounded-md ">
      <div className="w-full ">
            <Image
              className=" h-[350px] md:h-[670px]  rounded-md"
              src={gasket}
              height={100}
              width={800}
              alt="img"
            />
          </div>
        <div className="w-full  px-2 md:px-0 ">
            <p className="font-extrabold text-[30px] md:text-[50px] ">Custom Gaskets</p>
            <p className="font-extrabold text-[50px]">Made Easy</p>
            <div className="border-[3px] max-w-[200px] border-[#20B7CC] my-4"></div>
            <p className="text-white max-w-xl pb-10">Get the perfect gasket for your needs with our precision manufacturing and automated
            quoting system. Simply upload your design, choose materials, and get an instant price!</p>
        </div>
      </div>
    </div>
  );
};

export default CustomGasket;
