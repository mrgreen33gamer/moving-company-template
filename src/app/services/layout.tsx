import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";

export const metadata: Metadata = {
  title: "Moving Services Waco TX | Local, Long-Distance & Packing",
  description:
    "SteadyLoad Moving services in Waco, TX: local moving, long-distance, packing, loading & unloading, office moving, and storage moves. TXDOT-registered · Fully Bonded & Insured.",
  keywords: [
    "moving services Waco TX",
    "local movers Waco",
    "long distance movers Central Texas",
    "packing services Waco",
    "office movers Waco TX",
    "SteadyLoad Moving",
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Moving Services Waco TX | Local, Long-Distance & Packing",
    description:
      "Local, long-distance, packing, office, and storage moves from SteadyLoad Moving — Waco, TX.",
    url: `${BASE_URL}/services`,
    siteName: "SteadyLoad Moving",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}