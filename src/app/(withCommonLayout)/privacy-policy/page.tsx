"use client";
import React from "react";
import img from "../../../assets/priv.png";
import Image from "next/image";
import { useGetPrivacyPolicyQuery } from "@/redux/Api/infoApi";

const PrivacyPolicy = () => {
  const {data : getPrivacyPolicy} = useGetPrivacyPolicyQuery({});
  return (
    <div>
      <div className="mt-8 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={img}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          Privacy Policy
        </p>
      </div>
      <div className="container mx-auto ">
        <p className="text-2xl mt-10 font-semibold">Privacy Policy</p>
        {
          getPrivacyPolicy?.content ? <div className="text-md leading-7" dangerouslySetInnerHTML={{
            __html : getPrivacyPolicy?.content
          }} /> : "No Privacy Policy Available"
        }
      </div>
    </div>
  );
};

export default PrivacyPolicy;
