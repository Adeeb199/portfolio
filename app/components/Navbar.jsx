"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "../store/useStore";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Templates",
    "Testimonials",
    "Team",
    "Support",
  ];

  const handleHashLink = (hash) => {
    setMobileOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${hash}`);
    }
  };

  return (
    <motion.header
      layout
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-sm transition-colors duration-700`}
      style={{
        backgroundColor: darkMode
          ? "rgba(15, 23, 42, 0.85)"
          : "rgba(255, 255, 255, 0.85)",
        borderColor: darkMode ? "#475569" : "#e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div layout className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-sky-400 rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/30">
            A
          </div>
          <motion.span
            layout
            transition={{ duration: 0.5 }}
            className="font-semibold text-xl tracking-tight"
            style={{ color: darkMode ? "#fff" : "#1e293b" }}
          >
            Adeeb
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-sm font-medium items-center">
          {navItems.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => handleHashLink(item.toLowerCase())}
              layout
              transition={{ duration: 0.4 }}
              className="relative group transition-all duration-500"
              style={{ color: darkMode ? "#e5e7eb" : "#1e293b" }}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            layout
            onClick={toggleDarkMode}
            className="p-2 rounded-md transition-all duration-700 ml-2"
            style={{
              backgroundColor: darkMode ? "#334155" : "#e5e7eb",
              color: darkMode ? "#fff" : "#1e293b",
            }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "🌞" : "🌙"}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md flex flex-col justify-between h-6 w-8 focus:outline-none transition-all duration-500"
          >
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-500 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-500 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-500 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </motion.button>

          {/* Mobile Dark Mode Toggle */}
          <motion.button
            layout
            onClick={toggleDarkMode}
            className="p-2 rounded-md transition-all duration-700"
            style={{
              backgroundColor: darkMode ? "#334155" : "#e5e7eb",
              color: darkMode ? "#fff" : "#1e293b",
            }}
          >
            {darkMode ? "🌞" : "🌙"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 w-full py-5 px-6 flex flex-col gap-3 shadow-lg z-40 transition-colors duration-700 ${
              darkMode ? "bg-slate-900 text-slate-200" : "bg-white text-slate-900"
            }`}
          >
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleHashLink(item.toLowerCase())}
                className="text-left w-full px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition-all duration-500"
              >
                {item}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
