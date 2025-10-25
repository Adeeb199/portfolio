"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "../store/useStore";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function ClientThemeWrapper({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  const darkMode = useStore((state) => state.darkMode);
  const pathname = usePathname();

  // ✅ Wait for client mount before applying theme
  useEffect(() => {
    setMounted(true);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // ✅ Smooth scroll for hash links
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    }
  }, [pathname]);

  if (!mounted) {
    // --- LOADING SCREEN ---
    return (
      <motion.div
        key="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex items-center justify-center w-screen h-screen transition-colors duration-700 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-transparent border-b-indigo-500 border-l-indigo-400 animate-spin-slow"></div>
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Loading, please wait...
          </p>
        </div>
      </motion.div>
    );
  }

  // --- MAIN CONTENT ---
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full min-h-screen transition-colors duration-700 ease-in-out overflow-x-hidden overflow-y-auto ${
          darkMode
            ? "dark bg-slate-900 text-slate-200"
            : "bg-white text-slate-800"
        }`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
