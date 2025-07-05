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
  const { id } = await params;
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
    <div className="min-h-screen bg-black text-white p-6">
      <Link
        href="/"
        className="text-xl underline underline-offset-2 mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-5xl font-bold mb-4">{book.title}</h1>

      {book.covers?.[0] && (
        <Image
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
          width={300}
          height={400}
          className="mb-6 rounded"
        />
      )}

      <p className="text-lg mb-6">{description}</p>

      <div className="text-md text-gray-300 space-y-2">
        <p>
          <strong>Published:</strong> {book.publish_date || "N/A"}
        </p>
        <p>
          <strong>Pages:</strong> {book.number_of_pages || "N/A"}
        </p>
        <p>
          <strong>Languages:</strong> {languageNames.join(", ") || "N/A"}
        </p>
        {book.contributions?.length > 0 && (
          <p>
            <strong>Contributors:</strong> {book.contributions.join(", ")}
          </p>
        )}
        {book.subjects?.length > 0 && (
          <p>
            <strong>Subjects:</strong>{" "}
            {book.subjects.map((subj, i) => (
              <span
                key={i}
                className="bg-gray-800 text-white px-2 py-1 rounded mr-2 inline-block text-sm"
              >
                {subj}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
