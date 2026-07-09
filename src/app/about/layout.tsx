import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";

export const metadata: Metadata = {
  title: "About SteadyLoad Moving | Waco TX Movers Since 2009",
  description:
    "SteadyLoad Moving is a Waco-owned moving company founded in 2009 by Tara Benson. Local & long-distance moves, packing, office, and storage transfers across Central Texas. TXDOT-registered · Fully Bonded & Insured.",
  keywords: [
    "about SteadyLoad Moving",
    "Waco movers since 2009",
    "Tara Benson movers",
    "TXDOT registered movers Waco",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About SteadyLoad Moving | Waco TX Movers Since 2009",
    description:
      "Locally owned movers in Waco, TX. Founded 2009 by Tara Benson. 18,000+ moves. On-Time Arrival Guarantee.",
    url: `${BASE_URL}/about`,
    siteName: "SteadyLoad Moving",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
