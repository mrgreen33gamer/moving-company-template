import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.steadyloadmoving.com';

export const metadata: Metadata = {
  title: 'Moving Tips & Insights | SteadyLoad Moving Blog',
  description:
    'Moving safety tips, long-distance moving guides, and office moving advice for Waco and Central Texas homeowners from SteadyLoad Moving.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Moving Tips & Insights | SteadyLoad Moving Blog',
    description: 'Practical moving guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'SteadyLoad Moving',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
