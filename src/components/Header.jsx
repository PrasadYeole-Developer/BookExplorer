"use client";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1
        onClick={() => window.location.reload()}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-6 cursor-pointer"
      >
        Book Explorer{" "}
      </h1>
      <nav className="mt-[-1.5rem] mr-[0.5rem]">
        <Link
          className="scroll-m-20 text-xl font-semibold hover:text-[#363636] dark:hover:text-[#a2a1a1] pr-[2rem]"
          href={"/about"}
        >
          About
        </Link>
        <ToggleTheme />
      </nav>
    </header>
  );
};

export default Header;
