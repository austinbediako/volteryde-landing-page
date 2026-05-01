"use client";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-volteryde-green px-6 sm:px-10 lg:px-16 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/30">
          {/* Left — logo + tagline */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src={Logo}
                alt="Volteryde Logo"
                width={100}
                height={50}
                className="object-contain w-[100px] h-auto"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Empowering sustainable movement across Africa with electric
              transport and intelligent mobility solutions.
            </p>
          </div>

          {/* Right — contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Email: info@volteryde.com</p>
              <p>Phone: +233 534544454</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-white text-sm mt-8">
          © {currentYear} Volteryde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
