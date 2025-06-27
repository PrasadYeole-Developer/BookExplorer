import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-6">
        Book Explorer{" "}
      </h1>
      <Link
        className="scroll-m-20 mb-5 text-2xl font-semibold tracking-tight hover:underline underline-offset-2"
        href={"/about"}
      >
        About
      </Link>
    </header>
  );
};

export default Header;
