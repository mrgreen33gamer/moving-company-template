import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
export const metadata: Metadata = {
  title: "Industries Served | Corporate, Property Management & Senior Moves",
  description: "SteadyLoad Moving serves corporate relocation, property management, and senior moves across Waco and Central Texas.",
  alternates: { canonical: `${BASE_URL}/industries` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }