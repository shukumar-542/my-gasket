"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  console.log(pathname);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isHome ? "bg-transparent" : "bg-black shadow-md"
      }`}
    >
      <div className="container mx-auto">
      <Link href="/">
          <span className="text-orange-500 text-2xl font-bold">LOGO</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
