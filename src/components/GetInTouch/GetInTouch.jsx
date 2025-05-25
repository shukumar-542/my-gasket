import React from "react";
// import img from "../../assets/frame.png";
import us from "../../assets/get.png";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div
    className="bg-[#BFDCF7] mt-10"
      // style={{
      //   backgroundImage: `url(${img.src})`,
      //   backgroundPosition: "center",
      //   backgroundRepeat : 'no-repeat',
      //   backgroundSize:'cover'
      // }}
    >
        <div className="container mx-auto md:flex justify-between items-center px-2 md:px-0">
            <div className="text-white w-full">
                <p className="text-[30px] md:text-[48px] text-[#172554]"> “Get in Touch with Us“</p>
                <p className="py-2 text-xl text-[#172554]">Have questions or need assistance? We're here to help!</p>
                <button className="bg-[#30B9F7] px-6 py-3 rounded-sm mt-2 text-xl">Message us Now</button>
            </div>
            <div className="w-full  flex justify-center  md:mt-0 -mb-4 ">
                <Image className="h" src={us} height={100} width={800} alt="img" />
            </div>
        </div>
    </div>
  );
};

export default GetInTouch;
