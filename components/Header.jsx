import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/Assets'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex flex-col pb-2 pt-5 md:px-12 lg:px-28 '>
      <div className='flex items-center justify-between'>
        <Link href={"/"}>
        <Image
          src={assets.p2}
          width='25'
          alt='H'
          className='w-[80px] sm:w-auto'
          />
          </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-3px_3px_4px_gray]'>
          {' '}
          Get Started <FaAngleRight />{' '}
        </button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'> Latest Blogs </h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo,
          dicta quam enim aspernatur voluptate? Saepe non illo minima ab.{' '}
        </p>
        <form
          className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-3px_3px_4px_gray] '
          action=''
        >
          <input
            type='email'
            name=''
            id=''
            placeholder='Enter Your Email'
            className='pl-4 outline-none'
          />
          <button type='submit' className="border-1 border-l border-black px-4 py-4 sm:px-8 bg-gray-300 active:bg-gray-600 active:text-right active:text-white">Subscribe</button>
        </form>
        
      </div>
    </div>
  )
}

export default Header
