// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.steadyloadmoving.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact SteadyLoad Moving | Get a Quote in Waco & Central Texas',
  description:
    'Contact SteadyLoad Moving to schedule local moving, long-distance moving, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 860-6060.',
  keywords: [
    'contact SteadyLoad Moving',
    'moving service Waco TX',
    'schedule local moving Waco',
    'moving estimate Central Texas',
    'SteadyLoad Moving contact',
    '254-860-6060',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact SteadyLoad Moving | Get a Quote in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, On-Time Arrival Guarantee · Damage Protection Options, TXDOT-registered Moving Specialists.',
    url,
    siteName: 'SteadyLoad Moving',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SteadyLoad Moving | Waco & Central Texas',
    description: 'Schedule moving service or get a free estimate. Call (254) 860-6060.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
