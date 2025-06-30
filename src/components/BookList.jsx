"use client";
import Image from "next/image";
import React from "react";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <p className="mt-10">No books found.</p>;
  }
  return (
    <div className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <div
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
            className="w-full h-[18rem] object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{book.title}</h2>
          <p className="text-sm text-gray-700">
            Author: {book.author_name?.[0]}
          </p>
          <p className="text-sm text-gray-600">
            First Published: {book.first_publish_year || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
