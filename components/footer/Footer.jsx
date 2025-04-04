"use client";
import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";
import React, { useState } from "react";
import Copyright from "./Copyright";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!email) {
        throw new Error("Please enter your email.");
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      const templateParams = {
        to_email: "ezevictornkemjika@gmail.com", // Admin's email
        from_email: email, // User's email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Subscription failed:", error); // Log the error
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer flex flex-col justify-center items-center bg-black text-white text-base-content px-5 py-5 sm:px-10">
      <div className="flex flex-wrap justify-between w-full">
        {" "}
        {/* Added flex-wrap */}
        <aside className="mb-5 sm:mb-0 w-full sm:w-auto">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            T&T Blog
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="mb-5 sm:mb-0 w-full sm:w-auto">
          <h6 className="footer-title">Company</h6>
          {NAV_LINKS.map((item) => (
            <div key={item.id}>
              <Link href={item.href} className="link link-hover">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <nav className="mb-5 sm:mb-0 w-full sm:w-auto">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form
          className="flex justify-between w-full sm:max-w-[500px] bg-gray-500 p-1 border border-black rounded-sm"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="outline-none self-center w-full text-black h-full px-2 sm:px-8 py-2 rounded-tl-sm rounded-bl-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="border-1 border-l border-black px-1 py-2 sm:px-2 hover:bg-teal-600 text-white bg-gray-500 active:text-right active:text-white"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
      <div className="mt-5">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
