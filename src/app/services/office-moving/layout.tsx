import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.steadyloadmoving.com';
const url = BASE_URL + '/services/office-moving';

export const metadata: Metadata = {
  title: "Office Movers Waco TX | Commercial Relocation | SteadyLoad Moving",
  description: "Office movers in Waco, TX. Weekend and after-hours commercial relocations with phased plans, labeling, and TXDOT-registered SteadyLoad crews.",
  keywords: [
    "office movers Waco TX",
    "commercial moving Waco",
    "business relocation Central Texas",
    "SteadyLoad Moving",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Office Movers Waco TX | Commercial Relocation | SteadyLoad Moving",
    description: "Office movers in Waco, TX. Weekend and after-hours commercial relocations with phased plans, labeling, and TXDOT-registered SteadyLoad crews.",
    url, siteName: "SteadyLoad Moving", locale: "en_US", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Office Movers Waco TX | Commercial Relocation | SteadyLoad Moving", description: "Office movers in Waco, TX. Weekend and after-hours commercial relocations with phased plans, labeling, and TXDOT-registered SteadyLoad crews." },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Office Movers Waco TX | Commercial Relocation",
  description: "Office movers in Waco, TX. Weekend and after-hours commercial relocations with phased plans, labeling, and TXDOT-registered SteadyLoad crews.",
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
  serviceType: "Office Movers Waco TX | Commercial Relocation",
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