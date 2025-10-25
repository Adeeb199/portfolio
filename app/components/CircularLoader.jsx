"use client";
import React from "react";

export default function CircularLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-[9999]">
      <div className="relative w-20 h-20">
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-slate-700" />
        {/* Animated gradient spinner */}
        <div className="absolute inset-0 rounded-full border-4 border-t-indigo-500 border-r-purple-500 border-b-pink-500 border-l-transparent animate-spin shadow-lg"></div>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
