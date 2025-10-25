"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";
import { theme } from "../store/theme";

export default function Hero() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <section
      id="home"
      className={` relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-700 ${
        darkMode ? theme.background.dark : theme.background.light
      }`}
    >
      {/* Glowing Background Accents */}
      <div
        className={`absolute top-12 left-5 sm:top-20 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 blur-3xl rounded-full opacity-40 ${
          darkMode ? theme.glowingShapes.topLeft.dark : theme.glowingShapes.topLeft.light
        }`}
      />
      <div
        className={`absolute bottom-12 right-5 sm:bottom-20 sm:right-10 w-60 h-60 sm:w-80 sm:h-80 blur-3xl rounded-full opacity-40 ${
          darkMode ? theme.glowingShapes.bottomRight.dark : theme.glowingShapes.bottomRight.light
        }`}
      />

      <div className=" mb-10 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* LEFT SIDE — Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative rounded-3xl p-[1.5px] overflow-hidden shadow-2xl group w-full mx-auto ${
            darkMode
              ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"
              : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          }`}
        >
          <div
            className={`rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 backdrop-blur-xl ${
              darkMode ? "bg-slate-950/85" : "bg-white/85"
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Hey, I'm{" "}
              <span className="block text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Adeeb Ibrahim
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`mt-3 text-sm sm:text-base md:text-lg font-medium ${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              Crafting digital experiences with code, creativity, and motion ✨
            </motion.p>

            {/* Highlight Badges */}
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
              {["React", "Next.js", "Three.js", "Framer Motion"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    darkMode
                      ? "bg-slate-800 text-slate-200 border border-slate-600"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  ⚡ {tech}
                </motion.span>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`mt-4 sm:mt-5 text-sm sm:text-base md:text-base leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I design and develop seamless, modern, and animated web interfaces
              that don’t just look good — they feel alive. My focus is on building
              immersive experiences that engage users at every level.
            </motion.p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:shadow-pink-500/40 transition-all text-sm sm:text-base"
              >
                🚀 Explore Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#support"
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl border font-medium backdrop-blur-md transition-all text-sm sm:text-base ${
                  darkMode
                    ? "border-slate-700 text-slate-200 hover:border-indigo-400 hover:text-indigo-400"
                    : "border-slate-300 text-slate-700 hover:border-indigo-500 hover:text-indigo-600"
                }`}
              >
                💬 Let’s Connect
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center mt-8 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[80%] sm:w-[70%] md:w-[75%] lg:w-[70%] group"
          >
            <div
              className={`absolute -inset-2 rounded-3xl blur-2xl opacity-60 transition-all duration-700 group-hover:opacity-90 ${
                darkMode
                  ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"
                  : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
              }`}
            />
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border backdrop-blur-xl ${
                darkMode
                  ? "border-slate-700/60 bg-slate-900/40"
                  : "border-slate-200/60 bg-white/40"
              }`}
            >
              <Image
                src="/portfolio-image.jpg"
                alt="Adeeb Ibrahim - React & Three.js Developer"
                width={650}
                height={520}
                priority
                className="object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 ${
          darkMode
            ? "bg-gradient-to-t from-slate-950 to-transparent"
            : "bg-gradient-to-t from-white to-transparent"
        }`}
      />
    </section>
  );
}
