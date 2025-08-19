"use client"
import React from "react";
import { useTranslation } from "react-i18next";

const HeroText = () => {
    const {t} = useTranslation()
  return (
    <div className="container mx-auto text-white px-2 md:px-0 relative">
      <h1 className="text-[25px] md:text-[52px] text-white font-bold md:font-extrabold">
        {t("welcomeMessage")}
      </h1>
      <p className="md:text-[18px] max-w-[600px] md:mt-5">
        {t("eventPlanningDescription")}
      </p>
      <button className="bg-[#F97316] mt-10 px-6 py-3 shadow-2xl rounded-md text-[18px] cursor-pointer">
        {t("getInstantQuote")}
      </button>
    </div>
  );
};

export default HeroText;
