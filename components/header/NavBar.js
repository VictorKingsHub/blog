"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/app/constants";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 w-full  flex flex-row items-center justify-around py-3 md:shadow-md md:shadow-lightgray md:bg-white/80 z-[10000]">
      <div className="cursor-pointer">
        <Link href="/">
          <b>T&T Blog</b>
        </Link>
      </div>
      <div>
        <ul
          className="hidden md:flex flex-row justify-between text-black space-x-6" // Use space-x for spacing
          style={{ color: "rgb(68, 68, 68)" }}
        >
          {NAV_LINKS.map((menuitem) => {
            const isActive = pathname === menuitem.href;
            return (
              <Link
                href={menuitem.href}
                key={menuitem.id}
                className={`text-gray-500 font-bold text-sm cursor-pointer hover:text-teal-500 transition-all ${
                  isActive ? "text-teal-400" : ""
                }`}
              >
                {menuitem.label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Link href="/about">
          <button
            type="button"
            title="Book Us Today"
            className="bg-gradient-to-r from-teal-400 to-teal-900 px-4 py-2 rounded cursor-pointer text-white"
          >
            Book Us Today
          </button>
        </Link>
      </div>

      <div className="md:hidden flex">
        <div onClick={toggleMobileMenu}>
          <CiMenuBurger />
        </div>
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-gray-200 flex flex-col p-4 pr-4 items-center">
            {NAV_LINKS.map((menuitem) => {
              const isActive = pathname === menuitem.href;
              return (
                <Link
                  href={menuitem.href}
                  key={menuitem.id}
                  className={`py-2 text-sm cursor-pointer hover:text-teal-500 transition-all ${
                    isActive ? "text-teal-400" : ""
                  }`}
                >
                  {menuitem.label}
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
