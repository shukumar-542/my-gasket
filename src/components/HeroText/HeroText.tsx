"use client"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import QuoteModal from "../QuoteModal/QuoteModal";

const HeroText = () => {
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container mx-auto text-white px-4 relative">
      <h1 className="text-[25px] md:text-[52px]  text-white font-bold md:font-extrabold">
        {t("welcomeMessage")}
      </h1>
      <p className="md:text-[18px] max-w-[600px] md:mt-5">
        {t("eventPlanningDescription")}
      </p>
      <button onClick={()=> setOpenModal(true)} className="bg-[#F97316] mt-10 px-6 py-3 shadow-2xl rounded-md text-[18px] cursor-pointer">
        {t("getInstantQuote")}
      </button>
      <QuoteModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      // onContinue={handleModalClose}
      />
    </div>
  );
};

export default HeroText;
