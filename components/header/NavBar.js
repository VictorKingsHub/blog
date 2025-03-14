"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/app/constants";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation"; // Import usePathname

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 w-full container m-0 max-container padding-container z-999 items-center flex flex-row space-between justify-around py-3 md:shadow-md md:shadow-lightgray md:bg-white/80">
      <div className="cursor-pointer">
        <Link href="/">
          <b>T&T Blog</b>
        </Link>
      </div>
      <div>
        <ul
          style={{ color: "rgb(68, 68, 68)" }}
          className="hidden flex-row justify-between text-black space-center md:flex"
        >
          {NAV_LINKS.map((menuitem) => {
            const isActive = pathname === menuitem.href; // Check if active
            return (
              <Link
                href={menuitem.href}
                key={menuitem.id}
                className={`mx-4 font-bold text-11 text-gray-500 cursor-pointer hover:text-teal-500 transition-all ${
                  isActive ? "text-teal-400" : ""
                }`} // Apply active class
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
            className="gap-3 bg-gradient-to-r from-teal-400 to-teal-900 p-2 rounded border-rounded cursor-pointer text-white"
          >
            Book Us Today
          </button>
        </Link>
      </div>

      <div className="flex md:hidden">
        <div onClick={toggleMobileMenu}>
          <CiMenuBurger />
        </div>
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-gray-200 flex flex-col p-4 pr-4 items-center">
            {NAV_LINKS.map((menuitem) => {
              const isActive = pathname === menuitem.href; // Check if active

              return (
                <Link
                  href={menuitem.href}
                  key={menuitem.id}
                  className={`py-2 text-sm cursor-pointer hover:text-teal-500 transition-all ${
                    isActive ? "text-teal-400" : ""
                  }`} // Apply active class
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
