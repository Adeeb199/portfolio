"use client";
import React from "react";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { useStore } from "../store/useStore";

export default function Footer() {
  const darkMode = useStore((state) => state.darkMode);

  const socialLinks = [
    { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/adeebibrahim" },
    { icon: <Github size={16} />, href: "https://github.com/adeebibrahim" },
    { icon: <Instagram size={16} />, href: "https://instagram.com/adeebibrahim" },
    { icon: <Mail size={16} />, href: "mailto:adeeb.ibrahim@example.com" },
  ];

  return (
    <footer
      id="footer"
      className={`py-10 border-t transition-colors duration-700 ${
        darkMode
          ? "bg-slate-950 border-slate-800 text-slate-300"
          : "bg-slate-100 border-slate-200 text-slate-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Left — Brand */}
        <div>
          <h3
            className={`text-2xl font-bold transition-colors ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Adeeb Ibrahim
          </h3>
          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Frontend Developer • Pakistan 🇵🇰
          </p>
        </div>

        {/* Middle — Links */}
        <div className="flex gap-5 text-sm">
          {["Home", "About", "Projects", "Contact"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className={`transition-colors duration-500 ${
                darkMode
                  ? "hover:text-pink-400 text-slate-400"
                  : "hover:text-indigo-600 text-slate-700"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right — Social */}
        <div className="flex gap-3">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ${
                darkMode
                  ? "bg-slate-800 hover:bg-pink-600 text-slate-300"
                  : "bg-slate-200 hover:bg-indigo-600 text-slate-700"
              }`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className={`mt-6 text-xs text-center transition-colors ${
          darkMode ? "text-slate-500" : "text-slate-600"
        }`}
      >
        © 2025 Adeeb Ibrahim. Built with ❤️ using Next.js & TailwindCSS.
      </div>
    </footer>
  );
}
