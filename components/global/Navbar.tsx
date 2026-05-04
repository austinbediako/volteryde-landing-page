"use client";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b py-2 border-[#F5F5F5]">
      <div className="w-full px-4 sm:px-8 md:px-12 flex items-center justify-between mx-auto max-w-[1600px]">
        <Link href="/">
          <Image
            src={Logo}
            alt="Volteryde Logo"
            width={140}
            height={50}
            className="object-contain w-24 sm:w-28 h-auto"
            priority
          />
        </Link>
        <Link
          href="/#get-volteryde"
          className="bg-volteryde-green text-white px-6 sm:px-8 py-2.5 rounded-full font-bold text-sm sm:text-base hover:opacity-90 transition-opacity"
        >
          Get App
        </Link>
      </div>
    </header>
  );
}
