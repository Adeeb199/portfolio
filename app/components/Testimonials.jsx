"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useStore } from "../store/useStore";

export default function Testimonials() {
  const darkMode = useStore((state) => state.darkMode);

  const testimonials = [
    {
      text: "Adeeb delivered a sleek, high-performance React project that exceeded our expectations. His attention to UI detail is world-class!",
      author: "Zeeshan Malik",
      role: "Founder @TechNova",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      text: "I bought a Next.js portfolio template from Adeeb — the design quality and animations were stunning! Setup was effortless.",
      author: "Amna Raza",
      role: "Freelance Designer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      text: "Working with Adeeb was a smooth experience. He transformed our outdated frontend into a modern, responsive masterpiece.",
      author: "Ali Khan",
      role: "Project Manager @DevCore",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`relative py-28 overflow-hidden transition-all duration-700 ease-in-out ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
          : "bg-gradient-to-b from-white via-slate-50 to-slate-100"
      }`}
    >
      {/* Soft Glows */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 blur-3xl animate-pulse ${
            darkMode
              ? "bg-gradient-to-r from-indigo-800/10 via-pink-700/10 to-purple-700/10"
              : "bg-gradient-to-r from-indigo-200/20 via-purple-200/20 to-pink-200/20"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-extrabold mb-4 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          What My Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          I’ve helped clients build high-quality web apps, polished UI templates,
          and professional portfolios. Here’s what they think about my work.
        </motion.p>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative group p-8 rounded-2xl border backdrop-blur-md transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl ${
                darkMode
                  ? "bg-slate-800/80 border-slate-700 hover:shadow-pink-500/20"
                  : "bg-white/90 border-slate-200 hover:shadow-indigo-500/20"
              }`}
            >
              <Quote
                className={`w-10 h-10 mx-auto mb-4 transition-colors ${
                  darkMode
                    ? "text-pink-400 group-hover:text-indigo-400"
                    : "text-indigo-500 group-hover:text-pink-500"
                }`}
              />
              <p
                className={`italic leading-relaxed ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                “{t.text}”
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden ring-2 ${
                    darkMode
                      ? "ring-pink-500 group-hover:ring-indigo-400"
                      : "ring-indigo-500 group-hover:ring-pink-500"
                  }`}
                >
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <h4
                    className={`font-semibold ${
                      darkMode ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    {t.author}
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 ${
                  darkMode
                    ? "bg-gradient-to-br from-pink-500 via-indigo-500 to-purple-500"
                    : "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a
            href="mailto:smartadib982@gmail.com"
            className={`inline-block px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-500 ${
              darkMode
                ? "bg-pink-600 hover:bg-indigo-600 text-white shadow-pink-500/30"
                : "bg-indigo-600 hover:bg-pink-600 text-white shadow-indigo-500/30"
            }`}
          >
            Work With Me → smartadib982@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
