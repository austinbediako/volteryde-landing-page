"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute top-[25%] sm:top-[20%] md:top-[15%] left-1/2 -translate-x-1/2 w-[250%] sm:w-[150%] lg:w-[1849px] z-0 pointer-events-none opacity-[0.08] flex justify-center">
        <Image
          src="/assets/heroBackgroungImage.png"
          alt="Background Pattern"
          width={1849}
          height={1868}
          className="object-contain object-top"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-28 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-[64px] font-black text-[#1b3a1b] leading-tight mb-6 max-w-4xl"
        >
          Ride the Future, Today
          <br />
          with <span className="text-volteryde-green">Volteryde</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-500 text-base sm:text-lg mb-10 max-w-3xl leading-relaxed font-medium"
        >
          Book smarter, travel faster, and stay in control of your journey.
          <br className="hidden sm:block" />
          With real-time tracking, guaranteed seats, and seamless payments,{" "}
          <br className="hidden sm:block" />
          Volteryde transforms everyday commuting into a smooth, reliable
          experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/#get-volteryde"
            className="bg-volteryde-green text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all inline-block"
          >
            Download App Now
          </Link>
        </motion.div>
      </div>

      {/* Hero Section Image (Phones) */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex justify-center items-end mt-4 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/assets/heroSectionImage.png"
            alt="Volteryde App interface on multiple phones"
            width={1200}
            height={800}
            className="object-contain drop-shadow-2xl"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-56 bg-linear-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}
