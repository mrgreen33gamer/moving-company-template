import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
const url = BASE_URL + "/industries/senior-moves";

export const metadata: Metadata = {
  title: "Senior Movers Waco TX | Downsizing Help | SteadyLoad Moving",
  description: "Senior and downsizing movers in Waco, TX. Patient crews, clear family pricing, and senior living experience from SteadyLoad Moving.",
  alternates: { canonical: url },
  openGraph: { title: "Senior Movers Waco TX | Downsizing Help | SteadyLoad Moving", description: "Senior and downsizing movers in Waco, TX. Patient crews, clear family pricing, and senior living experience from SteadyLoad Moving.", url, siteName: "SteadyLoad Moving", locale: "en_US", type: "website" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }