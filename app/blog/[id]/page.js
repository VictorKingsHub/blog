'use client'
import { assets, BlogData } from '@/Assets/Assets'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation' // Import useParams and useRouter
import Image from 'next/image'
import { FaArrowRight, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Blog = () => {
  const params = useParams()
  const router = useRouter() // Initialize the router
  const [data, setData] = useState(null)

  useEffect(() => {
    if (params && params.id) {
      // Check if params and id are defined
      const id = Number(params.id) // Convert id to a number

      const foundBlog = BlogData.find(blog => blog.id === id)

      if (foundBlog) {
        setData(foundBlog)
        // console.error('Blog post PAGE FOUND', id)
      } else {
        // Handle the case where the blog post is not found
        console.error('Blog post not found for ID:', id)
        // Redirect to a 404 page or display a "not found" message
        // Example: router.push('/404');  Or set a state to display a message
        setData(null) // Or some default value
      }
    }
  }, [params, router])

  if (!data) {
    return <div>Loading... or Blog Post Not Found</div>
  }

  return data ? (
    <div>
      <div className='bg-gray-200 py-10 px-5 md:px-12 lg:px-28'>
        <div className='flex.justify-between.items-center'>
          <button className='flex items-center gap-2 font-medium text-bold'>
            {' '}
            Get Started <FaArrowRight />{' '}
          </button>
        </div>

        <div className='flex.my-24'>
          <h1 className='font-semibold text-2xl sm:text-5xl max-w-[700px] mx-auto'>
            {' '}
            {data.title}{' '}
          </h1>
          <Image
            src={data.authorImage}
            alt=''
            width={80}
            height={90}
            className='mx-auto border border-white rounded-full'
          />
          <p className='mt-1 pd-10 text-lg mx-w-[740px] mx-auto text-center'>
            {data.author}
          </p>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto  mt-[50px] mb-10'>
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt=''
          className='w-[130px] sm:w-auto mx-auto border-4 border-white'
        />
        <h1 className='font-semibold my-8 text-[26px]'>Introduction</h1>
        <p> {data.description} </p>
        <h3 className='my-5 text-[18px] font-semibold'>
          Self-reflection and Goal setting
        </h3>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
          Self-reflection and Goal setting
        </h3>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
          Self-reflection and Goal setting
        </h3>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
        <p className='my-3'>
          {' '}
          Before you can manage your lifestyle, you must have a focused mindset{' '}
        </p>
      </div>
      <div className='p-4 flex justify-center items-center'>
        <p className='px-5'> Share this blog on social media</p>
        <div className='flex justify-center items-center px-5'>
          <span className='px-3' >
            <FaFacebook />
          </span>
          <span className='px-3'>
            <FaTwitter />
          </span>
          <span className='px-3'>
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Blog
