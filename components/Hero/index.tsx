"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadSection from "../Download";
import DownloadModal from "../Common/EmailModal";
import Link from "next/link";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center overflow-hidden pt-24 md:py-20 md:pt-16 lg:min-h-screen lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-950/10"></div>

      {/* Animated shapes */}
      <div className="absolute left-10 top-20 h-40 w-40 animate-pulse rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"></div>
      <div className="absolute bottom-20 right-10 h-60 w-60 animate-pulse rounded-full bg-blue-200/30 blur-3xl delay-700 dark:bg-blue-900/20"></div>

      <div className="container mx-auto my-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-20">
          {/* Content section - Left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="z-10 w-full lg:w-1/2"
          >
            <div className="text-center lg:text-left">
              <span className="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                🔥 Elevate Your Learning Experience
              </span>

              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-5xl xl:text-6xl">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                  Learn Smarter
                </span>
                <br className="hidden sm:block" />
                <span className="inline-block">&</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  Faster
                </span>{" "}
                with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent dark:from-yellow-400 dark:to-orange-400">
                    AI
                  </span>
                  <span className="absolute bottom-1 left-0 -z-0 h-4 w-full skew-x-3 transform rounded-sm bg-yellow-300/70 dark:bg-yellow-500/50"></span>
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 lg:mx-0">
                PocketMind transforms any topic into visually stunning,
                interactive flashcards designed for{" "}
                <span className="font-semibold">10x better retention</span>.
                Master anything faster with AI-powered learning.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-indigo-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-700 sm:w-auto"
                >
                  <span>Download Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <Link
                  href="#features"
                  className="flex w-full items-center justify-center rounded-xl bg-gray-100 px-8 py-3.5 font-medium text-gray-800 transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Mobile download section - Only visible on small screens */}
            <div className="mt-8 block sm:hidden">
              <DownloadSection />
            </div>
          </motion.div>

          {/* Phone mockup - Right on desktop, bottom on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="z-10 mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-1/2"
          >
            <div className="relative max-w-sm">
              {/* Decorative elements */}
              <div className="absolute -right-6 -top-10 h-20 w-20 rounded-full bg-yellow-400/30 blur-xl dark:bg-yellow-400/10"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-400/30 blur-xl dark:bg-blue-400/10"></div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -left-6 -top-6 z-20"
              >
                <div className="flex items-center space-x-2 rounded-lg bg-white p-2 shadow-xl dark:bg-gray-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <span className="h-4 w-4 rounded-full bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                    AI-Powered
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -bottom-4 -right-4 z-20"
              >
                <div className="flex items-center space-x-2 rounded-lg bg-white p-2 shadow-xl dark:bg-gray-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <span className="h-4 w-4 rounded-full bg-purple-500"></span>
                  </span>
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                    10X Retention
                  </span>
                </div>
              </motion.div>

              {/* Phone frame */}
              <PhoneFrame
                showNotch={false}
                screenshot="/images/screenshots/1.png"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <DownloadModal visibility={showPopup} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
