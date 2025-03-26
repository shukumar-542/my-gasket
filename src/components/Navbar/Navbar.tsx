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

  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-white py-5`}
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
          <span className="text-orange-500 text-2xl font-bold">My Gasket</span>
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
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
          <Link href={"/faqs"}>FAQs</Link>
          <Link href={"/track-order"}>Track Your Order</Link>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <Select
            defaultValue="English"
            style={{ width: 120 }}
            optionLabelProp="label"
            options={options}
          />
          <FaShoppingCart size={22} />
        </div>
      </div>
      {/* Mobile Menu */}
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
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="mt-2 "
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="mt-2"
            href={"/about-us"}
          >
            About Us
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="mt-2"
            href={"/contact-us"}
          >
            Contact Us
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="mt-2"
            href={"/faqs"}
          >
            FAQs
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="mt-2"
            href={"/track-order"}
          >
            Track Your Order
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
