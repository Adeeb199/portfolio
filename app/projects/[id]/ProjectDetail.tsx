"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ShoppingBag } from "lucide-react";
import { useStore } from "../../store/useStore";
import { Globe } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  budget: string;
  buyLink: string;
  template: string;
  features: string[];
  technologies: string[];
  rating: number;
  reviews: number;
  duration: string;
}

interface ProjectDetailProps {
  id: string;
}

export default function ProjectDetail({ id }: ProjectDetailProps) {
  const darkMode = useStore((state) => state.darkMode);

  // ✅ Complete Project Data (7 Projects)
// ✅ Complete Project Data (7 Projects with your IDs)
const projects: Project[] = [
  {
  id: "shadcn-landing",
  title: "Shadcn Landing Page Template",
  category: "UI Template",
  image:
    "/shadcn-landingpage.png",
  description:
    "A minimal yet powerful landing page template built with React, TypeScript, Tailwind CSS, and shadcn/ui. It features hero sections, feature grids, pricing tiers, and testimonial layouts — ideal for SaaS startups or modern web apps.",
  budget: "Free",
  buyLink: "https://shadcn-landingpage.vercel.app/",
  template: "Modern SaaS Template",
  rating: 4.9,
  reviews: 486,
  duration: "Instant Download",
  features: [
    "Hero and Feature Sections",
    "Pricing and Testimonial Blocks",
    "Responsive Dark/Light Mode",
    "Fully Customizable with Tailwind",
    "Built with shadcn/ui Components",
  ],
  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
},

  {
    id: "social-app",
    title: "Social App Prototype",
    category: "Digital Experience",
    image:
    "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=800&q=80",
      
    description:
      "A mobile-first social networking app concept focusing on clean UX, fluid navigation, and delightful micro-interactions. Built with Next.js and Framer Motion for smooth animations.",
    budget: "$2,500",
    buyLink: "#",
    template: "Interactive Mobile Template",
    rating: 4.8,
    reviews: 210,
    duration: "3 Weeks",
    features: [
      "Profile & Feed UI",
      "Dark/Light Mode",
      "Follow/Unfollow System",
      "Chat Interface Mockup",
      "Animated Transitions",
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "React Native"],
  },
  
  {
    id: "product-landing",
    title: "Product Landing Page",
    category: "Web Development",
    image:
     "/galleryproject.png",
        
    description:
      "A conversion-optimized landing page crafted for SaaS startups. Features bold typography, responsive design, and call-to-action sections.",
    budget: "$900",
    buyLink: "#",
    template: "Responsive Product Template",
    rating: 4.7,
    reviews: 98,
    duration: "1 Week",
    features: [
      "SEO Optimized Layout",
      "Hero & CTA Sections",
      "Smooth Scroll Animations",
      "Newsletter Form",
      "Responsive Grid Design",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "Gallery",
    title: "Gallery",
    category: "Web Applications",
    image:
     "/axiswebsite.png",
        
    description:
      "A sleek mobile UI concept for startup-focused applications. Prioritizes usability, onboarding experience, and aesthetic harmony.",
    budget: "$199",
    buyLink: "#",
    template: "Startup Mobile Kit",
    rating: 4.9,
    reviews: 176,
    duration: "2.5 Weeks",
    features: [
      "User Onboarding Flow",
      "Dashboard Screens",
      "Gesture Animations",
      "Notification Mockups",
      "Component Library",
    ],
    technologies: ["React Native", "Expo", "Figma"],
  },
 {
  id: "axis-landing",
  title: "Axis – Responsive Multi-Section Web App Template",
  category: "Web Application",
  image:
    "https://image.thum.io/get/https://adeeb199.github.io/Axis/",
  description:
    "A sleek and responsive productivity web application designed to help users organize tasks, track progress, and boost efficiency through a minimal and intuitive interface.",
  budget: "free",
  buyLink: "https://adeeb199.github.io/Axis/",
  template: "Axis – Responsive Multi-Section Web App Template",
  rating: 4.9,
  reviews: 13,
  duration: "3 Weeks",
  features: [
    "Responsive Landing Page Design",
    "Interactive Navigation & Animations",
    "Smooth Scroll and Hero Section",
    "Task Management UI Components",
    "Optimized for Performance & SEO",
  ],
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
}

];

  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-700 ${
          darkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-slate-800"
        }`}
      >
        <p className="text-lg font-semibold mb-4 text-red-500">
          Project not found
        </p>
        <Link href="/projects" className="text-indigo-500 underline">
          Back to Projects
        </Link>
      </div>
    );

  return (
    <section
      className={`min-h-screen py-20 transition-colors duration-700 ${
        darkMode ? "bg-slate-950 text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="flex items-center text-sm mb-6 hover:underline text-indigo-500"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        {/* Image & Info */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              quality={100}
              className="object-cover object-center hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p
              className={`text-sm uppercase tracking-wide mb-2 ${
                darkMode ? "text-pink-400" : "text-indigo-500"
              }`}
            >
              {project.category}
            </p>
            <p
              className={`mb-4 leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {project.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(project.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-slate-500">
                {project.rating} ({project.reviews} reviews)
              </span>
            </div>

            {/* Budget + Duration */}
            <div className="flex flex-wrap gap-6 mb-4">
              <p>
                <strong>Budget:</strong> {project.budget}
              </p>
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
              <p>
                <strong>Template:</strong> {project.template}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full ${
                      darkMode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul
                className={`list-disc ml-5 space-y-2 ${
                  darkMode ? "text-slate-400" : "text-slate-700"
                }`}
              >
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Buy Template Button */}
{/* Action Buttons (Live Demo + Download Code) */}
<div className="flex flex-wrap items-center gap-4 mt-6">
  {/* 🌐 Live Demo Button */}
  <Link
    href={project.buyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-lg"
  >
    <Globe className="w-5 h-5" /> Live Demo
  </Link>

  {/* 💾 Download Code Button */}
  <Link
    href="https://github.com/Adeeb199/Axis/archive/refs/heads/main.zip"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition-all duration-300 shadow-lg"
  >
    <ShoppingBag className="w-5 h-5" /> Download Code
  </Link>
</div>

       
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={`my-12 border-t ${
            darkMode ? "border-slate-700" : "border-slate-200"
          }`}
        ></div>

        {/* Related Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Looking for more?</h2>
          <p
            className={`max-w-xl mx-auto mb-6 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Explore more design and development projects — crafted with passion
            and precision.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Browse All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
