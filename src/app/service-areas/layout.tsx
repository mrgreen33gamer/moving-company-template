import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";

export const metadata: Metadata = {
  title: "Service Areas | Waco, Temple, Killeen & Central Texas Movers",
  description:
    "SteadyLoad Moving serves Waco, Hewitt, Woodway, Bellmead, China Spring, McGregor, Temple, Killeen, and surrounding Central Texas. Local & long-distance moves, packing, office, and storage.",
  alternates: { canonical: `${BASE_URL}/service-areas` },
  openGraph: {
    title: "Service Areas | SteadyLoad Moving",
    description: "Movers serving Waco and Central Texas communities.",
    url: `${BASE_URL}/service-areas`,
    siteName: "SteadyLoad Moving",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
