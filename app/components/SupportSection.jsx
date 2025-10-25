"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, BookOpen } from "lucide-react";
import { useStore } from "../store/useStore";

export default function SupportSection() {
  const darkMode = useStore((state) => state.darkMode);

  const supports = [
    {
      title: "Email Me",
      desc: "Have a project idea or want to buy a template? Send me an email directly.",
      icon: <Mail className="w-6 h-6 text-white" />,
      link: "mailto:smartadib982@gmail.com",
    },
    {
      title: "Live Chat",
      desc: "Need instant answers or want to discuss your project details? Let’s chat on WhatsApp.",
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      link: "https://wa.me/923420501829", // you can replace this with your actual WhatsApp link
    },
    {
      title: "Portfolio & Guides",
      desc: "Explore my latest web projects, UI templates, and development guides.",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      link: "/portfolio",
    },
  ];

  return (
    <section
      id="support"
      className={`relative py-28 overflow-hidden transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
          : "bg-gradient-to-b from-white via-slate-50 to-slate-100"
      }`}
    >
      {/* Background Glows */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-blob ${
          darkMode ? "bg-indigo-700/20" : "bg-indigo-400/20"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-blob animation-delay-2000 ${
          darkMode ? "bg-pink-700/20" : "bg-pink-400/20"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-extrabold mb-4 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`text-lg mb-16 max-w-3xl mx-auto transition-colors duration-700 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Have questions about pricing, templates, or want a custom project?  
          I’d love to hear from you — let’s build something awesome together.
        </motion.p>

        {/* Support Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {supports.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`relative group p-6 rounded-2xl backdrop-blur-md shadow-lg border transition-all duration-700 ease-in-out ${
                darkMode
                  ? "bg-slate-800/80 border-slate-700 hover:shadow-pink-500/20"
                  : "bg-white/80 border-transparent hover:border-indigo-400 hover:shadow-indigo-500/20"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-700 ease-in-out ${
                  darkMode
                    ? "bg-pink-500"
                    : "bg-indigo-600 group-hover:bg-pink-500"
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-2 transition-colors duration-700 ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm transition-colors duration-700 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>

              {/* Gradient Glow on Hover */}
              <div
                className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700 ease-in-out ${
                  darkMode
                    ? "bg-gradient-to-r from-pink-500/20 via-indigo-500/20 to-purple-500/20"
                    : "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"
                }`}
              ></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
