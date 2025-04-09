"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Footer Main Content */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
              {/* Logo and Description */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top lg:col-span-6"
              >
                <Link href={"/"} className="mb-6 inline-block">
                  <div className="flex items-center">
                    <Image
                      src="/images/logo/pocketmind_logo.png"
                      alt="PocketMind Logo"
                      width={58}
                      height={58}
                      className="rounded-xl"
                    />
                    <span className="ml-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                      PocketMind
                    </span>
                  </div>
                </Link>

                <p className="text-body-color dark:text-body-color-dark mb-8 max-w-md text-base">
                  A new way to learn with AI - learn anything, anytime,
                  anywhere. Transform your learning experience with our
                  cutting-edge AI technology.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="http://instagram.com/pocketmind_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="http://x.com/pocketmind_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Quick Links and Support Sections - Redesigned */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top lg:col-span-6"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Quick Links Section */}
                  <div className="rounded-xl border border-stroke/20 bg-white/50 p-6 backdrop-blur-sm dark:border-strokedark/10 dark:bg-blacksection/50">
                    <h4 className="mb-6 inline-flex items-center text-xl font-semibold text-black dark:text-white">
                      <svg
                        className="mr-2 h-5 w-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Quick Links
                    </h4>

                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/"
                          className="text-body-color dark:text-body-color-dark group inline-flex items-center text-base transition-all duration-300 hover:text-primary dark:hover:text-primary"
                        >
                          <span className="bg-body-color/50 dark:bg-body-color-dark/50 mr-3 h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/features"
                          className="text-body-color dark:text-body-color-dark group inline-flex items-center text-base transition-all duration-300 hover:text-primary dark:hover:text-primary"
                        >
                          <span className="bg-body-color/50 dark:bg-body-color-dark/50 mr-3 h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing"
                          className="text-body-color dark:text-body-color-dark group inline-flex items-center text-base transition-all duration-300 hover:text-primary dark:hover:text-primary"
                        >
                          <span className="bg-body-color/50 dark:bg-body-color-dark/50 mr-3 h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Support Section */}
                  <div className="rounded-xl border border-stroke/20 bg-white/50 p-6 backdrop-blur-sm dark:border-strokedark/10 dark:bg-blacksection/50">
                    <h4 className="mb-6 inline-flex items-center text-xl font-semibold text-black dark:text-white">
                      <svg
                        className="mr-2 h-5 w-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Help & Support
                    </h4>

                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/support"
                          className="text-body-color dark:text-body-color-dark group inline-flex items-center text-base transition-all duration-300 hover:text-primary dark:hover:text-primary"
                        >
                          <span className="bg-body-color/50 dark:bg-body-color-dark/50 mr-3 h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy"
                          className="text-body-color dark:text-body-color-dark group inline-flex items-center text-base transition-all duration-300 hover:text-primary dark:hover:text-primary"
                        >
                          <span className="bg-body-color/50 dark:bg-body-color-dark/50 mr-3 h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/terms"
                          className="text-body-color dark:text-body-color-dark group inline-flex items-center text-base transition-all duration-300 hover:text-primary dark:hover:text-primary"
                        >
                          <span className="bg-body-color/50 dark:bg-body-color-dark/50 mr-3 h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between gap-5 border-t border-stroke py-7 dark:border-strokedark md:flex-row">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p className="text-body-color dark:text-body-color-dark text-center text-base md:text-left">
                &copy; {new Date().getFullYear()} PocketMind. All rights
                reserved.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="text-body-color dark:text-body-color-dark inline-block text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary"
                >
                  English
                </Link>
                <span className="bg-body-color/50 dark:bg-body-color-dark/50 h-2 w-2 rounded-full"></span>
                <Link
                  href="/terms"
                  className="text-body-color dark:text-body-color-dark inline-block text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary"
                >
                  Terms
                </Link>
                <span className="bg-body-color/50 dark:bg-body-color-dark/50 h-2 w-2 rounded-full"></span>
                <Link
                  href="/privacy"
                  className="text-body-color dark:text-body-color-dark inline-block text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary"
                >
                  Privacy
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
