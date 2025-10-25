"use client";

import { useState, useEffect } from "react";

import Main from "./Main/page";

import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show full screen circular loader while detecting theme
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-900">
        <motion.div
          className="w-16 h-16 border-4 border-t-indigo-500 border-gray-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-700 `}>
     
     <Main/>
    
    </main>
  );
}
