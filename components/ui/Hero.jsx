// Hero.js
"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BlogData } from "@/Assets/Assets"; // Import BlogData
import { useRouter } from "next/navigation";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = BlogData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = BlogData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div className="text-center my-8 p-10 ms:p-5 ">
      <h1 className="text-3xl sm:text-5xl font-medium"> Latest Blogs </h1>
      <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
        Shaping Tomorrow, Today. Where Technology, Education, and Entertainment
        Converge. Get a glimpse into the future with our in-depth analysis,
        innovative ideas, and captivating stories
      </p>

      <form
        onSubmit={handleSearchSubmit}
        className="mt-8 flex justify-center items-center "
      >
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-400 rounded-l-md focus:outline-none"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <AiOutlineSearch className="text-gray-400" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white p-3 rounded-r-md hover:bg-teal-700 focus:outline-none"
        >
          Search
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-4 max-w-md mx-auto">
          <ul className="divide-y divide-gray-200">
            {searchResults.map((result) => (
              <li key={result.id} className="py-2">
                <a
                  href={`/blog/${result.id}`}
                  className="text-left block hover:text-teal-500"
                >
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hero;
