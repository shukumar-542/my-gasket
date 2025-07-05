"use client"
import React from "react";
import about from "../../../assets/about.png";
import about1 from "../../../assets/about1.png";
import about2 from "../../../assets/about2.png";
import about3 from "../../../assets/about3.png";
import Image from "next/image";
import { FaMedal, FaQuoteLeft, FaRecycle, FaRobot } from "react-icons/fa";
import { BsChatSquareQuote } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const AboutUsPage = () => {
  const {t} =  useTranslation();
  return (
    <div className=" mt-20 ">
      <div className="mt-8 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={about}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          {t("aboutUs")}
        </p>
      </div>

      <div className="container mx-auto p-2">
        {/* Section One */}
        <div className="md:flex items-center justify-baseline mt-20">
          <div className="w-full">
            <Image
              className=" h-[350px] md:h-[670px]"
              src={about1}
              height={100}
              width={700}
              alt="img"
            />
          </div>
          <div className="">
            <p className="text-[30px] md:text-[45px] font-bold">
              {t("highQualityMaterials")}
            </p>
            <div className="border-[3px] max-w-[200px] border-[#F97316] my-4"></div>
            <p className="md:text-[18px] font">
              {t("materialsDescription")}
            </p>
          </div>
        </div>
        {/* Section Two */}

        <div className="md:flex items-center justify-between my-30">
          <div className="">
            <p className="text-[30px] md:text-[45px] font-bold">
              {t("customizationPrecisionEngineering")}
            </p>
            <div className="border-[3px] max-w-[200px] border-[#F97316] my-4"></div>
            <p className="md:text-[18px] font">
              {t("customProjectDescription")}
            </p>
          </div>
          <div className="w-full  flex justify-end">
            <Image
              className="h-[350px] md:h-[670px]"
              src={about2}
              height={100}
              width={700}
              alt="img"
            />
          </div>
        </div>

        {/* Section Three */}

        <div className="md:flex items-center justify-baseline mt-20">
          <div className="w-full">
            <Image
              className=" h-[350px] md:h-[670px]"
              src={about3}
              height={100}
              width={700}
              alt="img"
            />
          </div>
          <div className="">
            <p className="text-[30px] md:text-[45px] font-bold">
              {t("reliableServiceFastDelivery")}
            </p>
            <div className="border-[3px] max-w-[200px] border-[#F97316] my-4"></div>
            <p className="md:text-[18px] font">
              {t("serviceDeliveryDescription")}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="shadow-sm hover:shadow-md bg-[#172554]  shadow-[#172554] text-white rounded-lg p-6 font-medium text-4xl h-40 text-center flex flex-col justify-center">
          20+
          <span className="font-normal text-base mt-2">
            {t('yearsExperienceGasketField')}
          </span>
        </div>

        {/* Box 2 */}
        <div className="text-white text-center bg-[#EA580C] shadow-sm shadow-[#EA580C] hover:shadow-md rounded-lg p-6 font-semibold text-lg flex flex-col justify-center">
          <span className="text-center text-4xl flex justify-center items-center gap-2">
            {" "}
            4.0 industry <FaRobot  />
          </span>
          <span className="font-normal text-base mt-2">
            {t('industry40Description')}
          </span>
        </div>

        {/* Box 3 */}
        <div className="shadow-sm hover:shadow-md bg-[#172554]  shadow-[#172554] text-white h-32 text-4xl   rounded-lg p-6 font-medium flex items-center justify-center">
          10+ {t('materials')}
        </div>

        {/* Box 4 */}
        <div className="bg-[#EA580C] shadow-sm shadow-[#EA580C] hover:shadow-md text-white h-52 rounded-lg p-6 font-medium text-center flex flex-col justify-center">
          <div className="text-4xl mb-2">🕒</div>
          <span className="text-center text-4xl">48 hours</span>
          <span className="font-normal text-base">
            {t('standardOrdersItaly')}
          </span>
        </div>

        {/* Box 5 */}
        <div
          className=" shadow-xl hover:shadow-2xl  rounded-lg p-6 font-semibold text-lg flex flex-col justify-center"
          style={{
            background: `linear-gradient(to bottom right, green 0%, white 50%, white 60%, red 100%)`,
          }}
        >
          <span className="text-center text-4xl font-medium">{t("madeInItaly")}</span>
          <span className="font-normal text-base text-center mt-2">
            {t('gasketOriginDescription')}
          </span>
        </div>

        {/* Box 6 */}
        <div className=" text-white  bg-[#EA580C] shadow-sm shadow-[#EA580C] hover:shadow-md sm:mt-5 md:-mt-10 h-40 rounded-lg p-6 font-normal  text-sm flex flex-col justify-center text-center">
          <b className="text-center text-4xl font-medium">{t("noMinimumOrdersShort")}</b>
          <span className="mt-1 font-normal text-base">
             {t('noMinimumOrders')}
          </span>
        </div>

        {/* Box 7 */}
        <div className="shadow-sm hover:shadow-md bg-[#172554]  shadow-[#172554] text-white rounded-lg p-6 font-normal text-sm flex flex-col justify-center">
          <p className="text-center text-4xl font-medium flex items-center justify-center mb-5 gap-2">
            {" "}
            {t('noWaste')}<FaRecycle  />
          </p>
          <span className="mt-1 font-normal text-base text-center">
           {t("wasteReductionDescription")}
          </span>
        </div>

        <div className="flex-col md:flex gap-5">
          {/* Box 8 */}
          <div className="shadow-sm hover:shadow-md bg-[#172554]  shadow-[#172554] text-white rounded-lg p-6 font-normal text-sm flex flex-col justify-center">
            <b className="text-center text-4xl flex items-center font-medium justify-center">
              {t('highQuality')}
              <FaMedal  />
            </b>
            <span className="mt-1 font-normal text-base text-center">
              {t("qualityAssuranceDescription")}
            </span>
          </div>

          {/* Box 9 */}
          <div className="bg-[#EA580C] shadow-sm shadow-[#EA580C] hover:shadow-md text-white rounded-lg p-6 mt-2 font-normal text-sm flex flex-col justify-center">
            <b className="text-center text-4xl font-medium flex items-center justify-center gap-2">{t('ultraFastReplies')}<FaTruckFast /></b>
            <span className="mt-1 font-normal text-base text-center">
              {t('replyTimePromise')}
            </span>
          </div>
        </div>

        {/* Box 10 */}
        <div className="shadow-sm hover:shadow-md bg-[#172554]  shadow-[#172554] text-white md:-mt-20 mt-1  rounded-lg p-6 font-bold text-lg text-center flex flex-col justify-center">
          <span className="text-center text-4xl flex justify-center font-medium  items-center gap-2">{t('getInstantQuote')}<BsChatSquareQuote color="" /></span>
          <span className="font-normal text-base mt-2">
           {t("easyCustomGasketOrder")}
          </span>
        </div>
      </div>

      <div className="container mx-auto   p-6  ">
        <div className="bg-[#ECF5FE] md:flex p-10 items-center justify-between  rounded-md ">
          <div>
            <span className="text-4xl font-semibold">{t('getGasketNow')}</span>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              corporis.
            </p>
          </div>
          <div className="text-white">
            <button className="bg-[#172554] px-10 py-5 cursor-pointer rounded-sm">
               {t('buyNow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
