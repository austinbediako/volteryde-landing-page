"use client";
import { titleVariants } from "@/libs/animation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const cards = [
  {
    title: "Always On Time",
    description:
      "Say goodbye to long waits and uncertainty. Our scheduled trips ensure your bus arrives when you expect it — every time.",
    bgImage: "/assets/carousel1.png",
    overlay: "bg-gradient-to-b from-black/80 via-black/40 to-transparent",
    imageClass: "object-cover",
    cta: { label: "Get Started", href: "/#get-volteryde" },
    textPosition: "top" as const,
  },
  {
    title: "Live Trip Tracking",
    description:
      "Track your ride in real-time from your phone. Know exactly where your bus is and when it will arrive.",
    bgImage: "/assets/carousel2.png",
    overlay:
      "bg-gradient-to-t from-[#0a380a]/95 via-[#136613]/60 to-transparent",
    bgColor: "bg-[#187a18]",
    imageClass: "object-cover",
    cta: undefined,
    textPosition: "bottom" as const,
  },
  {
    title: "Seamless Payments",
    description:
      "Pay easily with your digital wallet. No cash, no stress — just quick and secure transactions.",
    bgImage: "/assets/carousel3.png",
    overlay:
      "bg-gradient-to-b from-[#7E6420]/90 via-[#7E6420]/60 to-transparent",
    imageClass: "object-cover",
    cta: undefined,
    textPosition: "top" as const,
  },
  {
    title: "Cleaner Rides",
    description:
      "Enjoy zero-emission electric buses built for your city. Better for you, better for the planet.",
    bgImage: "/assets/carousel4.png",
    overlay: "bg-gradient-to-t from-black/90 via-black/50 to-transparent",
    imageClass: "object-cover",
    cta: undefined,
    textPosition: "bottom" as const,
  },
];

const WhyChooseVolteryde = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
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

      {/* Carousel — bleeds fully to the right edge of the screen (100vw) */}
      <div
        className="flex gap-5 md:gap-6 overflow-x-auto pb-12 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth [--pl:16px] sm:[--pl:32px] md:[--pl:48px] [--cards-to-show:1.15] sm:[--cards-to-show:2.15] md:[--cards-to-show:2.5] lg:[--cards-to-show:3.5] [--gaps-to-show:1] sm:[--gaps-to-show:2] md:[--gaps-to-show:2] lg:[--gaps-to-show:3] [--gap-size:1.25rem] md:[--gap-size:1.5rem]"
        style={
          {
            paddingLeft: "max(var(--pl), calc(50vw - 600px))",
            "--available-width":
              "calc(100vw - max(var(--pl), calc(50vw - 600px)))",
            "--total-gap-width": "calc(var(--gaps-to-show) * var(--gap-size))",
            "--card-width":
              "calc((var(--available-width) - var(--total-gap-width)) / var(--cards-to-show))",
          } as React.CSSProperties
        }
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            className={`group relative flex-none h-[480px] rounded-[32px] overflow-hidden snap-start ${
              card.bgColor || "bg-black"
            }`}
            style={{ width: "var(--card-width)" }}
          >
            <Image
              src={card.bgImage}
              alt={card.title}
              fill
              className={`transition-transform duration-700 group-hover:scale-105 ${card.imageClass}`}
              aria-hidden="true"
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
          </motion.div>
        ))}

        {/* Spacer to allow full scroll of the last card without clipping */}
        <div
          className="flex-none snap-end"
          style={{ width: "max(var(--pl), calc(50vw - 600px))" }}
        />
      </div>
    </section>
  );
};

export default WhyChooseVolteryde;
