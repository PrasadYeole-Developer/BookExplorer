"use client";
import Image from "next/image";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

const BookList = ({ books, page, setPage, loading }) => {
  if (loading)
    return <p className="mt-10 text-lg animate-pulse">Loading books...</p>;
  else if (!books || books.length === 0) {
    return <p className="mt-10">No books found.</p>;
  }
  return (
    <>
      <div className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book, index) => (
          <Link
            href={`/book/${book.edition_key?.[0]}`}
            key={index}
            className="border rounded p-4 bg-black text-white cursor-pointer"
          >
            <Image
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "/no-image.jpg"
              }
              alt={book.title}
              width={200}
              height={300}
              className="w-full h-[18rem] object-contain rounded mb-6"
            />
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-sm text-gray-700">
              Author: {book.author_name?.[0]}
            </p>
            <p className="text-sm text-gray-600">
              First Published: {book.first_publish_year || "N/A"}
            </p>
          </Link>
        ))}
      </div>
      <Pagination className="pt-[2rem]">
        <PaginationContent className="flex gap-[1rem] pr-[1.3rem]">
          <PaginationItem
            className="bg-[#202020] rounded cursor-pointer"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            <PaginationPrevious />
          </PaginationItem>
          <PaginationLink className="border-1 border-[#202020]">
            {page}
          </PaginationLink>
          <PaginationItem
            className="bg-[#202020] rounded cursor-pointer"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BookList;
