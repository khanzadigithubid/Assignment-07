import React from "react";

export interface ServerDataType {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export default async function ServerPage() {

  const response = await fetch("https://simple-books-api.glitch.me/books/", {
    cache: "no-store",
  });

  const data: ServerDataType[] = await response.json();

  return (
    <div className="min-h-screen container flex flex-col items-center justify-center w-full mx-auto">
      <h1 className="text-xl md:text-3xl font-bold text-black ">
        BOOKS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:px-6 py-10">
        {data.map((book) => (
          <div
            key={book.id}
            className="card max-w-sm border rounded-lg shadow-md p-4 bg-white"
          >
            <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Type:</strong> {book.type}
            </p>
            <p
              className={`mb-4 font-medium ${
                book.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {book.available ? "Available" : "Not Available"}
            </p>
            <button
              className={`px-4 py-2 rounded ${
                book.available
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!book.available}
            >
              {book.available ? "Connect" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
