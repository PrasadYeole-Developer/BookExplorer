"use client";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import Search from "@/components/Search";
import getBooks from "@/lib/api";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query.trim()) return;

    const fetchBooks = async () => {
      const res = await getBooks(query, page);
      setBooks(res);
    };

    fetchBooks();
  }, [page]);

  return (
    <div className="w-full min-h-screen bg-black text-white p-8 select-none">
      <Header />
      <Search
        setBooks={setBooks}
        page={page}
        setPage={setPage}
        query={query}
        setQuery={setQuery}
      />
      <BookList books={books} page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
