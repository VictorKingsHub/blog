"use client";
import BlogList from "@/components/BlogList";
import { ThemeToggle } from "@/components/theme_toggle";
import Hero from "@/components/ui/Hero";

// import Support from '@/components/Support'

export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center gap-5  font-[family-name:var(--font-geist-sans)] m-0 ">
      <Hero />
      <BlogList />

      {/* <Support /> */}
    </div>
  );
}
