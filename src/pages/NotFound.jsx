import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingBag, FaHome, FaArrowLeft } from "react-icons/fa";

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const NotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></div>

      {/* Floating Circles */}
      <motion.div
        {...floatingAnimation}
        className="absolute top-20 left-20 w-24 h-24 border border-white/10 rounded-full"
      />

      <motion.div
        {...floatingAnimation}
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-24 w-16 h-16 border border-amber-300/20 rounded-full"
      />

      <div className="relative z-10 max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-amber-300 text-sm font-medium backdrop-blur-md border border-white/10"
          >
            Oops! Page Not Found
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl lg:text-8xl font-extrabold text-white mt-6 leading-none"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl lg:text-5xl font-bold text-white mt-4"
          >
            Lost in Shopping?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 mt-6 text-lg leading-relaxed max-w-lg"
          >
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable. Let’s get you back to shopping.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-amber-300 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-300/20"
            >
              <FaHome className="w-4 h-4" />
              Back To Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Main Card */}
          <div className="relative w-[340px] h-[340px] rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center">
            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-[40px] border-2 border-dashed border-amber-300/30"
            />

            {/* Shopping Icon */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="w-36 h-36 rounded-full bg-amber-300 flex items-center justify-center shadow-2xl shadow-amber-300/40">
                <FaShoppingBag className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            {/* Floating Product Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10"
            />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-20 h-20 rounded-2xl bg-amber-300/20 backdrop-blur-md border border-amber-300/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
