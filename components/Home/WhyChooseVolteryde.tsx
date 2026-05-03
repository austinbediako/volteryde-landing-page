"use client";
import { titleVariants } from "@/libs/animation";
import { cards } from "@/mock";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const WhyChooseVolteryde = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-16 md:py-24 bg-white" ref={ref}>
      {/* Centered header */}
      <div className="text-center mb-12 px-4 sm:px-8 lg:px-16">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-4xl md:text-[56px] font-black text-[#1b3a1b] mb-6"
        >
          Why Choose Volteryde
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#5b735b] text-base sm:text-lg max-w-2xl mx-auto font-medium"
        >
          A smarter, cleaner, and more reliable way to move — built around your
          everyday needs.
        </motion.p>
      </div>

      {/* Normal Horizontal Flex Layout */}
      <div className="w-full pb-12 overflow-hidden">
        <div className="flex overflow-x-auto gap-5 md:gap-6 px-4 sm:px-8 lg:px-[max(4rem,calc(40vw-560px))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group flex-none w-[85vw] sm:w-[350px] md:w-[400px] lg:w-[450px] relative h-[480px] md:h-[540px] rounded-[32px] overflow-hidden ${
                card.bgColor || "bg-black"
              }`}
            >
              <Image
                src={card.bgImage}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`transition-transform duration-700 group-hover:scale-105 ${card.imageClass}`}
                aria-hidden="true"
                priority={i === 0}
              />

              <div
                className={`absolute inset-0 pointer-events-none ${card.overlay}`}
              />

              <div
                className={`absolute left-0 right-0 p-8 ${
                  card.textPosition === "top" ? "top-0" : "bottom-0"
                } pointer-events-none`}
              >
                <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
                {card.cta && (
                  <Link
                    href={card.cta.href}
                    className="mt-6 inline-block bg-[#00D000] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg pointer-events-auto"
                  >
                    {card.cta.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVolteryde;
