import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
export const metadata: Metadata = {
  title: "Local vs Long-Distance Movers | SteadyLoad Moving",
  description: "How local and long-distance moves differ for Central Texas families — pricing, timelines, and what to ask before you book.",
  alternates: { canonical: `${BASE_URL}/blogs/local-vs-long-distance-movers` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }