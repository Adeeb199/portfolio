
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";

export default function PDFGallery() {
  const darkMode = useStore((state) => state.darkMode);

  const pdfs = [
    {
      title: "Project Case Study",
      link: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
    {
      title: "Resume / CV",
      link: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
    {
      title: "Design Document",
      link: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
     {
      title: "Project Case Study",
      link: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
    {
      title: "Resume / CV",
      link: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
    {
      title: "Design Document",
      link: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
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

        <div className="grid md:grid-cols-3 gap-12 place-items-center">
          {pdfs.map((pdf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
                transition: { type: "spring", stiffness: 200 },
              }}
              className={`relative w-full max-w-sm p-6 rounded-3xl shadow-2xl border overflow-hidden transition-all duration-700 backdrop-blur-xl ${
                darkMode
                  ? "bg-slate-800/70 border-slate-700 hover:border-indigo-500/60"
                  : "bg-white/80 border-slate-200 hover:border-indigo-400/60"
              }`}
              style={{ perspective: "1000px" }}
            >
              {/* PDF Preview */}
              <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-600 shadow-inner">
                <iframe
                  src={pdf.link}
                  className="w-full h-full"
                  title={pdf.title}
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-semibold mt-6 mb-4 ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {pdf.title}
              </h3>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <motion.a
                  href={pdf.link}
                  target="_blank"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white shadow-md hover:shadow-lg hover:shadow-indigo-500/40 transition-all"
                >
                  View Online
                </motion.a>
                <motion.a
                  href={pdf.link}
                  download
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium shadow-md transition-all ${
                    darkMode
                      ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                      : "bg-slate-200 text-slate-900 hover:bg-slate-300"
                  }`}
                >
                  Download
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
