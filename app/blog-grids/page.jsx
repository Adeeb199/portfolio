"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useStore } from "../store/useStore"; // import your zustand store

const blogs = [
  {
    title: "Boost Your Productivity",
    description:
      "Learn practical tips and techniques to improve your workflow and get more done in less time.",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Design Trends 2025",
    description:
      "Explore the latest design trends shaping the web and app interfaces for the upcoming year.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Next.js Tips & Tricks",
    description:
      "Advanced Next.js tips for building fast, scalable, and SEO-friendly React applications.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Tailwind CSS Mastery",
    description:
      "A guide to writing professional UI with Tailwind CSS including dark mode and responsive design.",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "UI Animations That Wow",
    description:
      "Learn how to implement micro-interactions and animations that delight users.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Remote Work Best Practices",
    description:
      "Tips for staying productive and healthy while working remotely in a distributed team.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export default function BlogGrids() {
  const darkMode = useStore((state) => state.darkMode); // get darkMode from zustand

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-colors duration-700 ease-in-out overflow-x-hidden overflow-y-hidden ${
        darkMode ? "dark bg-slate-900 text-slate-200" : "bg-white text-slate-800"
      }`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="mt-30 px-8 py-12 flex flex-col items-center flex-1">
        <h1 className="text-4xl font-extrabold mb-12 transition-colors duration-700 ease-in-out">
          Blog Grid
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-700 ease-in-out ${
                darkMode
                  ? "bg-slate-800 text-slate-200"
                  : "bg-white text-slate-900"
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700 ease-in-out"></div>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-3 transition-colors duration-700 ease-in-out">
                  {blog.title}
                </h2>
                <p className="text-sm flex-1 transition-colors duration-700 ease-in-out">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-700 ease-in-out text-center"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
