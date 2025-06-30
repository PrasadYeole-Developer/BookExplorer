"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import getBooks from "@/lib/api";

const Search = ({ setBooks }) => {
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    if (!query.trim()) return;
    const res = await getBooks(query, 1);
    setBooks(res);
    console.log(res);
    
  };
  return (
    <div className="search w-full mt-5 flex items-center gap-6 justify-between">
      <input
        type="text"
        className="w-full p-2 border-1 rounded"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        variant="outline"
        className="bg-[#111] rounded cursor-pointer border-none p-6 text-md hover:text-white hover:bg-gray-900"
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
