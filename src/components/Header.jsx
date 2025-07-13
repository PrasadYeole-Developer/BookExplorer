"use client";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import ToggleTheme from "./ToggleTheme";
import Search from "./Search";

const Header = ({ query, setQuery, setBooks, setPage, setLoading }) => {
  return (
    <header className="flex items-start sm:items-center justify-between">
      <div className="flex flex-col gap-5 sm:flex-row heading-container justify-between w-full">
        <h1
          onClick={() => window.location.reload()}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance cursor-pointer"
        >
          Book Explorer{" "}
        </h1>
        <nav className="flex items-center pr-6">
          <div className="search">
            <Search
              query={query}
              setQuery={setQuery}
              setBooks={setBooks}
              setPage={setPage}
              setLoading={setLoading}
            />
          </div>
        </nav>
      </div>
      <ToggleTheme />
    </header>
  );
};

export default Header;
