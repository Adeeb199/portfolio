"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../store/useStore";

export default function Templates() {
  const darkMode = useStore((state) => state.darkMode);
  const [showModal, setShowModal] = useState(false);
const [selectedPlan, setSelectedPlan] = useState(null);


  const plans = [
    {
      name: "Template",
      price: "$29",
      feature: "Ready-to-use UI templates for developers & designers.",
      features: [
        "Responsive React & Next.js Templates",
        "Modern Tailwind Styling",
        "Animation Included (Framer Motion)",
        "Basic Email Support",
      ],
      cta: "Let's Talk",
      popular: false,
    },
    {
      name: "Complete Project",
      price: "$99",
      feature: "Full ready-to-deploy projects with complete functionality.",
      features: [
        "End-to-End Working Projects",
        "Optimized Code & SEO Ready",
        "Firebase / MongoDB Integration",
        "Priority Support & Customization",
      ],
      cta: "Let's Talk",
      popular: true,
    },
    {
      name: "Custom Order",
      price: null,
      feature: "Tailored web solutions built from scratch just for you.",
      features: [
        "Custom Design & Features",
        "One-to-One Consultation",
        "Deployment Assistance",
        "Long-Term Maintenance Option",
      ],
      cta: "Let's Talk",
      popular: false,
    },
  ];

  return (
    <section
      id="templates"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950"
          : "bg-gradient-to-b from-white via-slate-50 to-slate-100"
      }`}
    >
      {/* Background Glow Effects */}
      <div
        className={`absolute top-20 -left-10 w-72 h-72 blur-3xl rounded-full animate-pulse ${
          darkMode ? "bg-indigo-700/20" : "bg-indigo-400/20"
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full animate-pulse ${
          darkMode ? "bg-pink-700/20" : "bg-pink-400/20"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-extrabold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Buy Templates or Complete Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`mt-3 text-lg ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Choose from high-quality templates or get a fully custom-built web project.
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {plans.map((p, i) => {
            const popular = p.popular;

            const bgColor = popular
              ? "bg-gradient-to-br from-indigo-600 to-purple-600"
              : darkMode
              ? "bg-slate-800"
              : "bg-white";

            const textColor = popular
              ? "text-white"
              : darkMode
              ? "text-slate-100"
              : "text-slate-900";

            const featureColor = popular
              ? "text-white/80"
              : darkMode
              ? "text-slate-300"
              : "text-slate-700";

            const buttonBg = popular
              ? "bg-white text-indigo-600 hover:bg-white/90 shadow-lg shadow-indigo-400/20"
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md";

            return (
              <motion.div
                key={i}
                className={`relative p-8 rounded-2xl transition-all duration-500 cursor-pointer ${bgColor} ${textColor} hover:scale-105 hover:shadow-2xl`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <h4 className="text-xl font-semibold">{p.name}</h4>

                <div className="mt-4 text-4xl font-extrabold">
                  {p.price ? (
                    <>
                      {p.price}
                      <span className="text-base font-medium opacity-70">
                        /one-time
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">Let's Talk</span>
                  )}
                </div>

                <p className={`mt-4 text-sm opacity-80 ${featureColor}`}>
                  {p.feature}
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center md:justify-start gap-2 ${featureColor}`}
                    >
                      <span className="text-green-500">✔</span> {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-8 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${buttonBg}`}
                  onClick={() => {
                    setSelectedPlan(p.name);
                    setShowModal(true);
                  }}
                >
                  {p.cta}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 💬 Contact Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />

            {/* Modal Box */}
            <motion.div
              className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md ${
                darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Talk 💬</h3>
              <p className="text-sm opacity-80 mb-6">
                You selected: <span className="font-semibold">{selectedPlan}</span> <br />
                Tell me a bit about your needs — I’ll recommend the best approach for your project.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:your@email.com?subject=Let's Talk about ${selectedPlan}`}
                  className="block w-full py-3 rounded-lg text-center font-semibold bg-indigo-600 hover:bg-indigo-700 transition-all"
                >
                  📧 Email Me
                </a>
                <a
                  href={`https://wa.me/923420501829?text=Hi%20Adeeb!%20I'm%20interested%20in%20your%20${selectedPlan}%20plan.`}
                  target="_blank"
                  className="block w-full py-3 rounded-lg text-center font-semibold bg-green-600 hover:bg-green-700 transition-all"
                >
                  💬 WhatsApp
                </a>
             <button
  onClick={() => setShowModal(false)}
  className={`w-full py-3 rounded-lg font-semibold border transition-all duration-300 ${
    darkMode
      ? "border-slate-600 text-white hover:bg-slate-700 hover:text-white"
      : "border-slate-400 text-slate-800 hover:bg-slate-200 hover:text-slate-900"
  }`}
>
   Close
</button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
