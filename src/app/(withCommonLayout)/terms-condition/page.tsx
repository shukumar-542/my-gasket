"use client";
import React from 'react'
import img from "../../../assets/terms.png";
import Image from "next/image";
import { useGetTermsAndConditionQuery } from '@/redux/Api/infoApi';

const TermsAndConditionPage = () => {
  const {data : getTermsAndCondition} = useGetTermsAndConditionQuery({});
  return (
    <div>
      <div className="mt-20 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={img}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
        Terms Of Condition
        </p>
      </div>
      <div className="container mx-auto ">
        <p className="text-2xl mt-10 font-semibold">Terms and Condition</p>
        {
          getTermsAndCondition?.content ? <div className="text-md leading-7" dangerouslySetInnerHTML={{
            __html : getTermsAndCondition?.content
          }} /> : "No Privacy Policy Available"
        }
      </div>
    </div>
  )
}

export default TermsAndConditionPage