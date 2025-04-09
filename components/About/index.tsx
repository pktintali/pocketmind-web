"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PhoneFrame from "../PhoneFrame";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:mt-10 md:py-24 lg:py-28 xl:py-32">
        <div className="absolute -right-40 -top-40 z-[-1] h-80 w-80 rounded-full bg-gradient-to-b from-blue-100 to-transparent opacity-30 blur-3xl dark:from-blue-950"></div>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-12 lg:gap-32.5">
            {/* Phone image - hidden on mobile */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 lg:w-5/12"
            >
              <div className="relative">
                <div className="absolute -bottom-10 -left-10 z-[-1] h-48 w-48 rounded-full bg-gradient-to-tr from-green-100 to-transparent blur-2xl dark:from-green-900"></div>
                <PhoneFrame screenshot="/images/screenshots/2.jpg" />
              </div>
            </motion.div>

            {/* Content section */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full md:w-1/2 lg:w-7/12"
            >
              <div className="rounded-lg">
                <span className="text-sm font-medium uppercase text-black dark:text-white sm:text-base">
                  <span className="mb-2 mr-2 inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs uppercase text-white shadow-sm sm:mb-4 sm:mr-4 sm:px-4.5 sm:text-metatitle">
                    New
                  </span>{" "}
                  Auto Detect Bot Bases On Query
                </span>
                <h2 className="relative mb-4 mt-3 text-2xl font-bold text-black dark:text-white sm:mb-6 sm:mt-4 sm:text-3xl xl:text-hero">
                  Fun and Easy Learning with{" "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-2 before:w-full before:rounded-md before:bg-gradient-to-r before:from-green-300 before:to-green-400 dark:before:from-green-700 dark:before:to-green-600 sm:before:h-3">
                    AI Bots
                  </span>
                </h2>
                <p className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg">
                  Say goodbye to boring text heavy learning and hello to
                  PocketMind. Where learning is fun and easy. Multiple bots are
                  available to help you learn in different way.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 rounded-xl p-1 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/40 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm dark:from-blue-900/30 dark:to-blue-900/10 sm:h-15 sm:w-15">
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 sm:text-metatitle2">
                        01
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-black dark:text-white sm:mb-2 sm:text-xl">
                        Gamified Learning Bots
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                        Bots like YesNo and Swiper help you learn in a fun and
                        gamified way.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl p-1 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/40 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-green-100 shadow-sm dark:from-green-900/30 dark:to-green-900/10 sm:h-15 sm:w-15">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400 sm:text-metatitle2">
                        02
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-black dark:text-white sm:mb-2 sm:text-xl">
                        Go Deep on Any Topic
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                        Just click on any heading given by bot to get a detailed
                        explanation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute -bottom-40 -left-40 z-[-1] h-80 w-80 rounded-full bg-gradient-to-t from-amber-100 to-transparent opacity-30 blur-3xl dark:from-amber-900"></div>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse items-center gap-8 sm:gap-10 lg:flex-row lg:gap-12 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-1/2 lg:w-7/12"
            >
              <div className="rounded-lg">
                <h4 className="inline-block rounded-lg bg-gradient-to-r from-amber-100 to-amber-50 px-3 py-1.5 text-sm font-medium uppercase text-amber-600 dark:bg-gradient-to-r dark:from-amber-900/40 dark:to-amber-900/20 dark:text-amber-400 sm:px-4 sm:py-2 sm:text-base">
                  Accelerate Your Learning with 🚀
                </h4>
                <h2 className="relative my-4 text-2xl font-bold text-black dark:text-white sm:my-6 sm:text-3xl xl:text-hero">
                  Beautiful & Engaging {"   "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-2 before:w-full before:rounded-md before:bg-gradient-to-r before:from-amber-300 before:to-amber-400 dark:before:from-amber-600 dark:before:to-orange-500 sm:before:h-3">
                    Flashcards
                  </span>
                </h2>
                <p className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg">
                  PocketMind helps you learn faster by providing flashcards and
                  highlights. Flashcards help you remember things faster and
                  better.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 rounded-xl p-1 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/40 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-amber-100 shadow-sm dark:from-amber-900/30 dark:to-amber-900/10 sm:h-15 sm:w-15">
                      <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 sm:text-metatitle2">
                        01
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                        Engage with interactive flashcards to reinforce your
                        learning and retain information more effectively.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl p-1 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/40 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-orange-100 shadow-sm dark:from-orange-900/30 dark:to-orange-900/10 sm:h-15 sm:w-15">
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 sm:text-metatitle2">
                        02
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                        Flashcard-based learning is effective because it
                        leverages active recall and spaced repetition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone image - hidden on mobile */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 lg:w-5/12"
            >
              <div className="relative">
                <div className="absolute -right-10 -top-10 z-[-1] h-48 w-48 rounded-full bg-gradient-to-bl from-amber-200 to-transparent blur-2xl dark:from-amber-800"></div>
                <PhoneFrame screenshot="/images/screenshots/3.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About 3 Start ===== --> */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="absolute -top-40 right-0 z-[-1] h-96 w-96 rounded-full bg-gradient-to-b from-pink-100 to-transparent opacity-30 blur-3xl dark:from-pink-900"></div>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-12 lg:gap-32.5">
            {/* Phone image - hidden on mobile */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 lg:w-5/12"
            >
              <div className="relative">
                <div className="absolute -bottom-10 -left-10 z-[-1] h-48 w-48 rounded-full bg-gradient-to-tr from-pink-200 to-transparent blur-2xl dark:from-pink-800"></div>
                <PhoneFrame screenshot="/images/screenshots/4.jpg" />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full md:w-1/2 lg:w-7/12"
            >
              <div className="rounded-lg">
                <span className="inline-block rounded-lg bg-gradient-to-r from-pink-100 to-pink-50 px-3 py-1.5 text-sm font-medium uppercase text-pink-600 dark:bg-gradient-to-r dark:from-pink-900/40 dark:to-pink-900/20 dark:text-pink-400 sm:px-4 sm:py-2 sm:text-base">
                  Download flashcards to read later or offline
                </span>
                <h2 className="relative my-4 text-2xl font-bold text-black dark:text-white sm:my-6 sm:text-3xl xl:text-hero">
                  Download & Learn Even{" "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-2 before:w-full before:rounded-md before:bg-gradient-to-r before:from-pink-300 before:to-pink-400 dark:before:from-pink-700 dark:before:to-pink-600 sm:before:h-3">
                    Offline
                  </span>
                </h2>
                <p className="text-base leading-relaxed sm:text-lg">
                  You can download any bot result to read later or even offline.
                  This feature ensures that you have access to your learning
                  materials anytime, anywhere, without needing an internet
                  connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About 3 End ===== --> */}
    </>
  );
};

export default About;
