import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
const url = BASE_URL + "/industries/corporate-relocation";

export const metadata: Metadata = {
  title: "Corporate Relocation Waco TX | SteadyLoad Moving",
  description: "Corporate relocation movers in Waco, TX. Employer-sponsored household and office moves with clear scopes from SteadyLoad Moving.",
  alternates: { canonical: url },
  openGraph: { title: "Corporate Relocation Waco TX | SteadyLoad Moving", description: "Corporate relocation movers in Waco, TX. Employer-sponsored household and office moves with clear scopes from SteadyLoad Moving.", url, siteName: "SteadyLoad Moving", locale: "en_US", type: "website" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }