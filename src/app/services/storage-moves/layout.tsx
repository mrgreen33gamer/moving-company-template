import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.steadyloadmoving.com';
const url = BASE_URL + '/services/storage-moves';

export const metadata: Metadata = {
  title: "Storage Moves Waco TX | Unit Transfers | SteadyLoad Moving",
  description: "Storage unit movers in Waco, TX. Home-to-unit, unit-to-home, and storage-in-transit transfers from TXDOT-registered SteadyLoad crews.",
  keywords: [
    "storage movers Waco TX",
    "storage unit moving Waco",
    "storage transfer Central Texas",
    "SteadyLoad Moving",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Storage Moves Waco TX | Unit Transfers | SteadyLoad Moving",
    description: "Storage unit movers in Waco, TX. Home-to-unit, unit-to-home, and storage-in-transit transfers from TXDOT-registered SteadyLoad crews.",
    url, siteName: "SteadyLoad Moving", locale: "en_US", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Storage Moves Waco TX | Unit Transfers | SteadyLoad Moving", description: "Storage unit movers in Waco, TX. Home-to-unit, unit-to-home, and storage-in-transit transfers from TXDOT-registered SteadyLoad crews." },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Storage Moves Waco TX | Unit Transfers",
  description: "Storage unit movers in Waco, TX. Home-to-unit, unit-to-home, and storage-in-transit transfers from TXDOT-registered SteadyLoad crews.",
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
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Storage Moves Waco TX | Unit Transfers",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}