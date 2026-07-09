import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.steadyloadmoving.com";
const url = BASE_URL + "/industries/property-management";

export const metadata: Metadata = {
  title: "Property Management Movers Waco TX | SteadyLoad Moving",
  description: "Preferred movers for property managers in Waco, TX. Turnover-friendly scheduling and multi-unit support from SteadyLoad Moving.",
  alternates: { canonical: url },
  openGraph: { title: "Property Management Movers Waco TX | SteadyLoad Moving", description: "Preferred movers for property managers in Waco, TX. Turnover-friendly scheduling and multi-unit support from SteadyLoad Moving.", url, siteName: "SteadyLoad Moving", locale: "en_US", type: "website" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }