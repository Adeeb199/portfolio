"use client";

import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";

export default function SkillsSection() {
  const darkMode = useStore((state) => state.darkMode);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      icon: "⚛️",
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Firebase", "Express", "MongoDB", "Supabase"],
      icon: "🛠️",
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "VS Code", "Vercel", "Figma", "Postman"],
      icon: "⚙️",
    },
  ];

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-32 transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
          : "bg-gradient-to-br from-white via-slate-50 to-indigo-100"
      }`}
    >
      {/* Animated glowing blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-16 left-12 w-72 h-72 rounded-full blur-3xl opacity-25 ${
          darkMode ? "bg-indigo-700" : "bg-indigo-400"
        }`}
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-24 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? "bg-pink-700" : "bg-pink-300"
        }`}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`text-4xl md:text-5xl font-extrabold mb-6 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Crafting engaging and intuitive digital experiences using modern web technologies. 
          From sleek animations to optimized backend logic — I transform ideas into elegant, scalable interfaces.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
              className={`p-8 rounded-2xl border backdrop-blur-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-700 ${
                darkMode
                  ? "bg-slate-800/70 border-slate-700 hover:border-indigo-500"
                  : "bg-white/80 border-slate-200 hover:border-indigo-400"
              }`}
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {category.title}
              </h3>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: darkMode
                        ? "rgba(99,102,241,0.2)"
                        : "rgba(99,102,241,0.1)",
                    }}
                    className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-500 cursor-default ${
                      darkMode
                        ? "border-slate-600 text-slate-300 hover:border-indigo-400"
                        : "border-slate-300 text-slate-700 hover:border-indigo-500"
                    }`}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-20"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(236,72,153,0.4)" }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-400/40 transition-all duration-300"
          >
            💼 Explore My Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade Effect */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 ${
          darkMode
            ? "bg-gradient-to-t from-slate-950 to-transparent"
            : "bg-gradient-to-t from-white to-transparent"
        }`}
      ></div>
    </section>
  );
}
