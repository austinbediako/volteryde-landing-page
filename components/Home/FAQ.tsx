"use client";
import { faqs } from "@/mock";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#FCFCFC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#1b3a1b] mb-12 text-center">
          Frequently Asked Questions(FAQs)
        </h2>

        <div className="w-full max-w-4xl mx-auto space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-[32px] overflow-hidden"
              style={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[#1b3a1b] text-base md:text-xl pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="#1b3a1b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-10 pb-6 md:pb-8 text-[#5b735b] text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
