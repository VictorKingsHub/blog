// BlogList.js
"use client";
import React, { useState } from "react";
import { BlogData } from "@/Assets/Assets";
import BlogItem from "./BlogItem";
import Link from "next/link";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="min-w-[95vw] border-t border-solid border-black flex flex-col justify-center items-center bg-gray-100 ">
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? `bg-black text-white py-1 px-4 rounded-sm` : " "
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? `bg-black text-white py-1 px-4 rounded-sm`
              : " "
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? `bg-black text-white py-1 px-4 rounded-sm`
              : " "
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? `bg-black text-white py-1 px-4 rounded-sm`
              : " "
          }
        >
          Lifestyle
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
