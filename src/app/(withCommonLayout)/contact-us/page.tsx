"use client";
import React from "react";
import img from "../../../assets/image 2.png";
import Image from "next/image";
import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FiPaperclip } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useContactUsMutation } from "@/redux/Api/authApi";

const ContactUsPage = () => {
  const { t } = useTranslation();
  const [conntactUs] = useContactUsMutation()

  const handleSendMessage = (values: any) => {
    console.log("Form values:", values);
    conntactUs(values).unwrap()
      .then((payload) => {
        console.log('fulfilled', payload)
        
      })
      .catch((error) => console.error('rejected', error));
    // Handle form submission logic here
  };
  return (
    <div className="bg-[#ECF5FE]">
      <div className="container mx-auto md:mt-5">
        <div className=" md:py-20">
          <div className="md:flex justify-between items-center -mb-1">
            <div className=" flex  justify-center items-center h-[600px] md:w-1/2 px-10">
              <div>
                <p className="text-5xl md:text-[70px] font-bold text-[#172554]">
                  {t('contactUs')}
                </p>
                <p className="text-3xl mb-10 mt-5 text-[#172554]">
                  {t('leaveQuestionPrompt')}
                </p>
              </div>
            </div>
            <Image src={img} height={800} width={800} alt="img" />
          </div>
          <div className=" w-full border p-10 bg-[#BFDCF7] rounded-md shadow-xl">
            <Form layout="vertical" onFinish={handleSendMessage}>
              <div className="md:flex items-center justify-between gap-10">
                <div className="w-full">
                  <div className="md:flex justify-between items-center gap-5">
                    <Form.Item label={t("firstName")} name={"first_name"} className="w-full">
                      <Input placeholder="Jane" className="w-full h-10" />
                    </Form.Item>
                    <Form.Item label={t("lastName")} name={"last_name"} className="w-full ">
                      <Input placeholder="Copper" className="w-full h-10" />
                    </Form.Item>
                  </div>
                  <div className="md:flex justify-between items-center gap-5">
                    <Form.Item label={t("stateSector")} name={"state_sector"} className="w-full">
                      <Input
                        placeholder="9 N. Valley View Lane "
                        className="w-full h-10"
                      />
                    </Form.Item>
                    <Form.Item label={t("city")} name={"city"} className="w-full">
                      <Input
                        placeholder="Palm Harbor"
                        className="w-full h-10"
                      />
                    </Form.Item>
                  </div>
                  <div className="md:flex items-center gap-5">
                    <Form.Item
                      label={t("clientTypeQuestion")}
                      className="w-full"
                      name={"client_type"}
                    >
                      <Select
                        defaultValue={t("selectOnePlaceholder")}
                        style={{ height: 40 }}
                        className="w-full  h-10"
                        options={[
                          { value: "private", label: "Private Client" },
                          { value: "company", label: "Company" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item label={t("phoneNumber")} name={"phone_number"} className="w-full">
                      <Input
                        placeholder="Like . +8801872999038"
                        className="w-full h-10"
                      />
                    </Form.Item>
                  </div>
                  <Form.Item label={t("emailAddress")} name={"email_address"} className="w-full">
                    <Input
                      placeholder="Like . bilekpetr92@gmail.com"
                      className="w-full h-10"
                    />
                  </Form.Item>

                </div>
                <Form.Item label={t("question")} name={"question"} className="w-full relative">
                  <div className="bg-white p-2 rounded-md">
                    <div className=" flex justify-end ">
                      <FiPaperclip size={20} />
                    </div>

                    <TextArea
                      placeholder="Like. What included in ...."
                      rows={13}
                      className=" border-none border-0"
                      style={{
                        border: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="flex justify-center text-white">
                <button className="bg-[#172554] text-white px-5 cursor-pointer py-2 font-semibold text-[18px] rounded-sm shadow-2xl">
                  {t("sendMessageNow")}
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
