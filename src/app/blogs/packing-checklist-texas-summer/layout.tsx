import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
export const metadata: Metadata = {
  title: "Packing Checklist for a Texas Summer Move | SteadyLoad Moving",
  description: "Texas-specific packing checklist for Waco summer moves — heat, humidity, materials, and room-by-room priorities.",
  alternates: { canonical: `${BASE_URL}/blogs/packing-checklist-texas-summer` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }