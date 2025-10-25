"use client";

import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";
import { theme } from "../store/theme";

export default function AboutSection() {
  const darkMode = useStore((state) => state.darkMode);

  const skills = [
    {
      icon: "⚛️",
      title: "React & Next.js",
      desc: "Building high-performance, scalable web apps with modern frameworks and clean code.",
    },
    {
      icon: "🎨",
      title: "UI/UX & Animation",
      desc: "Designing smooth, intuitive, and visually appealing interfaces using Tailwind CSS and Framer Motion.",
    },
    {
      icon: "🚀",
      title: "Problem Solving",
      desc: "Transforming ideas into practical, elegant, and efficient digital experiences.",
    },
  ];

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-16 md:py-20 transition-all duration-700 ${
        darkMode ? theme.background.dark : theme.background.light
      }`}
    >
      {/* Background glowing shapes */}
      <div
        className={`absolute top-20 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl animate-pulse transition-all duration-700 ${
          darkMode ? theme.glowingShapes.topLeft.dark : theme.glowingShapes.topLeft.light
        }`}
      ></div>
      <div
        className={`absolute bottom-24 right-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse transition-all duration-700 ${
          darkMode ? theme.glowingShapes.bottomRight.dark : theme.glowingShapes.bottomRight.light
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className={`text-3xl md:text-5xl font-extrabold leading-tight text-center ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p
            className={`mt-5 text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I’m <span className="font-semibold text-indigo-500">Adeeb Ibrahim</span>, a dedicated Front-End Developer with a focus on modern UI
            architecture, animations, and performance optimization. I love transforming complex concepts into clean, functional, and elegant digital experiences.
          </p>
        </motion.div>

        {/* Skills / Feature Cards */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`p-5 md:p-6 rounded-2xl border backdrop-blur-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${
                darkMode
                  ? "bg-slate-800/60 border-slate-700 hover:border-indigo-500"
                  : "bg-white/70 border-slate-200 hover:border-indigo-400"
              }`}
            >
              <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>
              <h3
                className={`text-lg md:text-xl font-semibold mb-2 ${
                  darkMode ? "text-slate-100" : "text-slate-800"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-400/40 transition-all duration-300"
          >
            💬 Let’s Work Together
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 transition-all duration-700 ${
          darkMode ? theme.bottomFade.dark : theme.bottomFade.light
        }`}
      ></div>
    </section>
  );
}
