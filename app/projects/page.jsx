"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";
import { useRouter } from "next/navigation";

export default function Projects() {
  const darkMode = useStore((state) => state.darkMode);
  const router = useRouter();

  const projects = [
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
      description:
        "A comprehensive branding project including logo design, visual identity, and brand guidelines.",
    },
    {
      id: "social-app",
      title: "Social App Prototype",
      category: "Digital Experience",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=800&q=80",
      description:
        "A mobile-first social application prototype focusing on UX, UI, and interactive animations.",
    },
    {
      id: "creative-studio",
      title: "Creative Studio Portfolio",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      description: "A showcase of creative design work for a digital studio.",
    },
    {
      id: "marketing-dashboard",
      title: "Marketing Dashboard",
      category: "Strategy",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      description: "Interactive dashboard for monitoring marketing KPIs and data.",
    },
    {
      id: "product-landing",
      title: "Product Landing Page",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "A modern, responsive landing page for a digital product.",
    },
    {
      id: "startup-mobile",
      title: "Startup Mobile App",
      category: "Mobile UI",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      description: "UI/UX design for a mobile app aimed at startups.",
    },
    {
      id: "modern-saas",
      title: "Modern SaaS Platform",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Design and prototype for a modern SaaS application.",
    },
  ];

  const handleCardClick = (id) => {
    router.push(`/projects/${id}`);
  };

  return (
    <section
      id="projects"
      className={`relative py-20 overflow-hidden transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950"
          : "bg-gradient-to-b from-white via-slate-50 to-slate-100"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A showcase of digital products and designs built with creativity,
            precision, and performance in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(project.id)}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl hover:shadow-indigo-600/20 transition-all duration-700 ease-in-out"
            >
              {/* Image Layer */}
              <div className="relative w-full h-44 md:h-48 lg:h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out ${
                    darkMode
                      ? "bg-gradient-to-t from-slate-900/70 via-slate-900/30"
                      : "bg-gradient-to-t from-slate-900/80 via-slate-900/40"
                  }`}
                ></div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {project.title}
                </h3>
                <p className="text-indigo-300 text-xs md:text-sm mt-1">
                  {project.category}
                </p>
              </div>

              {/* Subtle Glow */}
              <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-lg transition-all duration-700 ease-in-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
