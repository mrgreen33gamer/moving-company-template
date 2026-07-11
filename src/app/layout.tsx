// src/app/layout.tsx
// SteadyLoad Moving — root layout
import type { Metadata, Viewport } from "next";
import { Righteous, Mukta, Hind } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

const fontTitle = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Mukta({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Hind({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.steadyloadmoving.com"
  : "http://localhost:3000";

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a5f" },
    { media: "(prefers-color-scheme: dark)",  color: "#1e3a5f" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SteadyLoad Moving | Local & Long-Distance Moves · Packing — Waco, TX",
    template: "%s | SteadyLoad Moving",
  },
  description:
    "SteadyLoad Moving is a Waco, TX moving company offering local moving, long-distance moves, packing services, loading & unloading, office moving, and storage moves for Central Texas homes and businesses. TXDOT-registered, fully bonded & insured.",
  keywords: [
    "SteadyLoad Moving",
    "movers Waco TX",
    "local moving Waco Texas",
    "long distance movers Waco",
    "packing services Central Texas",
    "office movers Waco TX",
    "moving company Hewitt TX",
    "storage moves Waco",
    "senior movers Waco",
  ],
  authors: [{ name: "SteadyLoad Moving", url: BASE_URL }],
  creator: "SteadyLoad Moving",
  publisher: "SteadyLoad Moving",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "SteadyLoad Moving | Local & Long-Distance Moves · Packing — Waco, TX",
    description:
      "Waco-based movers for local, long-distance, packing, office, and storage moves across Central Texas. TXDOT-registered & insured. On-Time Arrival Guarantee.",
    url: BASE_URL,
    siteName: "SteadyLoad Moving",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "SteadyLoad Moving — Waco TX Local & Long-Distance Movers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SteadyLoad Moving | Waco TX Movers",
    description:
      "Local & long-distance moves, packing, and office relocations for Central Texas. TXDOT-registered & insured — On-Time Arrival Guarantee.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
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
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${BASE_URL}/#organization`,
  name: "SteadyLoad Moving",
  alternateName: "SteadyLoad Moving Waco",
  description:
    "Residential and commercial moving services in Waco and Central Texas — local moving, long-distance moving, packing services, loading & unloading, office moving, and storage moves. TXDOT-registered crews, fully bonded & insured, On-Time Arrival Guarantee · Damage Protection Options.",
  url: BASE_URL,
  telephone: "+12548606060",
  email: "hello@steadyloadmoving.com",
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "Tara Benson",
    jobTitle: "Owner & Moving Director",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3500 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Moving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Long-Distance Moving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packing Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loading & Unloading" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Moving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storage Moves" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  sameAs: [
    "https://www.facebook.com/steadyloadmoving",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#38bdf8" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1e3a5f",
                }}
              >
                <PulseLoader size={50} color="#38bdf8" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
