"use client";
import React, { useState } from "react";
import { Steps } from "antd";
import { CheckCircleOutlined, CarOutlined, GiftOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Optional: if you're not using Tailwind to reset styles

const { Step } = Steps;

const TrackOrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1); // 0 = Order Placed, 1 = Dispatched, 2 = Delivered

  return (
    <div className="mt-22 py-10 container mx-auto px-4 md:px-0">
      <p className="text-4xl font-medium text-center text-[#A1A29F] pt-10">
        Order Tracking
      </p>

      <p className="text-center text-3xl ">Order Status :  <span className="text-green-600">Dispatched</span></p>
      <p className="text-center pt- ">Estimate Delivery Date : 17 Jan - 19 Jan </p>

      <div className="max-w-3xl mx-auto my-10">
        <Steps
          current={currentStep}
          labelPlacement="vertical"
          responsive
          className="custom-steps"
        >
          <Step
            title="Order Placed"
            description="14 Jan."
            icon={<CheckCircleOutlined />}
          />
          <Step
            title="Dispatched"
            description="14 Jan."
            icon={<CarOutlined />}
          />
          <Step
            title="Delivered"
            description="17 Jan. - 19 Jan."
            icon={<GiftOutlined />}
          />
        </Steps>
      </div>
    </div>
  );
};

export default TrackOrderPage;
