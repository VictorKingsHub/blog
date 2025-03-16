"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("EmailJS Error:", err);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer); // Cleanup on unmount or re-render
    }
  }, [isSent]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Get to (know) us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md w-full"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {isSent && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="#mailto:contact@yourblog.com">T&Tgmail.com</a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +234 816-754-8888
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 123 Blog Street, City, Country
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#T&TFacebook.com"
                className="text-blue-500 hover:text-blue-700"
              >
                Facebook
              </a>
              <a
                href="#T&TTwitter.com"
                className="text-blue-400 hover:text-blue-600"
              >
                Twitter
              </a>
              <a
                href="#T&TInstagram.com"
                className="text-pink-500 hover:text-pink-700"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
