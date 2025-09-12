import React from "react";
import img from "../../assets/Footers.png";
import { MdPhoneInTalk } from "react-icons/md";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkdin from "../../assets/behanch.png";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      className="text-white py-12 md:py-32 pt-10 pl-10 md:pl-0 bg-black"
      // style={{
      //   backgroundImage: `url(${img.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      // }}
    >
      <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* First columns */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              height={400}
              width={400}
              className="h-14 w-14"
              alt="img"
            />

            <p className="text-[32px] font-bold text-[#EA580C]">my gasket</p>
          </div>
          <p className="text-[16px]">
            Sed ut perspiciatis undmnis is iste <br /> natus error sit amet
            voluptatem <br />
            totam rem aperiam
          </p>
          <p className="flex  items-center gap-2">
            <span>
              <MdPhoneInTalk color="#3758F9" />
            </span>
            <span>+012 (345) 678 99</span>
          </p>
        </div>

        <div className="space-y-5">
          <p className="text-2xl font-semibold">Resources</p>
          <p className="">Home</p>
          <p className="text-xl">About Us</p>
          <p className="">Contact Us</p>
          <p className="">FAQS</p>
        </div>
        <div className="space-y-5">
          <p className="text-2xl font-semibold">Legal & Policies</p>
          <p className=""> <Link href={"/privacy-policy"}>Privacy Policy</Link></p>
          <p className=""><Link href={"/terms-condition"}>Terms Of Conditions</Link></p>
          
         
        </div>
        <div className="space-y-5">
          <p className="text-2xl font-semibold">Follow Us On</p>
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-5">
            <Image
              src={facebook}
              height={200}
              width={200}
              className="h-10 w-10"
              alt="img"
            />
            <Image
              src={twitter}
              height={200}
              width={200}
              className="h-10 w-10"
              alt="img"
            />
            <Image
              src={youtube}
              height={200}
              width={200}
              className="h-10 w-10"
              alt="img"
            />
            <Image
              src={linkdin}
              height={200}
              width={200}
              className="h-10 w-10"
              alt="img"
            />
          </div>
          <p className="">© 2023 Invitte.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
