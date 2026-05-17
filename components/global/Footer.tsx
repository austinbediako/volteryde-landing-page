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
          <div className="max-w-xs">
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
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering sustainable movement across Africa with electric
              transport and intelligent mobility solutions.
            </p>
          </div>

          {/* Middle — quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#get-volteryde" className="hover:text-white transition-colors">
                  Download App
                </Link>
              </li>
              <li>
                <a
                  href="https://volteryde.org"
                  title="About VolteRyde Company"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://volteryde.org/careers"
                  title="Career Opportunities at VolteRyde"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Right — contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/80 text-sm mb-6">
              <p>
                <a href="mailto:info@volteryde.com" className="hover:text-white transition-colors">
                  info@volteryde.com
                </a>
              </p>
              <p>
                <a href="tel:+233534544454" className="hover:text-white transition-colors">
                  +233 534 544 454
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 flex-wrap">
              {/* X / Twitter */}
              <a
                href="https://x.com/volteryde"
                aria-label="VolteRyde on X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/volterydeghana"
                aria-label="VolteRyde on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com/@volteryde"
                aria-label="VolteRyde on TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/volteryde"
                aria-label="VolteRyde on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/volteryde"
                aria-label="VolteRyde on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-white/70 text-sm mt-8">
          © {currentYear} Volteryde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
