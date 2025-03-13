import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAlignRight, FaArrowRight } from "react-icons/fa";

const BlogItem = ({ image, description, title, category, id }) => {
  return (
    <div className="w-[100vw] inline-block max-w-[250px] sm:max-[300px] bg-white border border-black hover:shadow-[-3px_3px_4px_gray]">
      <Link href={`/blog/${id}`}>
        <Image src={image} width={280} height={130} alt={category} />
      </Link>
      <p className="ml-1 mt-1 px-1 bg-white text-white text-small">
        {" "}
        {category}{" "}
      </p>
      <div className="p-3">
        <h5 className="mb-1 text-large font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-3 tracking-tight text-gray-700 mb-2">
          {description}
        </p>
        <Link href={`/blog/${id}`}>
          <div className="flex items-center justify-end py-1  text-center bg-gray-300 active:bg-gray-600 active:text-right active:text-white p-1 w-fit rounded-sm cursor-pointer">
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
