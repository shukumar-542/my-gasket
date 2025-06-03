"use client";
import React from "react";
import img from "../../../assets/image 2.png";
import Image from "next/image";
import { Form, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FiPaperclip, FiUploadCloud } from "react-icons/fi";

const ContactUsPage = () => {
  return (
    <div className="bg-[#ECF5FE]">
      <div className="container mx-auto md:mt-5">
        <div className=" md:py-20">
          <div className="md:flex justify-between items-center -mb-1">
            <div className=" flex  justify-center items-center h-[600px] md:w-1/2 px-10">
              <div>
                <p className="text-5xl md:text-[70px] font-bold text-[#172554]">
                  Contact us
                </p>
                <p className="text-3xl mb-10 text-[#172554]">
                  Leave your question below, and our team will get back to you
                  asap!
                </p>
              </div>
            </div>
            <Image src={img} height={800} width={800} alt="img" />
          </div>
          <div className=" w-full border p-10 bg-[#BFDCF7] rounded-md shadow-xl">
            <Form layout="vertical">
              <div className="md:flex items-center justify-between gap-10">
                <div className="w-full">
                  <div className="md:flex justify-between items-center gap-5">
                    <Form.Item label="First Name" className="w-full">
                      <Input placeholder="Jane" className="w-full h-10" />
                    </Form.Item>
                    <Form.Item label="First Name" className="w-full ">
                      <Input placeholder="Copper" className="w-full h-10" />
                    </Form.Item>
                  </div>
                  <div className="md:flex justify-between items-center gap-5">
                    <Form.Item label="State / Sector" className="w-full">
                      <Input
                        placeholder="9 N. Valley View Lane "
                        className="w-full h-10"
                      />
                    </Form.Item>
                    <Form.Item label="City" className="w-full">
                      <Input
                        placeholder="Palm Harbor"
                        className="w-full h-10"
                      />
                    </Form.Item>
                  </div>
                  <div className="md:flex items-center gap-5">
                    <Form.Item
                      label=" Are you a Private Client or a Company"
                      className="w-full"
                    >
                      <Select
                        defaultValue={"Select One"}
                        style={{ height: 40 }}
                        className="w-full  h-10"
                        options={[
                          { value: "Private", label: "Private Client" },
                          { value: "Company", label: "Company" },
                        ]}
                      />
                    </Form.Item>
                    {/* <Form.Item
                      label="Upload File or Image"
                      className="w-full "
                      valuePropName="fileList"
                      getValueFromEvent={(e) =>
                        Array.isArray(e) ? e : e?.fileList
                      }
                    >
                      <Upload
                        name="file"
                        listType="picture"
                        beforeUpload={() => false}
                        className="w-full bg-green-400 "
                      >
                        <button className="bg-white border flex items-center gap-2 cursor-pointer w-full border-gray-300 rounded px-8 md:px-[135px] py-2 shadow-sm hover:shadow-md">
                          <FiUploadCloud size={20} />
                          Upload
                        </button>
                      </Upload>
                    </Form.Item> */}
                    <Form.Item label="Phone Number" className="w-full">
                    <Input
                      placeholder="Like . +8801872999038"
                      className="w-full h-10"
                    />
                  </Form.Item>
                  </div>
                  <Form.Item label="Email Address" className="w-full">
                    <Input
                      placeholder="Like . bilekpetr92@gmail.com"
                      className="w-full h-10"
                    />
                  </Form.Item>
                  
                </div>
                <Form.Item label="Question" className="w-full relative">
                  <div className="bg-white p-2 rounded-md">
                    <div className=" flex justify-end ">
                      <FiPaperclip size={20} />
                    </div>

                    <TextArea
                      placeholder="Like. What included in ...."
                      rows={13}
                      className=" border-none border-0"
                      style={{
                        border :'none',
                        resize : 'none'
                      }}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="flex justify-center text-white">
                <button className="bg-[#172554] text-white px-5  py-2 font-semibold text-[18px] rounded-sm shadow-2xl">
                  Send message now
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
