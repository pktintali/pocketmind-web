"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 dark:from-blacksection dark:to-blacksection lg:py-25 xl:py-30">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -right-20 -top-20 -z-1 hidden md:block">
            <Image
              width={500}
              height={500}
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="opacity-60 dark:hidden"
            />
            <Image
              width={500}
              height={500}
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden opacity-60 dark:block"
            />
          </div>

          <div className="mb-12 text-center md:mb-16">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              FAQs
            </motion.span>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-body-color dark:text-body-color-dark mx-auto max-w-2xl"
            >
              Everything you need to know about PocketMind and how it works
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="shadow-faq overflow-hidden rounded-2xl bg-white backdrop-blur-lg dark:border dark:border-strokedark dark:bg-blacksection/60">
              {faqData.map((faq, key) => (
                <FAQItem
                  key={key}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center md:mt-16"
          >
            <a
              href="/support"
              className="hover:shadow-signUp inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3 font-medium text-white hover:bg-opacity-90"
            >
              <span>Still have questions?</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
