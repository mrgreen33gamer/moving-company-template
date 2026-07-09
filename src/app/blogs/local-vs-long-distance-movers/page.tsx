'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faRoute, faTruck, faFileContract, faClock, faShieldHalved, faMapLocationDot, faComments } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Local and long-distance moves are priced, scheduled, and protected differently. Central Texas families often assume the same rules apply to a Hewitt-to-Waco hop and a Waco-to-Dallas haul. They do not. Here is how to choose the right type of mover.",
  },
  {
    type: 'cards',
    heading: 'Local vs Long-Distance Snapshot',
    cards: [
      { icon: faTruck, title: 'Local moves', body: 'Usually same-day, shorter distance, often flat-rate by inventory and access rather than pure mileage.' },
      { icon: faRoute, title: 'Long-distance moves', body: 'Multi-day timelines, delivery windows, and more documentation around inventory and protection.' },
      { icon: faFileContract, title: 'Different paperwork', body: 'Longer hauls may involve more detailed inventories and protection selections.' },
      { icon: faClock, title: 'Scheduling differences', body: 'Local can be week-of; long-distance needs earlier booking for truck routes.' },
      { icon: faShieldHalved, title: 'Protection matters more at distance', body: 'More road miles means more reason to understand damage protection options up front.' },
      { icon: faMapLocationDot, title: 'Access still matters', body: 'Stairs and long carries affect both types — never ignore access in either quote.' },
      { icon: faComments, title: 'Ask better questions', body: 'Request written scopes, arrival windows, and what happens if weather delays the truck.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Comparison',
    tableHeaders: ['Factor', 'Local', 'Long-Distance'],
    tableRows: [
      ['Typical timing', 'Same day common', 'Pickup + delivery window'],
      ['Pricing drivers', 'Volume, stairs, access', 'Volume, distance, packing, access'],
      ['Best booking lead time', '1–3 weeks', '3–6+ weeks peak season'],
      ['Packing recommendation', 'Optional but helpful', 'Strongly recommended for fragile rooms'],
      ['Storage-in-transit', 'Rarely needed', 'Sometimes needed'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Not sure which category your move falls into? Call SteadyLoad at (254) 860-6060. We quote local and long-distance from Waco with the same transparent standards.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Measure distance and decide if same-day delivery is realistic',
      'Request a written inventory-based quote either way',
      'Ask about delivery windows for longer hauls',
      'Compare protection options before you sign',
      'Book earlier for summer long-distance routes',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Local vs Long-Distance Movers: What Central Texas Families Should Know"
        description="Pricing models, timelines, and paperwork differ. Here is how to choose the right type of mover for your Waco-area move."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Local vs long-distance movers comparison Central Texas"
        category="Guides"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Get the Right Quote for Your Move Type"
        body="SteadyLoad handles local and long-distance moves from Waco with flat-rate style quoting and an On-Time Arrival Guarantee."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="local-vs-long-distance-movers-blog" />
    </>
  );
}