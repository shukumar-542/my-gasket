"use client"
import React, { useState } from "react";
import img from "../../assets/frame.png";
import Link from "next/link";
import { Input, Modal } from "antd";
const ShareExprience = () => {
  const [openModal, setOpenModal] = useState(false)
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
      <p className=" text-[25px] md:text-[38px] font-semibold">
        Share Your Experience with Our Gaskets!
      </p>
      <p className="mt-4 ">
        We value your feedback! Let us know how our gaskets performed in
        durability, sealing, and reliability. <br /> Your review helps us
        improve and assists others in making the right choice.
      </p>

      <div className="mt-16 flex flex-col md:flex-row  justify-center  items-center gap-5">
        <Link href={"/get-review"}>
          <button className="bg-[#F97316] py-2 px-5 rounded-sm cursor-pointer">
            Leave A Review
          </button>
        </Link>
        <button onClick={()=>setOpenModal(true)} className="border cursor-pointer border-[#D97706] rounded-md text-[#EA580C] py-2 px-5">
          Modify Review
        </button>
      </div>
      <Modal centered footer={false} open={openModal} onCancel={()=> setOpenModal(false)}>
        <p className="my-4">Insert Your Order Number</p>
        <Input placeholder="# ID" />
        <p className="text-xs">Check you email!</p>
        <button className="bg-[#F97316] w-full mt-2 rounded-[3px] text-white py-1 cursor-pointer">Continue</button>
      </Modal>
    </div>
  );
};

export default ShareExprience;
