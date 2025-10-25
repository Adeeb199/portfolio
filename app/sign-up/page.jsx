"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore"; // Zustand store

export default function SignUp() {
  const [agreed, setAgreed] = useState(false);
  const [useMagicLink, setUseMagicLink] = useState(false);
  const darkMode = useStore((state) => state.darkMode); // get darkMode from Zustand
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // SSR safe

  return (
    <div className={`${darkMode ? "dark" : ""} w-full min-h-screen overflow-hidden`}>
      <div
        className={`relative flex flex-col min-h-screen transition-colors duration-700 ease-in-out ${
          darkMode ? "bg-gradient-to-br from-slate-900 to-slate-800" : "bg-gradient-to-br from-indigo-50 to-pink-50"
        }`}
      >
        <Navbar />

        <div className="mt-30 p-6 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background shapes */}
          <div
            className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 -z-10 transition-colors duration-700 ease-in-out ${
              darkMode ? "bg-indigo-900" : "bg-indigo-300"
            }`}
          />
          <div
            className={`absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 -z-10 transition-colors duration-700 ease-in-out ${
              darkMode ? "bg-pink-900" : "bg-pink-300"
            }`}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`w-full max-w-md backdrop-blur-md rounded-3xl shadow-2xl p-10 sm:p-12 space-y-6 transition-colors duration-700 ease-in-out ${
              darkMode ? "bg-slate-800/80 text-slate-200" : "bg-white/80 text-slate-900"
            }`}
          >
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-extrabold">Create an Account</h2>
              <p className={`text-sm transition-colors duration-700 ease-in-out ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>

            {/* Social login */}
            <div className="space-y-3 text-center">
              <p className={`text-sm font-medium transition-colors duration-700 ease-in-out ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                Sign up with Social Media
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  className={`flex-1 py-2 px-4 border rounded-lg shadow-sm transition-all duration-700 ease-in-out ${
                    darkMode ? "border-slate-700 bg-slate-900 text-white hover:bg-slate-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Google
                </button>
                <button
                  className={`flex-1 py-2 px-4 border rounded-lg shadow-sm transition-all duration-700 ease-in-out ${
                    darkMode ? "border-slate-700 bg-slate-900 text-white hover:bg-slate-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  GitHub
                </button>
              </div>
              <p className={`text-sm transition-colors duration-700 ease-in-out ${darkMode ? "text-slate-400" : "text-slate-500"} mt-2`}>
                Or, sign up with your email
              </p>
            </div>

            {/* Toggle login mode */}
            <div className="flex justify-center gap-4 text-sm mb-4">
              <button
                onClick={() => setUseMagicLink(false)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-700 ease-in-out ${
                  !useMagicLink
                    ? "bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/40"
                    : `bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200`
                }`}
              >
                Password
              </button>
              <button
                onClick={() => setUseMagicLink(true)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-700 ease-in-out ${
                  useMagicLink
                    ? "bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/40"
                    : `bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200`
                }`}
              >
                Magic Link
              </button>
            </div>

            {/* Form */}
            <form className="mt-2 space-y-5">
              {!useMagicLink && (
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium transition-colors duration-700 ease-in-out ${
                      darkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={`mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-700 ease-in-out ${
                      darkMode ? "border-slate-700 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-900"
                    }`}
                    placeholder="First and last name"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium transition-colors duration-700 ease-in-out ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-700 ease-in-out ${
                    darkMode ? "border-slate-700 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-900"
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              {!useMagicLink && (
                <div>
                  <label
                    htmlFor="password"
                    className={`block text-sm font-medium transition-colors duration-700 ease-in-out ${
                      darkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    Your Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={`mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-700 ease-in-out ${
                      darkMode ? "border-slate-700 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-900"
                    }`}
                    placeholder="Enter your password"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 text-sm">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="h-4 w-4 text-indigo-600 border-slate-300 rounded"
                />
                <label
                  htmlFor="agree"
                  className={`transition-colors duration-700 ease-in-out ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  I agree to the{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className="w-full flex justify-center py-3 px-4 rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold transition-all duration-700 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign Up
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
