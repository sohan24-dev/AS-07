"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[62vh] flex items-center justify-center bg-linear-to-br from-gray-900 to-black text-white px-4">
      
      <div className="text-center max-w-xl">
        
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-9xl font-bold text-green-500"
        >
          404
        </motion.h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-3">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-medium transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}