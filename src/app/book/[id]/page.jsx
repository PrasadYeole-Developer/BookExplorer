import axiosInstance from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const languageMap = {
  "/languages/eng": "English",
  "/languages/hin": "Hindi",
  "/languages/fre": "French",
};

const BookDetails = async ({ params }) => {
  const { id } = params;
  let book = null;

  try {
    const res = await axiosInstance.get(`/books/${id}.json`);
    book = res.data;
  } catch (error) {
    console.error("Error fetching book:", error);
    return notFound();
  }

  if (!book?.title) return notFound();

  const description =
    typeof book.description === "string"
      ? book.description
      : book.description?.value ||
        (typeof book.notes === "string"
          ? book.notes
          : book.notes?.value || "No description available.");

  const languageNames =
    book.languages?.map(
      (lang) => languageMap[lang.key] || lang.key.replace("/languages/", "")
    ) || [];

  return (
    <section className="w-full min-h-screen bg-white text-[#1d1d1d] dark:bg-[#1d1d1d] dark:text-white select-none">
      <div className="min-h-screen bg-white text-[#1d1d1d] dark:bg-[#1d1d1d] dark:text-white px-4 py-6 md:px-10 lg:px-20 mx-auto max-w-5xl">
        <Link
          className="hidden lg:block text-5xl absolute top-5 left-20 hover:text-gray-700 dark:hover:text-gray-200"
          href="/"
        >
          ➥
        </Link>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {book.title}
        </h1>

        {book.covers?.[0] && (
          <div className="flex justify-center mb-6 bg-white text-[#1d1d1d] dark:bg-[#1d1d1d] dark:text-white">
            <Image
              src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
              alt={book.title}
              width={300}
              height={400}
              className="rounded shadow-md"
            />
          </div>
        )}

        <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-800 dark:text-gray-400 mb-6">
          <p>
            <strong className="text-black dark:text-white">Published:</strong>{" "}
            {book.publish_date || "N/A"}
          </p>
          <p>
            <strong className="text-black dark:text-white">Pages:</strong>{" "}
            {book.number_of_pages || "N/A"}
          </p>
          <p>
            <strong className="text-black dark:text-white">Languages:</strong>{" "}
            {languageNames.join(", ") || "N/A"}
          </p>

          {book.contributions?.length > 0 && (
            <p>
              <strong className="text-black dark:text-white">Contributors:</strong>{" "}
              {book.contributions.join(", ")}
            </p>
          )}
        </div>

        {book.subjects?.length > 0 && (
          <div className="mb-4">
            <strong className="bg-white text-[#1d1d1d] dark:bg-[#1d1d1d] dark:text-white block mb-2 ">Subjects:</strong>
            <div className="flex flex-wrap gap-2">
              {book.subjects.map((subj, i) => (
                <span
                  key={i}
                  className="bg-gray-500 dark:bg-gray-800 px-3 py-1 text-sm rounded-full text-white"
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookDetails;
