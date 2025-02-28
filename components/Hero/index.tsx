"use client";
import Image from "next/image";
import { useState } from "react";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadSection from "../Download";
const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:-mt-12 md:ml-12 md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 Elevate Your Digital Learning Experience
            </h4>
            <div className="mt-10 md:hidden">
              <PhoneFrame
                showNotch={false}
                screenshot="/images/screenshots/1.png"
              />
              <div className="mt-10">
                <DownloadSection />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-gray-100 xl:text-5xl">
              Learn Smarter & Faster with{" "}
              <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-2 before:w-full before:bg-yellow-300 dark:before:bg-yellow-500">
                AI
              </span>
            </h1>
            <p className="mb-8 text-base text-gray-600 dark:text-gray-300">
              PocketMind is the ultimate AI flashcard generator app that turns
              any topic into visually stunning, interactive flashcards designed
              for 10x better retention.
            </p>
            <div className="mt-12 hidden md:flex">
              <form action="https://formbold.com/s/obGDk" method="POST">
                <div className="flex flex-wrap gap-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-blue-600 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="animate_right -mt-10 hidden md:w-1/2 lg:block">
            <div className="relative">
              <Image
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -top-6 left-25 z-10"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute bottom-0 right-32 z-10"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="absolute bottom-0 right-28 z-1"
              />
              <PhoneFrame
                showNotch={false}
                screenshot="/images/screenshots/1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
