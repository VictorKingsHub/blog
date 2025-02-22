"use client"
import React, { useState } from 'react'
import {BlogData} from "@/Assets/Assets"
import BlogItem from './BlogItem'
const BlogList = () => {

  const [menu, setMenu] = useState("All")

  return (
    <div className='w-[95vw] border-t border-solid border-black '>
        <div className="flex justify-center gap-6 my-10">
            <button onClick={()=> setMenu("All")} className={menu === "All" ? `bg-black text-white py-1 px-4 rounded-sm`: " "}>All</button>
            <button onClick={()=> setMenu("Technology")} className={menu === "Technology" ? `bg-black text-white py-1 px-4 rounded-sm`: " "}>Technology</button>
            <button onClick={()=> setMenu("Startup")} className={menu === "Startup" ? `bg-black text-white py-1 px-4 rounded-sm`: " "}>Startup</button>
            <button onClick={()=> setMenu("Lifestyle")} className={menu === "Lifestyle" ? `bg-black text-white py-1 px-4 rounded-sm`: " "}>Lifestyle</button>
        </div>
        <div className="flex flex-wrap justify-center py-3 gap-x-7 gap-y-10 mb-10 min-h-full xl:mx-24  items-center  ">
            {BlogData.filter((item)=> menu === "All" ? true : item.category === menu).map((item, index)=> {
                return <BlogItem image={item.image} title={item.title} description={item.description} category={item.category} id={item.id} key={index}/>
            })}
        </div>
    </div>
  )
}

export default BlogList
