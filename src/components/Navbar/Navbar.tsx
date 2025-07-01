"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { Select } from "antd";
import english from "../../assets/bratain.png";
import italy from "../../assets/italy.png";
import { HiMenu, HiX } from "react-icons/hi";

import { useTranslation } from "react-i18next";

const options = [
  {
    value: "English",
    label: (
      <div className="flex gap-1 items-center">
        <Image
          className="h-5 w-5"
          src={english}
          height={20}
          width={20}
          alt="English"
        />
        <span>English</span>
      </div>
    ),
  },
  {
    value: "Italy",
    label: (
      <div className="flex gap-1 items-center">
        <Image
          className="h-5 w-5"
          src={italy}
          height={20}
          width={20}
          alt="Italy"
        />
        <span>Italy</span>
      </div>
    ),
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n  , t} = useTranslation();
  const pathName = usePathname();

  // Language change function

  const handleChange = (selected: any) => {
    
     i18n.changeLanguage(selected) 
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-white py-5 shadow-2xl`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="h-12 w-12"
            src={logo}
            height={200}
            width={200}
            alt="logo"
          />
          <span className="text-orange-500 text-2xl font-bold">{t("myGasket")}</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black transition-transform duration-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`transition-transform duration-500 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </span>
        </button>
        <div className=" hidden md:block space-x-6 text-[17px] font-semibold">
          {[
            { name: t("home"), path: "/" },
            { name: t("aboutUs"), path: "/about-us" },
            { name: t("contactUs"), path: "/contact-us" },
            { name: t("faqs"), path: "/faqs" },
            { name: t("trackYourOrder"), path: "/track-order" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-[#EA580C] transition duration-300 pb-1 ${
                pathName === link.path
                  ? "border-b-[3px] border-[#EA580C]"
                  : "border-b-2 border-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-5">
          <Select
            defaultValue="English"
            style={{ width: 120 }}
            optionLabelProp="label"
            onChange={handleChange}
            options={options}
          />
          <Link href={"/cart"}>
          <FaShoppingCart size={22} />
          </Link>
        </div>
      </div>

      {/* Mobile responsive  Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <button
          className="absolute top-5 right-5 text-gray-800"
          onClick={() => setMenuOpen(false)}
        >
          <HiX size={28} />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="h-12 w-12"
            src={logo}
            height={200}
            width={200}
            alt="logo"
          />
          <span className="text-orange-500 text-2xl font-bold">My Gasket</span>
        </Link>

        <div className="flex flex-col">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Contact Us", path: "/contact-us" },
            { name: "FAQs", path: "/faqs" },
            { name: "Track Your Order", path: "/track-order" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(!menuOpen)} 
              className={`hover:text-[#EA580C] transition duration-300 pb-1 ${
                pathName === link.path
                  ? "text-[#EA580C]"
                  : "border-b-2 border-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
