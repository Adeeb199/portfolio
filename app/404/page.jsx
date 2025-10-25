"use client";
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore"; // import zustand store

export default function Error404() {
  const darkMode = useStore((state) => state.darkMode); // get darkMode from zustand

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md space-y-6"
        >
          <h1
            className={`text-6xl font-extrabold transition-colors duration-300 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            404
          </h1>
          <h2
            className={`text-2xl font-semibold transition-colors duration-300 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Page Not Found
          </h2>
          <p
            className={`text-sm transition-colors duration-300 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
          <a
            href="/"
            className={`inline-block mt-4 px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 ${
              darkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Go Back Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}
