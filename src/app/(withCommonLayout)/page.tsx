import React from "react";
import heroImage from "../../assets/hero.jpeg";
import OurTrastedPartner from "@/components/OurTrastedPartner/OurTrastedPartner";
const page = () => {
  return (
    <>
      <div
        className="min-h-[70vh] "
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      ></div>
      <OurTrastedPartner/>
    </>
  );
};

export default page;
