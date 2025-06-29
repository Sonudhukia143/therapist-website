"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "A 24-hour notice is required for all cancellations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#f0f9f9] py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1f3b3a] mb-10">
          💬 Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#d0eae8] shadow-md rounded-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none hover:bg-[#e6f4f3] transition duration-300 rounded-xl cursor-pointer"
                >
                  <span className="text-lg font-semibold text-[#153e3c]">
                    {item.question}
                  </span>
                  <span className="text-xl text-[#1f3b3a]">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 overflow-hidden text-[#2c4b49]"
                    >
                      <motion.div
                        className="pb-5 text-md leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
