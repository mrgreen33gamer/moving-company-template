import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.steadyloadmoving.com';
const url = BASE_URL + '/services/packing-services';

export const metadata: Metadata = {
  title: "Packing Services Waco TX | Professional Movers | SteadyLoad Moving",
  description: "Professional packing services in Waco, TX. Full or partial packing, quality materials, and fragile-first methods from TXDOT-registered SteadyLoad crews.",
  keywords: [
    "packing services Waco TX",
    "professional packers Waco",
    "moving packing help Central Texas",
    "SteadyLoad Moving",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Packing Services Waco TX | Professional Movers | SteadyLoad Moving",
    description: "Professional packing services in Waco, TX. Full or partial packing, quality materials, and fragile-first methods from TXDOT-registered SteadyLoad crews.",
    url,
    siteName: "SteadyLoad Moving",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packing Services Waco TX | Professional Movers | SteadyLoad Moving",
    description: "Professional packing services in Waco, TX. Full or partial packing, quality materials, and fragile-first methods from TXDOT-registered SteadyLoad crews.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packing Services Waco TX | Professional Movers",
  description: "Professional packing services in Waco, TX. Full or partial packing, quality materials, and fragile-first methods from TXDOT-registered SteadyLoad crews.",
  provider: {
    "@type": "MovingCompany",
    name: "SteadyLoad Moving",
    url: BASE_URL,
    telephone: "+12548606060",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3500 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
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
  serviceType: "Packing Services Waco TX | Professional Movers",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}