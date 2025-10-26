"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore"; // Zustand store

export default function Team() {
  const darkMode = useStore((state) => state.darkMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const members = [
    {
      name: "Adeeb Ibrahim",
      role: "Frontend Developer",
      image:
        "/Team-image.jpg",
      description:
        "Specializes in crafting responsive and interactive user interfaces using React, Next.js, Tailwind CSS, and Framer Motion. Passionate about building clean, animated, and high-performance web experiences.",
    },
    {
      name: "Maria Akber",
      role: "Backend Developer",
      image: "/Maria.jpg",
      description:
        "Expert in developing scalable backend systems with Node.js, Express, and MongoDB. Focused on API design, data security, and seamless server-client integration for modern web applications.",
    },
  ];

  return (
    <section
      id="team"
      className={`relative py-24 overflow-hidden transition-all duration-700 ease-in-out ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent)] transition-all duration-700 ease-in-out"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Meet Our Creative Team
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`max-w-2xl mx-auto mb-16 transition-all duration-700 ease-in-out ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          A passionate and talented group of developers turning ideas into
          beautifully crafted web experiences.
        </motion.p>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-start">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`relative group rounded-2xl p-6 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                darkMode
                  ? "bg-slate-800/60 hover:bg-slate-800 hover:shadow-xl hover:shadow-pink-500/20"
                  : "bg-white/60 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/20"
              }`}
            >
              {/* Profile Image - Sharper + Zoomed + Crisp */}
              <div
                className={`relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 transition-all duration-700 ease-in-out ${
                  darkMode
                    ? "ring-slate-700 group-hover:ring-pink-500"
                    : "ring-slate-300 group-hover:ring-indigo-500"
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="160px"
                  priority
                  quality={100}
                  className="object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Name & Role */}
              <h4
                className={`text-xl font-semibold transition-all duration-700 ease-in-out ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {member.name}
              </h4>
              <p
                className={`text-sm font-medium mt-1 transition-all duration-700 ease-in-out ${
                  darkMode ? "text-pink-400" : "text-indigo-500"
                }`}
              >
                {member.role}
              </p>

              {/* Description */}
              <p
                className={`text-sm mt-4 leading-relaxed transition-all duration-700 ease-in-out ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {member.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl transition-all duration-700 ease-in-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
