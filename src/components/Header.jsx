"use client";
import Link from "next/link";
import React from "react";
import gsap from "gsap";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-6">
        Book Explorer{" "}
      </h1>
      <nav className="flex gap-9 mt-[-2rem] mr-[0.5rem]">
        <Link
          className="scroll-m-20 text-lg font-semibold tracking-tight hover:text-[#6e6e6e]"
          href={"/about"}
        >
          Home
        </Link>
        <Link
          className="scroll-m-20 text-lg font-semibold tracking-tight hover:text-[#6e6e6e]"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="scroll-m-20 text-lg font-semibold tracking-tight hover:text-[#6e6e6e]"
          href={"/about"}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
