import React from "react";
import img from "../../assets/frame.png";
import us from "../../assets/us.png";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div
    className="mt-20"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundPosition: "center",
        backgroundRepeat : 'no-repeat',
        backgroundSize:'cover'
      }}
    >
        <div className="container mx-auto md:flex justify-between py-20 items-center px-2 md:px-0">
            <div className="text-white w-full">
                <p className="text-[30px] md:text-[48px]"> “Get in Touch with Us“</p>
                <p className="py-2 text-xl">Have questions or need assistance? We're here to help!</p>
                <button className="bg-[#F97316] px-6 py-3 rounded-sm mt-2 text-xl">Message us Now</button>
            </div>
            <div className="w-full  flex justify-center mt-5 md:mt-0 ">
                <Image className="w-[70%]" src={us} height={400} width={400} alt="img" />
            </div>
        </div>
    </div>
  );
};

export default GetInTouch;
