"use client";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import Search from "@/components/Search";
import React, { useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
      <Header />
      <Search setBooks={setBooks} />
      <BookList books={books} />
    </div>
  );
};

export default Home;
