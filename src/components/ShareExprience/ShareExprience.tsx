import React from "react";
import img from "../../assets/frame.png";
const ShareExprience = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="container mx-auto my-10 md:rounded-md text-white px-10 py-16 text-center "
    >
      <p className=" text-[25px] md:text-[38px] font-semibold">Share Your Experience with Our Gaskets!</p>
      <p className="mt-4 ">We value your feedback! Let us know how our gaskets performed in durability, sealing, and reliability. <br /> Your review helps us improve and assists others in making the right choice.</p>

      <div className="mt-16 flex flex-col md:flex-row  justify-center  items-center gap-5">
        <button className="bg-[#F97316] py-2 px-5 rounded-md">Leave A Review</button>
        <button className="border border-[#D97706] rounded-md text-[#EA580C] py-2 px-5">Modify Review</button>
      </div>
    </div>
  );
};

export default ShareExprience;
