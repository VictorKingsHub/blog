import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({ image, description, title, category, id }) => {
  return (
    <div className="w-[100vw] rounded-md inline-block max-w-[300px] sm:max-[300px] shadow-[-3px_3px_4px_gray] bg-white hover:shadow-[-3px_3px_4px_black] flex flex-col justify-center items-center p-2">
      <Link href={`/blog/${id}`}>
        <Image
          src={image}
          width={280}
          height={130}
          alt={category}
          className="rounded-tl-sm rounded-tr-sm"
        />
      </Link>
      <p className="ml-1 mt-1 px-1 text-black text-small"> {category} </p>
      <div className="p-3">
        <h5 className="mb-1 text-large font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-3 tracking-tight text-gray-700 mb-2">
          {description}
        </p>
        <Link href={`/blog/${id}`}>
          <div className="flex items-center justify-end py-1  text-center bg-gray-300 hover:bg-black text-sm hover:py-1 px-2 m-1 active:text-right active:text-white p-1 w-fit rounded-sm cursor-pointer hover:shadow-[-3px_3px_4px_black] hover:text-white">
            Read More{" "}
            <span className="ml-2">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
