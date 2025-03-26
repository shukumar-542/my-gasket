"use client"
import React from "react";
import img from "../../../assets/contact.png";
import Image from "next/image";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="md:flex items-center justify-between py-20">
        <div className="w-full">
          <Image src={img} height={600} width={600} alt="img" />
        </div>
        <div className=" w-full border p-10 bg-white shadow-xl">
          <p className="text-[48px] font-bold text-center">Contact us</p>
          <p className="text-center mb-10">Leave your question below, and our team will get back to you asap!</p>
          <Form layout="vertical">
            <div className="md:flex justify-between items-center gap-5">
              <Form.Item label="First Name" className="w-full">
                <Input placeholder="Jane" className="w-full" />
              </Form.Item>
              <Form.Item label="First Name" className="w-full">
                <Input placeholder="Copper" />
              </Form.Item>
            </div>
            <div className="md:flex justify-between items-center gap-5">
              <Form.Item label="State / Sector" className="w-full">
                <Input placeholder="9 N. Valley View Lane " className="w-full" />
              </Form.Item>
              <Form.Item label="City" className="w-full">
                <Input placeholder="Palm Harbor" />
              </Form.Item>
            </div>
            <Form.Item label=" Are you a Private Client or a Company" className="w-full">
                <Input placeholder="Select One" />
              </Form.Item>
            <Form.Item label="Email Address" className="w-full">
                <Input placeholder="Like . bilekpetr92@gmail.com" />
              </Form.Item>
            <Form.Item label="Phone Number" className="w-full">
                <Input placeholder="Like . +8801872999038" />
              </Form.Item>
            <Form.Item label="Question" className="w-full">
                <TextArea placeholder="Like. What included in ...." rows={4} />
              </Form.Item>
              <button className="bg-[#30B9F7] w-full py-2 font-semibold text-[18px] rounded-sm shadow-2xl">Send message now</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
