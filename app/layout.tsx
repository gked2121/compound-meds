import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-base",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://compoundmeds.com'),
  title: {
    default: "CompoundMeds | Premium Pharmaceutical Sourcing for Pharmacies & Clinics",
    template: "%s | CompoundMeds"
  },
  description: "Trusted pharmaceutical sourcing partner for 500+ pharmacies and clinics. FDA-registered APIs, sterile vials, and compounded medications. Free overnight shipping, Net 30 terms, no minimums. Products in stock stateside.",
  keywords: [
    "pharmaceutical sourcing",
    "compounding pharmacy supplier",
    "GLP-1 peptides",
    "semaglutide supplier",
    "tirzepatide supplier",
    "FDA registered APIs",
    "sterile vials",
    "compounded medications",
    "pharmacy wholesale",
    "peptide supplier",
    "NAD+ supplier",
    "tesamorelin",
    "sermorelin",
    "pharmaceutical distributor",
    "clinic pharmacy supplies"
  ],
  authors: [{ name: "CompoundMeds" }],
  creator: "CompoundMeds",
  publisher: "CompoundMeds",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://compoundmeds.com",
    siteName: "CompoundMeds",
    title: "CompoundMeds | Premium Pharmaceutical Sourcing Partner",
    description: "Trusted pharmaceutical sourcing for 500+ pharmacies and clinics. FDA-registered APIs, free overnight shipping, Net 30 terms, no minimums.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CompoundMeds - Premium Pharmaceutical Sourcing Partner"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompoundMeds | Premium Pharmaceutical Sourcing Partner",
    description: "Trusted pharmaceutical sourcing for 500+ pharmacies and clinics nationwide",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: "https://compoundmeds.com",
  },
  category: "Pharmaceutical Supply",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${sans.variable} font-sans antialiased`}
      >
        {children}

        {/* HubSpot Tracking Code */}
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/243569761.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
