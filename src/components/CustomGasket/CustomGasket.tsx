"use client"
import React from "react";
import gasket from "../../assets/gasket.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const CustomGasket = () => {
  const {t} = useTranslation()
  return (
    <div className="xl:container mx-auto py-20  px-2 ">
      <div className="md:flex items-center bg-[#F97316] md:gap-20 rounded-4xl">
        <div className="w-full ">
          <Image
            className=" md:h-[670px] h-auto w-full object-cover   rounded-tl-4xl rounded-bl-4xl"
            src={gasket}
            height={100}
            width={800}
            alt="img"
          />
        </div>
        <div className="w-full  px-2 md:px-0 pb-8">
          <p className="font-extrabold text-[25px] md:text-[52px] max-w-[50%] ">
            {t("materialsWeOffer")}
          </p>
          <div className="border-[3px] max-w-[200px] border-[#20B7CC] my-4"></div>
          <p className="text-white max-w-xl pb-10">
           {t("gasketAutomationDescription")}
          </p>

          <Link
            href={"/all-product"}
            className="text-white bg-black px-8 py-3 text-xl rounded-md cursor-pointer"
          >
            {t("discover")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomGasket;
