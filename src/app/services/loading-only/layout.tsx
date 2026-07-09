import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.steadyloadmoving.com';
const url = BASE_URL + '/services/loading-only';

export const metadata: Metadata = {
  title: "Loading & Unloading Help Waco TX | SteadyLoad Moving",
  description: "Labor-only loading and unloading in Waco, TX. Hire SteadyLoad movers when you already have a truck or POD — bonded, insured, on-time crews.",
  keywords: [
    "loading help Waco TX",
    "movers labor only Waco",
    "unload truck help Central Texas",
    "SteadyLoad Moving",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Loading & Unloading Help Waco TX | SteadyLoad Moving",
    description: "Labor-only loading and unloading in Waco, TX. Hire SteadyLoad movers when you already have a truck or POD — bonded, insured, on-time crews.",
    url, siteName: "SteadyLoad Moving", locale: "en_US", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Loading & Unloading Help Waco TX | SteadyLoad Moving", description: "Labor-only loading and unloading in Waco, TX. Hire SteadyLoad movers when you already have a truck or POD — bonded, insured, on-time crews." },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Loading & Unloading Help Waco TX",
  description: "Labor-only loading and unloading in Waco, TX. Hire SteadyLoad movers when you already have a truck or POD — bonded, insured, on-time crews.",
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
  serviceType: "Loading & Unloading Help Waco TX",
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