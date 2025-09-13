"use client"
import React from "react";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { imageUrl } from "@/redux/baseApi";
const WhatOurClientSay = (reviews: any) => {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-2 md:px-0">
      <h1 className="text-[25px] md:text-[52px] font-extrabold text-center my-10 uppercase pb-10">
        {t("whatCustomersSay")}
      </h1>

      {
        reviews?.reviews?.map((review: any, index: number) => {

          const rating = review?.star_rating || 0;
          const fullStars = Math.floor(rating);
          const hasHalfStar = rating % 1 >= 0.5;
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
          return (
            <div key={index} className=" bg-white  justify-between items-center   p-8 rounded-xl mx-2 md:mx-0 mb-5" style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}>
              <div className="md:flex items-center justify-between gap-5">
                <div>
                  <p className="text-[20px] font-semibold">{review?.customer_name}</p>
                  {/* Dynamic stars */}
                  <div className="flex items-center gap-3 mt-2">
                    {[...Array(fullStars)].map((_, i) => (

                      <FaStar key={`full-${i}`} color="#FFD600" size={22} />
                    ))}
                    {hasHalfStar && <FaStarHalfAlt color="#FFD600" size={22} />}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar key={`empty-${i}`} color="#C4C4C4" size={22} />
                    ))}

                    <p className="text-[#C4C4C4] ml-2">
                      {rating} ( 5 )
                    </p>
                  </div>
                </div>
                {/* <p className="text-[#475569]">24 January,2023</p> */}
              </div>

              <p className="text-[18px] text-[#061C3D] mt-5">
               {review?.comment}
              </p>
              <div className="md:flex items-center gap-5 h-full mt-5 ">

                {
                  review?.product_images?.map((image: any, idx: number) => (
                      <Image
                        key={idx}
                        className="h-[180px] w-full md:w-[180px] bg-white shadow-2xl object-cover"
                        src={`${imageUrl}${image?.image}`}
                        height={200}
                        width={200}
                        alt="img"
                      />
                    ))
                }
               
               
              </div>
            </div>
          );
        })

      }



    </div>
  );
};

export default WhatOurClientSay;
