import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
export const metadata: Metadata = {
  title: "How to Prepare for Moving Day in Waco | SteadyLoad Moving",
  description: "A practical moving day timeline for Waco and Central Texas families — from eight weeks out to load morning.",
  alternates: { canonical: `${BASE_URL}/blogs/how-to-prepare-for-moving-day` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }