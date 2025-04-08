import React from "react";
import Image from "next/image";
import bg from "../../assets/high.png";
import img1 from "../../assets/p.png";
import img2 from "../../assets/review2.png";


const HighPrecision = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="container mx-auto">
        <div className={`md:flex items-center gap-20 py-10`}>
          <div className="w-full">
            <p className="text-[32px] font-extrabold pb-5">
              Custom Gaskets, Made Easy
            </p>
            <div className="border-3 max-w-[25%]  border-[#F97316]"></div>
            <p className="pt-5 text-[#475569] text-[18px]">
              Get the perfect gasket for your needs with our precision
              manufacturing and automated quoting system. Simply upload your
              design, choose materials, and get an instant price!
            </p>
          </div>
          <div className="w-full ">
            <Image
              src={img1}
              height={600}
              width={600}
              className="w-full h-[550px] object-cover rounded-sm"
              alt="img"
            />
          </div>
        </div>
        <div className={`md:flex items-center gap-20 py-10`}>
          <div className="w-full ">
            <Image
              src={img2}
              height={800}
              width={800}
              className="w-full h-[550px] object-cover rounded-sm"
              alt="img"
            />
          </div>

          <div className="w-full">
            <p className="text-[32px] font-extrabold pb-5">
            HIGH PRECISION CUTTING
            </p>
            <div className="border-3 max-w-[25%]  border-[#F97316]"></div>
            <p className="pt-5 text-[#475569] text-[18px]">
              Our advanced software calculates your gasket's cost in real time, providing an accurate quote instantly. No waiting, no hassle—just fast,
              efficient, and reliable service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPrecision;
