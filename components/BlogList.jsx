"use client";
import React, { useState } from "react";
import { BlogData } from "@/Assets/Assets";
import BlogItem from "./BlogItem";
import Link from "next/link";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="min-w-[95vw] border-t border-solid border-black flex flex-col justify-center items-center bg-gray-100 ">
      <div className="flex justify-center gap-6 my-10 xs:gap-2">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? `bg-black text-white py-1 px-4 xs:px-2 rounded-sm font-semibold xs:text-xs`
              : "font-semibold xs:text-xs"
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? `bg-black text-white py-1 px-4 xs:px-2 rounded-sm font-semibold xs:text-xs`
              : "font-semibold xs:text-xs"
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Education")}
          className={
            menu === "Education"
              ? `bg-black text-white py-1 px-4 xs:px-2 rounded-sm font-semibold xs:text-xs`
              : "font-semibold xs:text-xs"
          }
        >
          Education
        </button>
        <button
          onClick={() => setMenu("Entertainment")}
          className={
            menu === "Entertainment"
              ? `bg-black text-white py-1 px-4 xs:px-2 rounded-sm font-semibold xs:text-xs`
              : "font-semibold xs:text-xs"
          }
        >
          Entertainment
        </button>
      </div>
      <div className="flex w-full p-2 flex-wrap justify-center items-center py-3 gap-x-7 gap-10 min-h-full xl:mx-24  items-center  ">
        {BlogData.filter((item) =>
          menu === "All" ? true : item.category === menu
        ).map((item, index) => {
          return (
            <BlogItem
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              id={item.id}
              key={index}
            />
          );
        })}
      </div>
      <div className="py-10 px-auto">
        <Link href={"/"} className="border-b-2 border-gray-500">
          {" "}
          More Posts{" "}
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
