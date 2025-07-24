"use client";
import React from "react";
import { Ghost, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BookNotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex flex-col items-center space-y-4 p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-sm w-full"
      >
        <Ghost size={64} className="text-indigo-500 animate-pulse" />
        <h1 className="text-3xl font-bold text-center">Book Not Found</h1>
        <p className="text-center text-gray-600">
          Oops! The book you're looking for doesn't exist in our cozy library.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-600 transition"
          onClick={() => alert("Haha! You liked a missing book.")}
        >
          <ThumbsUp size={20} />
          <span>Like</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
