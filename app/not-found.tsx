import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Volteryde",
  description: "The page you're looking for doesn't exist. Head back to Volteryde and book your next electric bus ride.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        {/* Large 404 */}
        <p className="text-[120px] font-black text-[#0CCF0E] leading-none mb-4 select-none">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1b3a1b] mb-3">
          This stop doesn&apos;t exist
        </h1>

        <p className="text-gray-500 text-base sm:text-lg mb-10 leading-relaxed">
          Looks like you&apos;ve taken a wrong turn. The page you&apos;re looking
          for has moved, been removed, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-volteryde-green text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/#get-volteryde"
            className="border-2 border-volteryde-green text-volteryde-green px-8 py-4 rounded-full font-bold text-base hover:bg-[#F0FDF4] transition-colors"
          >
            Download App
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Ride the Future, Today —{" "}
          <a href="mailto:info@volteryde.com" className="text-[#0CCF0E] hover:underline">
            Contact us
          </a>{" "}
          if you need help.
        </p>
      </div>
    </main>
  );
}
