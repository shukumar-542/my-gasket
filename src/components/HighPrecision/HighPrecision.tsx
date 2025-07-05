"use client"
import React from "react";
import Image from "next/image";
import bg from "../../assets/high.png";
import img1 from "../../assets/p.png";
import img2 from "../../assets/review2.png";
import { useTranslation } from "react-i18next";


const HighPrecision = () => {
  const {t} = useTranslation()
  return (
    <div
    className="bg-[#BEDBF6]"
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundRepeat: "no-repeat",
      //   // backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   width: "100%",
      // }}
    >
      <div className="container mx-auto">
        <div className={`md:flex items-center gap-20 py-10`}>
          <div className="w-full">
            <p className="text-[32px] font-extrabold pb-5">
               {t('customGasketsMadeEasy')}
            </p>
            <div className="border-3 max-w-[25%]  border-[#F97316]"></div>
            <p className="pt-5 text-[#475569] text-[18px]">
              {t('gasketAutomationDescription')}
            </p>
          </div>
          <div className="w-full ">
            <Image
              src={img1}
              height={600}
              width={600}
              className="w-full h-[550px] object-cover rounded-sm"
              alt="img"
            />
          </div>
        </div>
        <div className={`md:flex items-center gap-20 py-10`}>
          <div className="w-full ">
            <Image
              src={img2}
              height={800}
              width={800}
              className="w-full h-[550px] object-cover rounded-sm"
              alt="img"
            />
          </div>

          <div className="w-full">
            <p className="text-[32px] font-extrabold pb-5">
            {t('highPrecisionCutting')}
            </p>
            <div className="border-3 max-w-[25%]  border-[#F97316]"></div>
            <p className="pt-5 text-[#475569] text-[18px]">
              {t("instantQuoteBenefitDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPrecision;
