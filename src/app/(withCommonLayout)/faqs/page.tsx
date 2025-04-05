import Image from "next/image";
import React from "react";
import img from "../../../assets/faq.png";
import Faqs from "@/components/Faqs/Faqs";
const FaqPage = () => {
  const faqs = [
    {
      item: "item-1",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
    {
      item: "item-2",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
    {
      item: "item-3",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
    {
      item: "item-4",
      title: "What materials do you use for manufacturing gaskets?",
      des: " We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.",
    },
  ];
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
          FAQs
        </p>
      </div>
      <h1 className="text-[30px] md:text-[48px] font-extrabold text-center py-10">
        Most frequently asked questions
      </h1>
      <Faqs faqs={faqs} />
    </div>
  );
};

export default FaqPage;
