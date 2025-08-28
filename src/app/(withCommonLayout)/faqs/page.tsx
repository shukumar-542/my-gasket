import Image from "next/image";
import React from "react";
import img from "../../../assets/faq.png";
import Faqs from "@/components/Faqs/Faqs";


async function fetchFaqs() {
  try {
    const res = await fetch("http://103.186.20.116:9001/api/auth/faq", {
      next: { revalidate: 60 },
    });

    // console.log("Response status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      // console.error("Error body:", errorText);
      throw new Error("Failed to fetch FAQs");
    }

    return res.json();
  } catch (error) {
    // console.error("Fetch FAQs failed:", error);
    throw error;
  }
}

const FaqPage = async() => {


  const data = await fetchFaqs();


  const faqs = data?.map((item: any) => ({
    item: item.id,
    title: item.question,
    des: item.answer,
  }));
  

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
      {/* <h1 className="text-[30px] md:text-[48px] font-extrabold text-center py-10">
        Most frequently asked questions
      </h1> */}
      <Faqs faqs={faqs} />
    </div>
  );
};

export default FaqPage;
