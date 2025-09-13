"use client"
import React from "react";
import gasket from "../../assets/gasket.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const CustomGasket = () => {
  const {t} = useTranslation()
  return (
    <div className="container mx-auto py-20 ">
      <div className="md:flex items-center bg-[#F97316] md:gap-20 xl:rounded-3xl">
        <div className="w-full ">
          <Image
            className=" md:h-[670px] h-auto w-full object-cover   xl:rounded-tl-3xl xl:rounded-bl-3xl"
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
            className="text-white bg-black px-5 py-2 rounded-sm cursor-pointer"
          >
            {t("discover")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomGasket;
