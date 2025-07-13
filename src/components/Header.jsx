"use client";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import ToggleTheme from "./ToggleTheme";
import Search from "./Search";

const Header = ({ query, setQuery, setBooks, setPage, setLoading }) => {
  return (
    <header className="flex items-center justify-between">
      <h1
        onClick={() => window.location.reload()}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance cursor-pointer"
      >
        Book Explorer{" "}
      </h1>
      <nav className="flex items-center gap-6">
        {/* <Link
          className="scroll-m-20 text-xl font-semibold hover:text-[#363636] dark:hover:text-[#a2a1a1] pr-[2rem]"
          href={"/about"}
        >
          About
        </Link> */}
        <div className="search">
        <Search
          query={query}
          setQuery={setQuery}
          setBooks={setBooks}
          setPage={setPage}
          setLoading={setLoading}
        />
        </div>
        <ToggleTheme />
      </nav>
    </header>
  );
};

export default Header;
