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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchBooks = async () => {
      setLoading(true);
      const res = await getBooks(query, page);
      setBooks(res);
      setLoading(false);
    };

    fetchBooks();
  }, [page]);

  return (
    <div className="w-full min-h-screen bg-white text-[#0A0A0A] dark:bg-[#0A0A0A] dark:text-white p-8 select-none">
      <Header />
      <Search
        setBooks={setBooks}
        page={page}
        setPage={setPage}
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
      />
      <BookList books={books} page={page} setPage={setPage} loading={loading} />
    </div>
  );
};

export default Home;
