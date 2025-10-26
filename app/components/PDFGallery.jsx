"use client";

import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";

export default function PDFGallery() {
  const darkMode = useStore((state) => state.darkMode);

  const pdfs = [
    {
      title: "Project Case Study",
      description: "Detailed overview of project workflows and results.",
      link: "/sandeepsingh-portfolio.pdf",
    },
    {
      title: "Resume / CV",
      description: "My professional experience and education details.",
      link: "/Sandeep-sindu.pdf",
    },
    {
      title: "Business Card",
      description: "Design and contact info showcased in PDF format.",
      link: "/Businesscard.pdf",
    },
    {
      title: "Business Card",
      description:
        "Professional presentation showcasing services, mission, and brand identity — ideal for client demos or meetings.",
      link: "/Businesscard.pdf", // Actual PowerPoint file
    },
  ];

  return (
    <section
      className={`relative overflow-hidden py-28 transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/25 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-6 text-5xl md:text-6xl font-extrabold mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-indigo-300 dark:to-pink-400"
        >
          My Professional Library 📂
        </motion.h2>

        {/* Updated grid to 4 columns */}
        <div className="grid md:grid-cols-4 gap-10 place-items-center">
          {pdfs.map((pdf, index) => {
            const isPPT = pdf.link.endsWith(".pptx") || pdf.link.endsWith(".ppt");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm cursor-pointer"
                onClick={() => {
                  if (isPPT) {
                    window.open(pdf.link, "_blank");
                  }
                }}
              >
                <div className="relative w-full h-[380px] perspective">
                  <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
                    {/* Front */}
                    <div
                      className={`absolute w-full h-full rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center backface-hidden transition-colors duration-700 ${
                        darkMode
                          ? "bg-slate-800/80 border border-slate-700"
                          : "bg-white/90 border border-slate-200"
                      }`}
                    >
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          darkMode ? "text-slate-100" : "text-slate-900"
                        }`}
                      >
                        {pdf.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base text-center ${
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {pdf.description}
                      </p>
                      <span
                        className={`mt-4 text-xs ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {isPPT ? "Click to download or open file" : "Click to view full PDF"}
                      </span>
                    </div>

                    {/* Back */}
                    <div
                      className={`absolute w-full h-full rounded-3xl shadow-2xl overflow-hidden rotate-y-180 backface-hidden transition-colors duration-700 ${
                        darkMode
                          ? "bg-slate-900/80 border border-slate-700"
                          : "bg-white/90 border border-slate-200"
                      }`}
                    >
                      {isPPT ? (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_PowerPoint_2013_logo.svg"
                            alt="PowerPoint Icon"
                            className="w-20 h-20 mb-4 opacity-80"
                          />
                          <p
                            className={`text-sm ${
                              darkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Click to download presentation
                          </p>
                        </div>
                      ) : (
                        <iframe
                          src={pdf.link + "#toolbar=0&navpanes=0&scrollbar=0"}
                          className="w-full h-full rounded-3xl border-0"
                          title={pdf.title}
                        >
                          Your browser does not support PDFs.
                        </iframe>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
