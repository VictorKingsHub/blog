'use client'
import BlogList from '@/components/BlogList'
// import Support from '@/components/Support'

export default function Home () {
  return (
    <div className='  flex flex-col items-center justify-items-center min-h-screen gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
        <BlogList />

      {/* <Support /> */}
    </div>
  )
}
