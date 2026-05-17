import { Footer, Navbar } from "@/components/global";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0CCF0E",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Volteryde",
    default: "Book Electric Buses in Accra | Volteryde - Ride the Future, Today",
  },
  description:
    "Ride the Future, Today with Volteryde. Book electric buses instantly, track your ride in real-time, and enjoy seamless payments. Ghana's smart commuting app.",
  keywords: [
    "electric bus Ghana",
    "book bus ride Accra",
    "public transport app",
    "eco-friendly commute",
    "real-time bus tracking",
    "cashless payments Ghana",
    "sustainable transport",
    "Volteryde",
  ],
  authors: [{ name: "Volteryde" }],
  creator: "Volteryde",
  publisher: "Volteryde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://volteryde.com"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png?v=3",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png?v=3",
      },
    ],
  },
  openGraph: {
    title: "Volteryde | Book Smart Electric Bus Rides - Ride the Future, Today",
    description:
      "Ride the Future, Today. Download Volteryde and experience seamless electric bus commuting in Accra with real-time tracking and cashless payments.",
    url: "https://volteryde.com",
    type: "website",
    siteName: "Volteryde",
    images: [
      {
        url: "https://volteryde.com/og_image.png",
        secureUrl: "https://volteryde.com/og_image.png",
        width: 1200,
        height: 630,
        alt: "Volteryde - Book Electric Bus Rides in Ghana",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volteryde - Ride the Future, Today",
    description:
      "Book electric buses, track rides in real-time, pay seamlessly. Download Volteryde now on Google Play and App Store.",
    images: ["https://volteryde.com/og_image.png"],
    creator: "@volteryde",
    site: "@volteryde",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Volteryde",
    description:
      "Volteryde is a mobility operator and platform company that provides technology-enabled systems for mass transit operations in Ghana and beyond.",
    url: "https://volteryde.com",
    logo: "https://volteryde.com/mainlogo.png",
    foundingDate: "2025",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GH",
        addressLocality: "Accra",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Accra",
      addressCountry: "GH",
    },
    sameAs: [
      "https://x.com/volteryde",
      "https://www.instagram.com/volterydeghana/",
      "https://www.facebook.com/volteryde",
      "https://www.linkedin.com/company/volteryde/",
      "https://www.tiktok.com/@volteryde",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233534544454",
      email: "info@volteryde.com",
      contactType: "customer service",
      areaServed: "GH",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
      addressLocality: "Accra",
    },
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Volteryde",
    operatingSystem: "Android, iOS",
    applicationCategory: "TransportationApplication",
    description:
      "Book electric bus rides in Ghana. Track your bus, pay securely, and enjoy eco-friendly transportation. Ride the Future, Today.",
    url: "https://volteryde.com",
    image: "https://volteryde.com/og_image.png",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free to download",
    },
    author: {
      "@type": "Organization",
      name: "VolteRyde",
      url: "https://volteryde.org",
    },
    areaServed: {
      "@type": "City",
      name: "Accra",
      addressCountry: "GH",
    },
    availableLanguage: "en",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppJsonLd),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
