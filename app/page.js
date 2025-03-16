"use client";
import BlogList from "@/components/BlogList";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center gap-5  font-[family-name:var(--font-geist-sans)] m-0 ">
      <Hero />
      <BlogList />
    </div>
  );
}
